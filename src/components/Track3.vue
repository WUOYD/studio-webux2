<template>
  <div class="content">
    <div class="grid">
      <div class="cell" v-for="item in items" :id="item.id" :tile="item.tile" @click="updateClick($event, item.tile)">
      </div>
    </div>
  </div>
</template>


<script>
import { socket } from '../client'

socket.on("updateComponentT3", track => {
  for (let index = 0; index < 8; index++) {
    let index_id = "3" + index;
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
      items: [{ id: 30, tile: 0}, { id: 31, tile: 1}, { id: 32, tile: 2}, { id: 33 , tile: 3}, { id: 34, tile: 4 }, { id: 35, tile: 5 }, { id: 36, tile: 6 }, { id: 37, tile: 7 }]
    }
  },
  mounted() {
  },
  methods: {
    updateClick(element, index) {
      element.target.classList.toggle("selected");
      socket.emit("updateT3", index);
    },
    updateView(comp) {
      socket.emit("updateView", comp);
    }
  }
}
</script>

