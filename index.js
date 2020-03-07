const { exec, spawn } = require('child_process')
const { readdirSync } = require('fs')
const path = require('path')

const term = require( 'terminal-kit' ).terminal

function getUSBDevice (cb) {
  exec('chuck --probe', (err, stdout, stderr) => {
    if (err) return cb(err, {})
    const probeData = stderr.split('\n')
    const deviceData = probeData.filter(chunk => chunk.includes('audio device'))
    const devices = []
    deviceData.forEach(deviceLine => {
      devicePropLines = deviceLine.split('[chuck]: ')
      const device = {}
      devicePropLines.forEach(line => {
        if (line.includes('audio device:')) {
          device.number = line.replace(/^.*: (\d) .*$/, "$1")
        } else if (line.includes('device name')) {
          device.name = line.replace(/^.*= "(.*?)".*$/, "$1")
        } else if (line.includes('input channels')) {
          device.inputs = parseInt(line.replace(/^.*= (\d+).*$/, "$1"))
        } else if (line.includes('output channels')) {
          device.outputs = parseInt(line.replace(/^.*= (\d+).*$/, "$1"))
        }
      })
      if (device.name.includes('USB')) devices.push(device)
    })
  
    if (devices.length < 2) {
      return cb('No USB devices found', {})
    }
  
    const input = devices.find(({inputs}) => inputs > 0).number
    const output = devices.find(({outputs}) => outputs > 0).number 
    cb(null, {input, output})
  })
}

function runChuck({file, input, output}) {
  const child = spawn('chuck',[`--adc:${input}`, `--dac:${output}`, '--out:1', '--in:1', `${file}`], 
    {
      detached:true,
      stdio: 'ignore'
    })
  child.unref()
  return child
}

function showDisplay (cb) {
  term.fullscreen(true)
  term.green(`Current effect: ${currentEffect}\n`)
  term.cyan( 'Choose an effect:\n' ) ;
  const chuckFilesDir = path.join(__dirname, 'chuck' )
  let items = readdirSync(chuckFilesDir).filter(file => file.endsWith('.ck')).sort()
  items.push('Quit')
  
  term.gridMenu( items , function( err , response ) {
    currentEffect = response.selectedText
    term.grabInput( false )
    if (err) return cb(err)
    if (currentEffect === 'Quit') return cb(null, currentEffect)

    const file = path.join(chuckFilesDir, currentEffect)
    cb(null, file)
  })
}

function presentTerminal ({input, output}) {
  showDisplay((err, file) => {
    if (chuckProcess) chuckProcess.kill()
    if (err || file === 'Quit') {
      if (err) console.log(err)
      return process.exit(1)
    }
    chuckProcess = runChuck({file, input, output})
    presentTerminal({input, output})
  })  
}

let chuckProcess = null 
let currentEffect = ""

process.on('SIGINT', function() {
  console.log('SIGINT')
  if (chuckProcess) chuckProcess.kill()
  process.exit()
})

process.on('SIGTERM', function() {
  console.log('SIGTERM')
  if (chuckProcess) chuckProcess.kill()
  process.exit()
}) 

getUSBDevice((err, {input, output}) => {
  if (err) {
    console.log(err)
    process.exit(0)
  }
  presentTerminal({input, output})
})

