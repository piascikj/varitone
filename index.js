var mic = require('mic');
const Speaker = require('audio-speaker');

const speaker = Speaker({
  channels: 2,          // 2 channels
  bitDepth: 24,         // 16-bit samples
  sampleRate: 220500,     // 44,100 Hz sample rate
  samplesPerFrame: 1024
});

var micInstance = mic({
    rate: 220500,
    channels: 2,
    exitOnSilence: 20,
    bitwidth: 24
});
var micInputStream = micInstance.getAudioStream();

micInputStream.pipe(speaker);
 
micInstance.start();