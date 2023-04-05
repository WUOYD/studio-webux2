<template>
  <div class="content">
    <h1>Track Drums</h1>
    <div class="trackInterface">
        <div class="instrument"></div>
        <div class="grid">
          <div class="cell" v-for="index in 8" @click="updateClick($event, index)">
	        </div>
        </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  methods: {
    updateClick(element, index) {
      element.target.classList.toggle("selected");
      socket.emit("updateT2", index);
    }, 
  }
}
</script>

<style scoped>
.trackInterface {
  width: 100%;
  height: 100%;
  justify-items: stretch;
  display: flex;
}

.instrument {
  height: 10%;
  width: calc(100%/9);
  border: 3px solid rgb(60, 255, 255);
  display: flex;
  box-sizing: border-box;
}

h1 {
  width: 100%;
  text-align: left;
}

.grid {
  height: 10%;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.selected {
  background-color: #fff;
}
</style>