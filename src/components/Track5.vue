<template>
  <div class="content track synth">
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


<script>
import { socket } from '../client'

export default {
  data() {
    return {
      items1: [{ id: 510, tile: 0 }, { id: 511, tile: 1 }, { id: 512, tile: 2 }, { id: 513, tile: 3 }, { id: 514, tile: 4 }, { id: 515, tile: 5 }, { id: 516, tile: 6 }, { id: 517, tile: 7 }],
      items2: [{ id: 520, tile: 0 }, { id: 521, tile: 1 }, { id: 522, tile: 2 }, { id: 523, tile: 3 }, { id: 524, tile: 4 }, { id: 525, tile: 5 }, { id: 526, tile: 6 }, { id: 527, tile: 7 }],
      items3: [{ id: 530, tile: 0 }, { id: 531, tile: 1 }, { id: 532, tile: 2 }, { id: 533, tile: 3 }, { id: 534, tile: 4 }, { id: 535, tile: 5 }, { id: 536, tile: 6 }, { id: 537, tile: 7 }],
      items4: [{ id: 540, tile: 0 }, { id: 541, tile: 1 }, { id: 542, tile: 2 }, { id: 543, tile: 3 }, { id: 544, tile: 4 }, { id: 545, tile: 5 }, { id: 546, tile: 6 }, { id: 547, tile: 7 }],
      mounted: false
    }
  },
  mounted() {
    this.mounted = true
    socket.on("updateComponentT51", track => {
      if (this.mounted == true) {
        for (let index = 0; index < 8; index++) {
          let index_id = "51" + index;
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

    socket.on("updateComponentT52", track => {
      if (this.mounted == true) {
        for (let index = 0; index < 8; index++) {
          let index_id = "52" + index;
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

    socket.on("updateComponentT53", track => {
      if (this.mounted == true) {
        for (let index = 0; index < 8; index++) {
          let index_id = "53" + index;
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

    socket.on("updateComponentT54", track => {
      if (this.mounted == true) {
        for (let index = 0; index < 8; index++) {
          let index_id = "54" + index;
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
            document.getElementById(510).classList.add("activeCell")
            document.getElementById(517).classList.remove("activeCell")
            document.getElementById(520).classList.add("activeCell")
            document.getElementById(527).classList.remove("activeCell")
            document.getElementById(530).classList.add("activeCell")
            document.getElementById(537).classList.remove("activeCell")
            document.getElementById(540).classList.add("activeCell")
            document.getElementById(547).classList.remove("activeCell")
            break
          case 1:
            document.getElementById(511).classList.add("activeCell")
            document.getElementById(510).classList.remove("activeCell")
            document.getElementById(521).classList.add("activeCell")
            document.getElementById(520).classList.remove("activeCell")
            document.getElementById(531).classList.add("activeCell")
            document.getElementById(530).classList.remove("activeCell")
            document.getElementById(541).classList.add("activeCell")
            document.getElementById(540).classList.remove("activeCell")
            break
          case 2:
            document.getElementById(512).classList.add("activeCell")
            document.getElementById(511).classList.remove("activeCell")
            document.getElementById(522).classList.add("activeCell")
            document.getElementById(521).classList.remove("activeCell")
            document.getElementById(532).classList.add("activeCell")
            document.getElementById(531).classList.remove("activeCell")
            document.getElementById(542).classList.add("activeCell")
            document.getElementById(541).classList.remove("activeCell")
            break
          case 3:
            document.getElementById(513).classList.add("activeCell")
            document.getElementById(512).classList.remove("activeCell")
            document.getElementById(523).classList.add("activeCell")
            document.getElementById(522).classList.remove("activeCell")
            document.getElementById(533).classList.add("activeCell")
            document.getElementById(532).classList.remove("activeCell")
            document.getElementById(543).classList.add("activeCell")
            document.getElementById(542).classList.remove("activeCell")
            break
          case 4:
            document.getElementById(514).classList.add("activeCell")
            document.getElementById(513).classList.remove("activeCell")
            document.getElementById(524).classList.add("activeCell")
            document.getElementById(523).classList.remove("activeCell")
            document.getElementById(534).classList.add("activeCell")
            document.getElementById(533).classList.remove("activeCell")
            document.getElementById(544).classList.add("activeCell")
            document.getElementById(543).classList.remove("activeCell")
            break
          case 5:
            document.getElementById(515).classList.add("activeCell")
            document.getElementById(514).classList.remove("activeCell")
            document.getElementById(525).classList.add("activeCell")
            document.getElementById(524).classList.remove("activeCell")
            document.getElementById(535).classList.add("activeCell")
            document.getElementById(534).classList.remove("activeCell")
            document.getElementById(545).classList.add("activeCell")
            document.getElementById(544).classList.remove("activeCell")
            break
          case 6:
            document.getElementById(516).classList.add("activeCell")
            document.getElementById(515).classList.remove("activeCell")
            document.getElementById(526).classList.add("activeCell")
            document.getElementById(525).classList.remove("activeCell")
            document.getElementById(536).classList.add("activeCell")
            document.getElementById(535).classList.remove("activeCell")
            document.getElementById(546).classList.add("activeCell")
            document.getElementById(545).classList.remove("activeCell")
            break
          case 7:
            document.getElementById(517).classList.add("activeCell")
            document.getElementById(516).classList.remove("activeCell")
            document.getElementById(527).classList.add("activeCell")
            document.getElementById(526).classList.remove("activeCell")
            document.getElementById(537).classList.add("activeCell")
            document.getElementById(536).classList.remove("activeCell")
            document.getElementById(547).classList.add("activeCell")
            document.getElementById(546).classList.remove("activeCell")
            break
        }
      }
    })
  },
  methods: {
    updateClick1(element, index) {
      element.target.classList.toggle("selected");
      socket.emit("updateT51", index);
    },
    updateClick2(element, index) {
      element.target.classList.toggle("selected");
      socket.emit("updateT52", index);
    },
    updateClick3(element, index) {
      element.target.classList.toggle("selected");
      socket.emit("updateT53", index);
    },
    updateClick4(element, index) {
      element.target.classList.toggle("selected");
      socket.emit("updateT54", index);
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

