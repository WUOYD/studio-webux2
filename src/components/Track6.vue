<template>
  <div class="content">
    <h1>Track 6</h1>
    <div id="backbutton" @click="updateView(0)"></div>
    <div class="trackInterface">
      <div class="instrument"></div>
      <div class="grid">
        <div class="cell" v-for="item in items" :id="item.id" :tile="item.tile" @click="updateClick($event, item.tile)">
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

#backbutton {
  background-color: aqua;
  height: 10%;
  width: 10%;
}
</style>

<script>
import { socket } from '../client'

socket.on("updateComponentT5", track => {
  for (let index = 0; index < 8; index++) {
    let index_id = "6" + index;
    let element = document.getElementById(index_id);
    if (track[index]) {
      element.classList.add("selected");
    }
    else if (!track[index]) {
      element.classList.remove("selected");
    }
    else {}
  }
})

export default {
  data() {
    return {
      items: [{ id: 60, tile: 0}, { id: 61, tile: 1}, { id: 62, tile: 2}, { id: 63 , tile: 3}, { id: 64, tile: 4 }, { id: 65, tile: 5 }, { id: 66, tile: 6 }, { id: 67, tile: 7 }]
    }
  },
  mounted() {
  },
  methods: {
    updateClick(element, index) {
      element.target.classList.toggle("selected");
      socket.emit("updateT6", index);
    },
    updateView(comp) {
      socket.emit("updateView", comp);
    }
  }
}
</script>

