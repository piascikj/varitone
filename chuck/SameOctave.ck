adc => PitShift pitch => JCRev reverb => Dyno safety => dac;

0.75 => pitch.mix;
0.03 => reverb.mix;

while (true) {
  1 => pitch.shift;

  1::ms => now;
}
