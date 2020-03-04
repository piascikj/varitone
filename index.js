const { exec } = require('child_process')
exec('chuck --probe', (err, stdout, stderr) => {
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

  console.log(devices)
  if (devices.length < 2) {
    console.log('No USB devices found')
    return
  }

  const adc = devices.find(({inputs}) => inputs > 0).number
  const dac = devices.find(({outputs}) => outputs > 0).number
  
  exec(`chuck --adc:${adc} --dac:${dac} --out:1 --in:1 chuck/octave-reverb.ck`)
})