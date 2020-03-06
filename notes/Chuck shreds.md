---
computed:
  timestamp: (new Date()).toISOString()
template: | # this is the card template
  
  <!-- created:${timestamp} -->  
  Created: {{(new Date(created)).toLocaleString()}}  
  File: [{{source.path}}:{{line}}]({{source.path}}:{{line}})
---

# [Chuck shreds](#NOTES:0)
#### octave-reverb
```bash
node index chuck/octave-reverb.ck
```
#### SameOctave
```bash
node index chuck/SameOctave.ck
```
#### OneOctaveUp
```bash
node index chuck/OneOctaveUp.ck
```
#### OneOctaveDown
```bash
node index chuck/OneOctaveDown.ck
```
#### TwoOctavesDown
```bash
node index chuck/TwoOctavesDown.ck
```
<!-- created:2020-03-04T22:50:54.297Z expand:1 -->  
Created: {{(new Date(created)).toLocaleString()}}  
File: [{{source.path}}:{{line}}]({{source.path}}:{{line}})

