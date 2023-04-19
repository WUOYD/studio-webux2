<template>
    <div id="header">
      <img src="../assets/logo/mashroom-logo-sm.svg" alt="logo">
      <button class="text icon play sm">sound on</button>
    </div>
</template>

<style scoped>

#header{
  padding: 20px 20px 0 20px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
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


