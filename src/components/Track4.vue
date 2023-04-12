<template>
  <div class="content">
    <h1>Track 4</h1>
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

socket.on("broadcastT4", index => {
  let element = document.getElementById("4"+index);
  element.classList.toggle("selected");
})

socket.on("updateComponentT4", track => {
  for (let index = 0; index < 8; index++) {
    if (track[i]) {
      let element = document.getElementById("4"+index);
      element.classList.toggle("selected");
    }
    else {}
  }
})

export default {
  data() {
    return {
      items: [{ id: 40 }, { id: 41 }, { id: 42 }, { id: 43 }, { id: 44 }, { id: 45 }, { id: 46 }, { id: 47 }]
    }
  },
  mounted() {
  },
  methods: {
    updateClick(element, index) {
      element.target.classList.toggle("selected");
      socket.emit("updateT4", index);
    },
    updateComp(comp) {
        socket.emit("updateComp", comp);
    }
  }
}
</script>

