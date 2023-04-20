<template>
    <div id="header">
      <button class="icon back sm" @click="updateView(0)"></button>

        <div class="title">
          <img src="../assets/icons/icon-fisch.svg" alt="icon">
          <h1>mashroom</h1>
        </div>

        <button class="icon trash sm" @click="reset()"></button>
    </div>
</template>

<style scoped>
.title{
  display: flex;
  align-items: center;
  gap: 15px;
}

</style>

<script>
import { socket } from '../client'

export default {
  methods: {
    updateView(comp) {
      socket.emit("updateView", comp);
    },
    mute() {
      socket.emit("mute", "mute");
    },
    reset(){
      socket.emit("reset", "reset");
    }
  }
}
</script>
