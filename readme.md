## Tips for installing deps on MacOS
`npm install speaker --mpg123-backend=openal --python=python2.7 -S`
`npm i ear-pipe -S --python=python2.7`

## Chuck
- Chuck is required
- [ChucK => Strongly-timed, On-the-fly Music Programming Language](https://chuck.cs.princeton.edu/)

## Running a chuck program
- Run `chuck --probe` to determine device numbers
- `chuck --adc:1 --dac:2 --out:1 --in:1 chuck/envelope.ck`

# For the UI
- [Vue CLI Plugin Electron Builder](https://nklayman.github.io/vue-cli-plugin-electron-builder/)

Notes
----
- [ ] Use biquad filter for notch

Model
----
chuck programs will be constructed from an array of shreds where 
```json
[
  {
    "name": "OneOctaveDown",
    "time": {
      "ms": 1
    },
    "uGens": [
      { 
        "name": "adc"
      },
      {
        "name": "pitShift",
        "type": "PitShift",
        "props": {
          "mix": 1
        },
        "loop": {
          "shift": 0.5
        }
      },
      {
        "name": "jcRev",
        "type": "JCRev",
        "props": {
          "mix": 0.03
        }
      },
      {
        "name": "safety",
        "type": "Dyno"
      },
      {
        "name": "dac"
      }
    ]
  }
]
```
