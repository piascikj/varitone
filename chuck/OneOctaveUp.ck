adc => PitShift pitch => JCRev reverb => Dyno safety => dac;

0.9 => pitch.mix;
0.03 => reverb.mix;

while (true) {
  2 => pitch.shift;

  1::ms => now;
}
