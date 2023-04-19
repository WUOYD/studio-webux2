<template>
  <div class="content">
    <div class="grid">
      <div class="cell" v-for="item in items1" :id="item.id" :tile="item.tile" @click="updateClick1($event, item.tile)">
      </div>
    </div>
    <div class="grid">
      <div class="cell" v-for="item in items2" :id="item.id" :tile="item.tile" @click="updateClick2($event, item.tile)">
      </div>
    </div>
    <div class="grid">
      <div class="cell" v-for="item in items3" :id="item.id" :tile="item.tile" @click="updateClick3($event, item.tile)">
      </div>
    </div>
    <div class="grid">
      <div class="cell" v-for="item in items4" :id="item.id" :tile="item.tile" @click="updateClick4($event, item.tile)">
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  gap: 15px;
}

.cell {
  height: 13vh;
}
</style>

<script>
import { socket } from '../client'

export default {
  data() {
    return {
      items1: [{ id: 410, tile: 0 }, { id: 411, tile: 1 }, { id: 412, tile: 2 }, { id: 413, tile: 3 }, { id: 414, tile: 4 }, { id: 415, tile: 5 }, { id: 416, tile: 6 }, { id: 417, tile: 7 }],
      items2: [{ id: 420, tile: 0 }, { id: 421, tile: 1 }, { id: 422, tile: 2 }, { id: 423, tile: 3 }, { id: 424, tile: 4 }, { id: 425, tile: 5 }, { id: 426, tile: 6 }, { id: 427, tile: 7 }],
      items3: [{ id: 430, tile: 0 }, { id: 431, tile: 1 }, { id: 432, tile: 2 }, { id: 433, tile: 3 }, { id: 434, tile: 4 }, { id: 435, tile: 5 }, { id: 436, tile: 6 }, { id: 437, tile: 7 }],
      items4: [{ id: 440, tile: 0 }, { id: 441, tile: 1 }, { id: 442, tile: 2 }, { id: 443, tile: 3 }, { id: 444, tile: 4 }, { id: 445, tile: 5 }, { id: 446, tile: 6 }, { id: 447, tile: 7 }],
      mounted: false
    }
  },
  mounted() {
    this.mounted = true
    socket.on("updateComponentT41", track => {
      if (this.mounted == true) {
        for (let index = 0; index < 8; index++) {
          let index_id = "41" + index;
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

    socket.on("updateComponentT42", track => {
      if (this.mounted == true) {
        for (let index = 0; index < 8; index++) {
          let index_id = "42" + index;
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

    socket.on("updateComponentT43", track => {
      if (this.mounted == true) {
        for (let index = 0; index < 8; index++) {
          let index_id = "43" + index;
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

    socket.on("updateComponentT44", track => {
      if (this.mounted == true) {
        for (let index = 0; index < 8; index++) {
          let index_id = "44" + index;
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
            document.getElementById(410).classList.add("activeCell")
            document.getElementById(417).classList.remove("activeCell")
            document.getElementById(420).classList.add("activeCell")
            document.getElementById(427).classList.remove("activeCell")
            document.getElementById(430).classList.add("activeCell")
            document.getElementById(437).classList.remove("activeCell")
            document.getElementById(440).classList.add("activeCell")
            document.getElementById(447).classList.remove("activeCell")
            break
          case 1:
            document.getElementById(411).classList.add("activeCell")
            document.getElementById(410).classList.remove("activeCell")
            document.getElementById(421).classList.add("activeCell")
            document.getElementById(420).classList.remove("activeCell")
            document.getElementById(431).classList.add("activeCell")
            document.getElementById(430).classList.remove("activeCell")
            document.getElementById(441).classList.add("activeCell")
            document.getElementById(440).classList.remove("activeCell")
            break
          case 2:
            document.getElementById(412).classList.add("activeCell")
            document.getElementById(411).classList.remove("activeCell")
            document.getElementById(422).classList.add("activeCell")
            document.getElementById(421).classList.remove("activeCell")
            document.getElementById(432).classList.add("activeCell")
            document.getElementById(431).classList.remove("activeCell")
            document.getElementById(442).classList.add("activeCell")
            document.getElementById(441).classList.remove("activeCell")
            break
          case 3:
            document.getElementById(413).classList.add("activeCell")
            document.getElementById(412).classList.remove("activeCell")
            document.getElementById(423).classList.add("activeCell")
            document.getElementById(422).classList.remove("activeCell")
            document.getElementById(433).classList.add("activeCell")
            document.getElementById(432).classList.remove("activeCell")
            document.getElementById(443).classList.add("activeCell")
            document.getElementById(442).classList.remove("activeCell")
            break
          case 4:
            document.getElementById(414).classList.add("activeCell")
            document.getElementById(413).classList.remove("activeCell")
            document.getElementById(424).classList.add("activeCell")
            document.getElementById(423).classList.remove("activeCell")
            document.getElementById(434).classList.add("activeCell")
            document.getElementById(433).classList.remove("activeCell")
            document.getElementById(444).classList.add("activeCell")
            document.getElementById(443).classList.remove("activeCell")
            break
          case 5:
            document.getElementById(415).classList.add("activeCell")
            document.getElementById(414).classList.remove("activeCell")
            document.getElementById(425).classList.add("activeCell")
            document.getElementById(424).classList.remove("activeCell")
            document.getElementById(435).classList.add("activeCell")
            document.getElementById(434).classList.remove("activeCell")
            document.getElementById(445).classList.add("activeCell")
            document.getElementById(444).classList.remove("activeCell")
            break
          case 6:
            document.getElementById(416).classList.add("activeCell")
            document.getElementById(415).classList.remove("activeCell")
            document.getElementById(426).classList.add("activeCell")
            document.getElementById(425).classList.remove("activeCell")
            document.getElementById(436).classList.add("activeCell")
            document.getElementById(435).classList.remove("activeCell")
            document.getElementById(446).classList.add("activeCell")
            document.getElementById(445).classList.remove("activeCell")
            break
          case 7:
            document.getElementById(417).classList.add("activeCell")
            document.getElementById(416).classList.remove("activeCell")
            document.getElementById(427).classList.add("activeCell")
            document.getElementById(426).classList.remove("activeCell")
            document.getElementById(437).classList.add("activeCell")
            document.getElementById(436).classList.remove("activeCell")
            document.getElementById(447).classList.add("activeCell")
            document.getElementById(446).classList.remove("activeCell")
            break
        }
      }
    })
  },
  methods: {
    updateClick1(element, index) {
      element.target.classList.toggle("selected");
      socket.emit("updateT41", index);
    },
    updateClick2(element, index) {
      element.target.classList.toggle("selected");
      socket.emit("updateT42", index);
    },
    updateClick3(element, index) {
      element.target.classList.toggle("selected");
      socket.emit("updateT43", index);
    },
    updateClick4(element, index) {
      element.target.classList.toggle("selected");
      socket.emit("updateT44", index);
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

