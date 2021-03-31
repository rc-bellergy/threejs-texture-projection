// import { EffectPass, VignetteEffect } from 'postprocessing'
import WebGLApp from './lib/WebGLApp'
import assets from './lib/AssetManager'
import Box from './scene/Box'
import { addNaturalLight } from './scene/lights'
// import { addScreenshotButton, addRecordButton } from './scene/screenshot-record-buttons'

// true if the url has the `?debug` parameter, otherwise false
window.DEBUG = window.location.search.includes('debug')

// grab our canvas
const canvas = document.querySelector('#app')

// setup the WebGLRenderer
// https://github.com/marcofugaro/threejs-modern-app#webglapp
const webgl = new WebGLApp({
  canvas,
  gamma: true,
  postprocessing: false,
  showFps: window.DEBUG,
  orbitControls: window.DEBUG,
  // config control-panel
  // https://www.npmjs.com/package/control-panel
  controls: {
    roughness: 0.5,
    movement: {
      speed: {
        value: 1.5,
        max: 100,
        scale: 'exp',
      },
      frequency: { value: 0.5, max: 5 },
      amplitude: { value: 0.7, max: 2 },
    },
  },
  hideControls: !window.DEBUG,
})

// attach it to the window to inspect in the console
if (window.DEBUG) {
  window.webgl = webgl
}

// hide canvas
webgl.canvas.style.visibility = 'hidden'

// load any queued assets
assets.load({ renderer: webgl.renderer }).then(() => {
  // add any "WebGL components" here...
  // append them to the scene so you can
  // use them from other components easily
  webgl.scene.box = new Box(webgl)
  webgl.scene.add(webgl.scene.box)

  // lights and other scene related stuff
  addNaturalLight(webgl)

  // postprocessing
  // add an existing effect from the postprocessing library
  // webgl.composer.addPass(new EffectPass(webgl.camera, new VignetteEffect()))

  // add the save screenshot and save gif buttons
  /*
  if (window.DEBUG) {
    addScreenshotButton(webgl)
    addRecordButton(webgl)
  }
  */

  // show canvas
  webgl.canvas.style.visibility = ''

  // start animation loop
  webgl.start()
})
