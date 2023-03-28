import { createApp} from 'vue'
import './style.css'
import App from './App.vue'
import './scripts.js'

const app = createApp(App);
app.mount('#app')

app.config.globalProperties.$tracks = new Map([
    ["track1", [false,false,false,false,false,false,false,false]],
    ["track2", [false,false,false,false,false,false,false,false]],
    ["track3", [false,false,false,false,false,false,false,false]],
    ["track4", [false,false,false,false,false,false,false,false]],
    ["track5", [false,false,false,false,false,false,false,false]],
    ["track6", [false,false,false,false,false,false,false,false]]
  ])

  app.config.globalProperties.$status = "stop"
