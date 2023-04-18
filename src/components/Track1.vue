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

export default {
  data() {
    return {
      items: [{ id: 10, tile: 0 }, { id: 11, tile: 1 }, { id: 12, tile: 2 }, { id: 13, tile: 3 }, { id: 14, tile: 4 }, { id: 15, tile: 5 }, { id: 16, tile: 6 }, { id: 17, tile: 7 }],
      mounted: false
    }
  },
  mounted() {
    this.mounted = true
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
        else { }
      }
    })
    socket.on("sequencerStep", bar => {
      if (this.mounted) {
        switch (bar) {
          case 0:
            document.getElementById(10).classList.add("activeCell")
            document.getElementById(17).classList.remove("activeCell")
            break
          case 1:
            document.getElementById(11).classList.add("activeCell")
            document.getElementById(10).classList.remove("activeCell")
            break
          case 2:
            document.getElementById(12).classList.add("activeCell")
            document.getElementById(11).classList.remove("activeCell")
            break
          case 3:
            document.getElementById(13).classList.add("activeCell")
            document.getElementById(12).classList.remove("activeCell")
            break
          case 4:
            document.getElementById(14).classList.add("activeCell")
            document.getElementById(13).classList.remove("activeCell")
            break
          case 5:
            document.getElementById(15).classList.add("activeCell")
            document.getElementById(14).classList.remove("activeCell")
            break
          case 6:
            document.getElementById(16).classList.add("activeCell")
            document.getElementById(15).classList.remove("activeCell")
            break
          case 7:
            document.getElementById(17).classList.add("activeCell")
            document.getElementById(16).classList.remove("activeCell")
            break
        }
      }
      else {
      }
    })
  },
  methods: {
    updateClick(element, index) {
      element.target.classList.toggle("selected");
      socket.emit("updateT1", index);
    },
    updateView(comp) {
      socket.emit("updateView", comp);
    }
  },
  beforeUnmount() {
    this.mounted = false;
  }
}
</script>

