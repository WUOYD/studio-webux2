<template>
  <div class="content">
    <h1>Track2</h1>
    <div class="trackInterface">
        <div class="instrument"></div>
        <div class="grid">
          <div class="cell" v-for="item in items" :id="item.id" @click="updateClick($event, item.id)">
	        </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.trackInterface {
  width: 100%;
  height: 100%;
  justify-items: stretch;
  display: flex;
}
.instrument {
  height: 10%;
  width: calc(100%/9);
  border: 3px solid rgb(60, 255, 255);
  display: flex;
  box-sizing: border-box;
}
h1 {
  width: 100%;
  text-align: left;
}
.grid {
  height: 10%;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.selected {
  background-color: #fff;
}
</style>

<script>
import { socket } from '../client'

export default {
  data() {
    return {
      items: [{id: 0},{id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7}]
    }
  },
  mounted(){
    socket.on("broadcastT2", index => {
      let element = document.getElementById(index.id);
      element.classList.toggle("selected");
    }),
    socket.on("updateComponentT2", track => {
      for (let i = 0; i < 8; i++) {
        if(track[i]){
          let element = document.getElementById(i);
          element.classList.toggle("selected");
        }
      }
    })
  },
  methods: {
    updateClick(element, index) {
      element.target.classList.toggle("selected");
      socket.emit("updateT2", index);
    }
  }
}
</script>

