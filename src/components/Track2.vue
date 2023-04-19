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
      items: [{ id: 20, tile: 0 }, { id: 21, tile: 1 }, { id: 22, tile: 2 }, { id: 23, tile: 3 }, { id: 24, tile: 4 }, { id: 25, tile: 5 }, { id: 26, tile: 6 }, { id: 27, tile: 7 }],
      mounted: false
    }
  },
  mounted() {
    this.mounted = true
    socket.on("updateComponentT2", track => {
      if (this.mounted == true) {
        for (let index = 0; index < 8; index++) {
          let index_id = "2" + index;
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
            document.getElementById(20).classList.add("activeCell")
            document.getElementById(27).classList.remove("activeCell")
            break
          case 1:
            document.getElementById(21).classList.add("activeCell")
            document.getElementById(20).classList.remove("activeCell")
            break
          case 2:
            document.getElementById(22).classList.add("activeCell")
            document.getElementById(21).classList.remove("activeCell")
            break
          case 3:
            document.getElementById(23).classList.add("activeCell")
            document.getElementById(22).classList.remove("activeCell")
            break
          case 4:
            document.getElementById(24).classList.add("activeCell")
            document.getElementById(23).classList.remove("activeCell")
            break
          case 5:
            document.getElementById(25).classList.add("activeCell")
            document.getElementById(24).classList.remove("activeCell")
            break
          case 6:
            document.getElementById(26).classList.add("activeCell")
            document.getElementById(25).classList.remove("activeCell")
            break
          case 7:
            document.getElementById(27).classList.add("activeCell")
            document.getElementById(26).classList.remove("activeCell")
            break
        }
      }
    })
  },
  methods: {
    updateClick(element, index) {
      element.target.classList.toggle("selected");
      socket.emit("updateT2", index);
    }
  },
  beforeUnmount() {
    this.mounted = false;
  }
}
</script>

