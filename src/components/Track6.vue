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

