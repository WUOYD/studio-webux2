<script setup>
import Sequencer from './components/Sequencer.vue'
import Titlescreen from './components/Titlescreen.vue'
import Header from './components/Header.vue'
import HeaderTrack from './components/HeaderTrack.vue'
import Footer from './components/Footer.vue'
import Track1 from './components/Track1.vue'
import Track2 from './components/Track2.vue'
import Track3 from './components/Track3.vue'
import Track4 from './components/Track4.vue'
import Track5 from './components/Track5.vue'
import Track6 from './components/Track6.vue'
</script>

<template>
  <Titlescreen />
    <Header v-if="header" />
    <HeaderTrack v-else />
    <component :is="comp"></component>
  <Footer />
</template>

<script>
import { socket } from './client.js'
export default {
  components: {
    Sequencer,
    Track1,
    Track2,
    Track3,
    Track4,
    Track5,
    Track6,
  },
  header: {
    Header,
    HeaderTrack
  },
  created() {
    socket.connect();
  },
  data() {
    return {
      comp: "Sequencer",
      header: true
    }
  },
  mounted() {
    socket.on('updateClientView', comp => {
      switch (comp) {
        case 0:
          this.updateView("Sequencer")
          break;
        case 1:
          this.updateView("Track1")
          break;
        case 2:
          this.updateView("Track2")
          break;
        case 3:
          this.updateView("Track3")
          break;
        case 4:
          this.updateView("Track4")
          break;
        case 5:
          this.updateView("Track5")
          break;
        case 6:
          this.updateView("Track6")
          break;
      }
    })
  },
  methods: {
    updateView(comp) {
      this.comp = comp
      if(comp=="Sequencer"){
        this.header = true
      }
      else{
        this.header = false
      }
    }
  },
  beforeUnmount() {
    socket.disconnect();
  }

}
</script>