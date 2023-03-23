<script setup>
  import Sequencer from './components/Sequencer.vue'
  import Track from './components/Track.vue'
  import Options from './components/Options.vue'
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <Header /> 
  <keep-alive>       
      <component :is="comp"></component>  
  </keep-alive>
  <Footer /> 
</template>

<script>
export default{
  components:{
    Sequencer,
    Track,
    Options
  },
  data() {
    return{comp:"Sequencer"}
  },
  mounted(){
    document.getElementById("navsequencer").addEventListener("click", this.updateSeq);
    document.getElementById("navtrack").addEventListener("click", this.updateTra);
    document.getElementById("navoptions").addEventListener("click", this.updateOpt);
  },
  methods:{
    updateSeq() {
      this.comp = "Sequencer"
    },
    updateTra(){
      this.comp = "Track"
    },
    updateOpt(){
      this.comp = "Options"
    }
  },
}
</script>