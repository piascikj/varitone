# [Use probe to get audio configuration](#DONE:0)
<!-- completed:2020-03-05T00:32:03.388Z -->
```bash
chuck --probe &> probe.log
```
- **dac:** Output device
- **adc:** Input device

[chuck]: found 3 device(s) ...
[chuck]: ------( audio device: 1 )---------------
[chuck]: device name = "Apple Inc.: DisplayPort"
[chuck]: probe [success] ...
[chuck]: # output channels = 2
[chuck]: # input channels  = 0
[chuck]: # duplex Channels = 0
[chuck]: default output = NO
[chuck]: default input = NO
[chuck]: natively supported data formats:
[chuck]:   32-bit float
[chuck]: supported sample rates:
[chuck]:   32000 Hz
[chuck]:   44100 Hz
[chuck]:   48000 Hz
[chuck]: 
[chuck]: ------( audio device: 2 )---------------
[chuck]: device name = "Apple Inc.: MacBook Pro Microphone"
[chuck]: probe [success] ...
[chuck]: # output channels = 0
[chuck]: # input channels  = 1
[chuck]: # duplex Channels = 0
[chuck]: default output = NO
[chuck]: default input = YES
[chuck]: natively supported data formats:
[chuck]:   32-bit float
[chuck]: supported sample rates:
[chuck]:   44100 Hz
[chuck]:   48000 Hz
[chuck]:   88200 Hz
[chuck]:   96000 Hz
[chuck]: 
[chuck]: ------( audio device: 3 )---------------
[chuck]: device name = "Apple Inc.: MacBook Pro Speakers"
[chuck]: probe [success] ...
[chuck]: # output channels = 2
[chuck]: # input channels  = 0
[chuck]: # duplex Channels = 0
[chuck]: default output = YES
[chuck]: default input = NO
[chuck]: natively supported data formats:
[chuck]:   32-bit float
[chuck]: supported sample rates:
[chuck]:   44100 Hz
[chuck]:   48000 Hz
[chuck]:   88200 Hz
[chuck]:   96000 Hz
[chuck]: 
[chuck]: 
[chuck]: ------( chuck -- 0 MIDI inputs )------
[chuck]: 
[chuck]: ------( chuck -- 0 MIDI outputs )-----
[chuck]: 

