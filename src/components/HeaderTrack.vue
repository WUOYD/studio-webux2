<template>
    <div id="header">
        <button class="icon" @click="updateView(0)">
          <img src="../assets/icons/icon-back.svg" alt="sound on">
        </button>
        <div class="title">
          <img src="../assets/icons/icon-fisch.svg" alt="icon">
          <h1>MashRoom</h1>
        </div>
        <div class="btn-group">
          <button class="icon" @click="updateStatus()">
            <img src="../assets/icons/icon-sound-on.svg" alt="sound on">
          </button>
          <button class="icon" @click="updateStatus()">
            <img src="../assets/icons/icon-trash.svg" alt="sound on">
          </button>
        </div>
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

.title{
  display: flex;
  align-items: center;
  gap: 15px;
}

.btn-group{
  display: flex;
  gap: 15px;
}

</style>

<script>
import { socket } from '../client'

export default {
  methods: {
    updateView(comp) {
      socket.emit("updateView", comp);
    }
  }
}
</script>
