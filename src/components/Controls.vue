<script setup>
  import { sequencer } from '../scripts';
</script>

<template>
  <div class="controls">
    <img class="controlele" id="play" src="../assets/icons/play.svg">
    <img class="controlele" id="stop" src="../assets/icons/stop.svg">
  </div>
</template>

<style scoped>
 .controls{
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
 }

.controlele{
  width: 5%;
  display: flex;
  justify-content: center;
  margin: 1rem;
}
</style>

<script>
export default{
  mounted(){
    document.getElementById("play").addEventListener("click", this.updatePlay);
    document.getElementById("stop").addEventListener("click", this.updateStop);
  },
  methods:{
    updatePlay() {
      this.$status = "play"
      sequencer()
    },
    updateStop() {
      this.$status = "stop"
      sequencer()
    },
  },
}
</script>