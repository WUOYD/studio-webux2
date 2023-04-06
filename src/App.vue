<script setup>
  import Sequencer from './components/Sequencer.vue'
  import Options from './components/Options.vue'
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import Track1 from './components/Track1.vue'
  import Track2 from './components/Track2.vue'
  import Track3 from './components/Track3.vue'
  import Track4 from './components/Track4.vue'
  import Track5 from './components/Track5.vue'
  import Track6 from './components/Track6.vue'
</script>

<template>
  <Header /> 
  <keep-alive>       
      <component :is="comp"></component>  
  </keep-alive>
  <Footer /> 
</template>

<script>
import { socket } from './client.js'
export default{
  components:{
    Sequencer,
    Track1,
    Track2,
    Track3,
    Track4,
    Track5,
    Track6,
    Options
  },
  created(){
    socket.connect();
  },
  data() {
    return{
      comp:"Sequencer"
    }
  },
  mounted() {
  },
  methods:{
    updateComp(comp) {
      this.comp = comp
    }
  },
  beforeUnmount(){
    socket.disconnect();
  }
  
}
</script>