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
      items: [{ id: 40, tile: 0 }, { id: 41, tile: 1 }, { id: 42, tile: 2 }, { id: 43, tile: 3 }, { id: 44, tile: 4 }, { id: 45, tile: 5 }, { id: 46, tile: 6 }, { id: 47, tile: 7 }],
      mounted: false
    }
  },
  mounted() {
    this.mounted = true
    socket.on("updateComponentT4", track => {
      for (let index = 0; index < 8; index++) {
        let index_id = "4" + index;
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
            document.getElementById(40).classList.add("activeCell")
            document.getElementById(47).classList.remove("activeCell")
            break
          case 1:
            document.getElementById(41).classList.add("activeCell")
            document.getElementById(40).classList.remove("activeCell")
            break
          case 2:
            document.getElementById(42).classList.add("activeCell")
            document.getElementById(41).classList.remove("activeCell")
            break
          case 3:
            document.getElementById(43).classList.add("activeCell")
            document.getElementById(42).classList.remove("activeCell")
            break
          case 4:
            document.getElementById(44).classList.add("activeCell")
            document.getElementById(43).classList.remove("activeCell")
            break
          case 5:
            document.getElementById(45).classList.add("activeCell")
            document.getElementById(44).classList.remove("activeCell")
            break
          case 6:
            document.getElementById(46).classList.add("activeCell")
            document.getElementById(45).classList.remove("activeCell")
            break
          case 7:
            document.getElementById(47).classList.add("activeCell")
            document.getElementById(46).classList.remove("activeCell")
            break
        }
      }
      })
  },
  methods: {
    updateClick(element, index) {
      element.target.classList.toggle("selected");
      socket.emit("updateT4", index);
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

