<template>
    <div id="header">
      <img src="../assets/logo/mashroom-logo-sm.svg" alt="logo">
      <div class="btn-wrapper">
        <button class="text icon play sm" @click="mute()">device sound</button>
        <button class="icon trash sm" @click="reset()"></button>
      </div>
    </div>
</template>

<style scoped>
  button.play{
    margin-right: 10px;
  }
</style>

<script>
import { socket } from '../client'

export default {
  methods: {
    mute() {
      socket.emit("mute", "mute");
    },
    reset(){
      socket.emit("reset", "reset");
    }
  }
}
</script>


