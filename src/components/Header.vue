<template>
    <div id="header">
        <button class="icon">
          <img src="../assets/icons/icon-sound-on.svg" alt="sound on" @click="mute()">
        </button>
    </div>
</template>

<style scoped>

#header{
  padding: 20px 20px 0 20px;
  width: 100%;
  box-sizing: border-box;
}
</style>

<script>
import { socket } from '../client'

export default {
  methods: {
    mute() {
      socket.emit("mute", "mute");
    }
  }
}
</script>


