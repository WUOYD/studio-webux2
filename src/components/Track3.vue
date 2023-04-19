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
      items: [{ id: 30, tile: 0 }, { id: 31, tile: 1 }, { id: 32, tile: 2 }, { id: 33, tile: 3 }, { id: 34, tile: 4 }, { id: 35, tile: 5 }, { id: 36, tile: 6 }, { id: 37, tile: 7 }],
      mounted: false
    }
  },
  mounted() {
    this.mounted = true
    socket.on("updateComponentT3", track => {
      if (this.mounted == true) {
        for (let index = 0; index < 8; index++) {
          let index_id = "3" + index;
          let element = document.getElementById(index_id);
          if (track[index]) {
            element.classList.add("selected");
          }
          else if (!track[index]) {
            element.classList.remove("selected");
          }
          else { }
        }
      }
    })
    socket.on("sequencerStep", bar => {
      if (this.mounted) {
        switch (bar) {
          case 0:
            document.getElementById(30).classList.add("activeCell")
            document.getElementById(37).classList.remove("activeCell")
            break
          case 1:
            document.getElementById(31).classList.add("activeCell")
            document.getElementById(30).classList.remove("activeCell")
            break
          case 2:
            document.getElementById(32).classList.add("activeCell")
            document.getElementById(31).classList.remove("activeCell")
            break
          case 3:
            document.getElementById(33).classList.add("activeCell")
            document.getElementById(32).classList.remove("activeCell")
            break
          case 4:
            document.getElementById(34).classList.add("activeCell")
            document.getElementById(33).classList.remove("activeCell")
            break
          case 5:
            document.getElementById(35).classList.add("activeCell")
            document.getElementById(34).classList.remove("activeCell")
            break
          case 6:
            document.getElementById(36).classList.add("activeCell")
            document.getElementById(35).classList.remove("activeCell")
            break
          case 7:
            document.getElementById(37).classList.add("activeCell")
            document.getElementById(36).classList.remove("activeCell")
            break
        }
      }
    })
  },
  methods: {
    updateClick(element, index) {
      element.target.classList.toggle("selected");
      socket.emit("updateT3", index);
    }
  },
  beforeUnmount() {
    this.mounted = false;
  }
}
</script>

