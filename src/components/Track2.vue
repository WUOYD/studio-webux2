<template>
  <div class="content">
    <h1>Track 2</h1>
    <div id="backbutton" @click="updateComp(0)"></div>
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

#backbutton {
  background-color: aqua;
  height: 10%;
  width: 10%;
}
</style>

<script>
import { socket } from '../client'

socket.on("updateComponentT2", track => {
  for (let index = 0; index < 8; index++) {
    if (track[index]) {
      let element = document.getElementById("2"+index);
      element.classList.add("selected");
    }
    else if (!track[index]) {
      let element = document.getElementById("2"+index);
      element.classList.remove("selected");
    }
    else {}
  }
})

export default {
  data() {
    return {
      items: [{ id: 20 }, { id: 21 }, { id: 22 }, { id: 23 }, { id: 24 }, { id: 25 }, { id: 26 }, { id: 27 }]
    }
  },
  mounted() {
  },
  methods: {
    updateClick(element, index) {
      element.target.classList.toggle("selected");
      socket.emit("updateT2", index);
    },
    updateComp(comp) {
        socket.emit("updateComp", comp);
    }
  }
}
</script>

