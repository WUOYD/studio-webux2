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
      items1: [{ id: 610, tile: 0 }, { id: 611, tile: 1 }, { id: 612, tile: 2 }, { id: 613, tile: 3 }, { id: 614, tile: 4 }, { id: 615, tile: 5 }, { id: 616, tile: 6 }, { id: 617, tile: 7 }],
      items2: [{ id: 620, tile: 0 }, { id: 621, tile: 1 }, { id: 622, tile: 2 }, { id: 623, tile: 3 }, { id: 624, tile: 4 }, { id: 625, tile: 5 }, { id: 626, tile: 6 }, { id: 627, tile: 7 }],
      items3: [{ id: 630, tile: 0 }, { id: 631, tile: 1 }, { id: 632, tile: 2 }, { id: 633, tile: 3 }, { id: 634, tile: 4 }, { id: 635, tile: 5 }, { id: 636, tile: 6 }, { id: 637, tile: 7 }],
      items4: [{ id: 640, tile: 0 }, { id: 641, tile: 1 }, { id: 642, tile: 2 }, { id: 643, tile: 3 }, { id: 644, tile: 4 }, { id: 645, tile: 5 }, { id: 646, tile: 6 }, { id: 647, tile: 7 }],
      mounted: false
    }
  },
  mounted() {
    this.mounted = true
    socket.on("updateComponentT61", track => {
      if (this.mounted == true) {
        for (let index = 0; index < 8; index++) {
          let index_id = "61" + index;
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

    socket.on("updateComponentT62", track => {
      if (this.mounted == true) {
        for (let index = 0; index < 8; index++) {
          let index_id = "62" + index;
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

    socket.on("updateComponentT63", track => {
      if (this.mounted == true) {
        for (let index = 0; index < 8; index++) {
          let index_id = "63" + index;
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

    socket.on("updateComponentT64", track => {
      if (this.mounted == true) {
        for (let index = 0; index < 8; index++) {
          let index_id = "64" + index;
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
            document.getElementById(610).classList.add("activeCell")
            document.getElementById(617).classList.remove("activeCell")
            document.getElementById(620).classList.add("activeCell")
            document.getElementById(627).classList.remove("activeCell")
            document.getElementById(630).classList.add("activeCell")
            document.getElementById(637).classList.remove("activeCell")
            document.getElementById(640).classList.add("activeCell")
            document.getElementById(647).classList.remove("activeCell")
            break
          case 1:
            document.getElementById(611).classList.add("activeCell")
            document.getElementById(610).classList.remove("activeCell")
            document.getElementById(621).classList.add("activeCell")
            document.getElementById(620).classList.remove("activeCell")
            document.getElementById(631).classList.add("activeCell")
            document.getElementById(630).classList.remove("activeCell")
            document.getElementById(641).classList.add("activeCell")
            document.getElementById(640).classList.remove("activeCell")
            break
          case 2:
            document.getElementById(612).classList.add("activeCell")
            document.getElementById(611).classList.remove("activeCell")
            document.getElementById(622).classList.add("activeCell")
            document.getElementById(621).classList.remove("activeCell")
            document.getElementById(632).classList.add("activeCell")
            document.getElementById(631).classList.remove("activeCell")
            document.getElementById(642).classList.add("activeCell")
            document.getElementById(641).classList.remove("activeCell")
            break
          case 3:
            document.getElementById(613).classList.add("activeCell")
            document.getElementById(612).classList.remove("activeCell")
            document.getElementById(623).classList.add("activeCell")
            document.getElementById(622).classList.remove("activeCell")
            document.getElementById(633).classList.add("activeCell")
            document.getElementById(632).classList.remove("activeCell")
            document.getElementById(643).classList.add("activeCell")
            document.getElementById(642).classList.remove("activeCell")
            break
          case 4:
            document.getElementById(614).classList.add("activeCell")
            document.getElementById(613).classList.remove("activeCell")
            document.getElementById(624).classList.add("activeCell")
            document.getElementById(623).classList.remove("activeCell")
            document.getElementById(634).classList.add("activeCell")
            document.getElementById(633).classList.remove("activeCell")
            document.getElementById(644).classList.add("activeCell")
            document.getElementById(643).classList.remove("activeCell")
            break
          case 5:
            document.getElementById(615).classList.add("activeCell")
            document.getElementById(614).classList.remove("activeCell")
            document.getElementById(625).classList.add("activeCell")
            document.getElementById(624).classList.remove("activeCell")
            document.getElementById(635).classList.add("activeCell")
            document.getElementById(634).classList.remove("activeCell")
            document.getElementById(645).classList.add("activeCell")
            document.getElementById(644).classList.remove("activeCell")
            break
          case 6:
            document.getElementById(616).classList.add("activeCell")
            document.getElementById(615).classList.remove("activeCell")
            document.getElementById(626).classList.add("activeCell")
            document.getElementById(625).classList.remove("activeCell")
            document.getElementById(636).classList.add("activeCell")
            document.getElementById(635).classList.remove("activeCell")
            document.getElementById(646).classList.add("activeCell")
            document.getElementById(645).classList.remove("activeCell")
            break
          case 7:
            document.getElementById(617).classList.add("activeCell")
            document.getElementById(616).classList.remove("activeCell")
            document.getElementById(627).classList.add("activeCell")
            document.getElementById(626).classList.remove("activeCell")
            document.getElementById(637).classList.add("activeCell")
            document.getElementById(636).classList.remove("activeCell")
            document.getElementById(647).classList.add("activeCell")
            document.getElementById(646).classList.remove("activeCell")
            break
        }
      }
    })
  },
  methods: {
    updateClick1(element, index) {
      element.target.classList.toggle("selected");
      socket.emit("updateT61", index);
    },
    updateClick2(element, index) {
      element.target.classList.toggle("selected");
      socket.emit("updateT62", index);
    },
    updateClick3(element, index) {
      element.target.classList.toggle("selected");
      socket.emit("updateT63", index);
    },
    updateClick4(element, index) {
      element.target.classList.toggle("selected");
      socket.emit("updateT64", index);
    }
  },
  beforeUnmount() {
    this.mounted = false;
  }
}
</script>

