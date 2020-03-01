fun void octave(float shift, float pitchMix, UGen reverb) {

  adc => Dyno safety => PitShift p => reverb => dac;

  pitchMix => p.mix;

  while (1)
  {
      shift => p.shift;
      1::ms => now;
  }
}

fun void reverb(float mix) {
  adc => Dyno safety => JCRev reverb => dac;
  mix => reverb.mix;
  while (1)
  {
      1::ms => now;
  }
}

fun void delay() {
  // feedforward
  adc => Gain g => dac;
  // feedback
  g => Gain feedback => DelayL delay => g;

  // set delay parameters
  .75 => delay.gain;
  .2::second => delay.max => delay.delay;
  // set feedback
  .0 => feedback.gain;
  // set effects mix
  
  // infinite time loop
  while( true ) 1::ms => now;
}

// [cents to frequency ratios conversion and convert frequency ratio to cent interval Hz cps pitch piano tuning calculator audio change fraction TET cents to hertz (herz) calculator ¢ minor third major semitone convert hertz to semitones equation semi tone keyboard - sengpielaudio Sengpiel Berlin](http://www.sengpielaudio.com/calculator-centsratio.htm)
// [The Use of Cents for Expressing Musical Intervals](http://hyperphysics.phy-astr.gsu.edu/hbase/Music/cents.html)
.005 => float reverbMix;
0.25 => float twoOctavesDown;
0.5 => float oneOctaveDown;
2.0 => float oneOctaveUp;

// PRCRev currentReverb;
// NRev currentReverb;
JCRev currentReverb;

reverbMix => currentReverb.mix;

spork ~ reverb(reverbMix);
spork ~ octave(oneOctaveDown, 0.85, currentReverb);
// spork ~ octave(oneOctaveUp, 0.5, currentReverb);
// spork ~ octave(twoOctavesDown, .8, currentReverb);
// spork ~ delay();
// spork ~ octave(1, .3, currentReverb);
// spork ~ octave(0.5, mix);
// spork ~ octave(0.749154, mix);
// spork ~ octave(1.259921, mix);
// spork ~ octave(2, mix);


while (1) {
    0.001 :: second => now;
}