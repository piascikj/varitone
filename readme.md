## Tips for installing deps on MacOS
`npm install speaker --mpg123-backend=openal --python=python2.7 -S`
`npm i ear-pipe -S --python=python2.7`

## Chuck
- Chuck is required
- [ChucK => Strongly-timed, On-the-fly Music Programming Language](https://chuck.cs.princeton.edu/)

## Running a chuck program
- Run `chuck --probe` to determine device numbers
- adc = input
- `chuck --adc:1 --dac:2 --out:1 --in:1 chuck/envelope.ck`

# For the UI
- [Vue CLI Plugin Electron Builder](https://nklayman.github.io/vue-cli-plugin-electron-builder/)
- [Build a Basic CRUD App with Vue.js and Node | Okta Developer](https://developer.okta.com/blog/2018/02/15/build-crud-app-vuejs-node)


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

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).