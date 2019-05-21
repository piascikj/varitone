const shreds = require('./shreds')
const {EOL} = require('os')

function getUGens({uGens}) {
  let out = ''

  uGens.forEach((uGen, i) => {
    const {type, name} = uGen
    if (type) out += `${type} `
    out += `${name}`
    if (i < uGens.length-1) out += ' => '
  })
  return `${out};${EOL}`
}

function getProps({uGens}) {
  let out = ''
  uGens.forEach(uGen => {
    const {props, name} = uGen
    if (!props) return
    for (let key in props) {
      if( props.hasOwnProperty(key) ) {
        out += `${props[key]} => ${name}.${key};${EOL}`
      } 
    } 
  })
  return out
}

function getLoop({uGens, time}) {
  let out = ''
  uGens.forEach(uGen => {
    const {loop, name} = uGen
    if (!loop) return
    for (let key in loop) {
      if( loop.hasOwnProperty(key) ) {
        out += `${loop[key]} => ${name}.${key};${EOL}`
      } 
    } 
  })
  return `while (true) {
  ${out}
  ${time.value}::${time.increment} => now;
}`
}

function getChuckShred(shred) {
  console.log(shred)
  const {name} = shred
  let out = ''
  out += getUGens(shred) + EOL
  out += getProps(shred) + EOL
  out += getLoop(shred) + EOL
  return out
}

shreds.forEach(shred => {
  console.log(getChuckShred(shred))
});

// fun void octave(float shift, float pitchMix, UGen reverb) {
//   adc => Dyno safety => PitShift p => reverb => dac;
//   pitchMix => p.mix;
//   while (1)
//   {
//       shift => p.shift;
//       1::ms => now;
//   }
// }