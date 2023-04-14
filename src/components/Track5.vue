<template>
  <div class="content">
    <div class="grid">
      <div class="cell" v-for="item in items1" :id="item.id" :tile="item.tile" @click="updateClick1($event, item.tile)"></div>
    </div>  
    <div class="grid">
      <div class="cell" v-for="item in items2" :id="item.id" :tile="item.tile" @click="updateClick2($event, item.tile)"></div>       
    </div>  
    <div class="grid">
      <div class="cell" v-for="item in items3" :id="item.id" :tile="item.tile" @click="updateClick3($event, item.tile)"></div>
    </div>  
    <div class="grid">
      <div class="cell" v-for="item in items4" :id="item.id" :tile="item.tile" @click="updateClick4($event, item.tile)"></div>
    </div>  
  </div>
</template>

<style scoped>

.content{
  gap: 15px;
}

.cell{
  height: 13vh;
}

</style>

<script>
import { socket } from '../client'

socket.on("updateComponentT51", track => {
  for (let index = 0; index < 8; index++) {
    let index_id = "51" + index;
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

socket.on("updateComponentT52", track => {
  for (let index = 0; index < 8; index++) {
    let index_id = "52" + index;
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

socket.on("updateComponentT53", track => {
  for (let index = 0; index < 8; index++) {
    let index_id = "53" + index;
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

socket.on("updateComponentT54", track => {
  for (let index = 0; index < 8; index++) {
    let index_id = "54" + index;
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
      items1: [{ id: 510, tile: 0}, { id: 511, tile: 1}, { id: 512, tile: 2}, { id: 513 , tile: 3}, { id: 514, tile: 4 }, { id: 515, tile: 5 }, { id: 516, tile: 6 }, { id: 517, tile: 7 }],
      items2: [{ id: 520, tile: 0}, { id: 521, tile: 1}, { id: 522, tile: 2}, { id: 523 , tile: 3}, { id: 524, tile: 4 }, { id: 525, tile: 5 }, { id: 526, tile: 6 }, { id: 527, tile: 7 }],
      items3: [{ id: 530, tile: 0}, { id: 531, tile: 1}, { id: 532, tile: 2}, { id: 533 , tile: 3}, { id: 534, tile: 4 }, { id: 535, tile: 5 }, { id: 536, tile: 6 }, { id: 537, tile: 7 }],
      items4: [{ id: 540, tile: 0}, { id: 541, tile: 1}, { id: 542, tile: 2}, { id: 543 , tile: 3}, { id: 544, tile: 4 }, { id: 545, tile: 5 }, { id: 546, tile: 6 }, { id: 547, tile: 7 }],
    }
  },
  mounted() {
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
  }
}
</script>

