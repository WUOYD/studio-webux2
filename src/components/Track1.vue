<template>
  <div class="content">
    <div class="grid">
      <div class="cell" v-for="item in items" :id="item.id" :tile="item.tile" @click="updateClick($event, item.tile)">
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: flex;
  gap: 15px;
  padding-left: 50px;
}

</style>

<script>
import { socket } from '../client'

socket.on("updateComponentT1", track => {
  for (let index = 0; index < 8; index++) {
    let index_id = "1" + index;
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
      items: [{ id: 10, tile: 0}, { id: 11, tile: 1}, { id: 12, tile: 2}, { id: 13 , tile: 3}, { id: 14, tile: 4 }, { id: 15, tile: 5 }, { id: 16, tile: 6 }, { id: 17, tile: 7 }]
    }
  },
  mounted() {
  },
  methods: {
    updateClick(element, index) {
      element.target.classList.toggle("selected");
      socket.emit("updateT1", index);
    },
    updateView(comp) {
      socket.emit("updateView", comp);
    }
  }
}
</script>

