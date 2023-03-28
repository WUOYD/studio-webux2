<template>
    <div class="content">
      <div id="trackInterface">
        <div id="instruments">
          <div class="instrument"></div>
          <div class="instrument"></div>
          <div class="instrument"></div>
          <div class="instrument"></div>
          <div class="instrument"></div>
          <div class="instrument"></div>
        </div>
        <div id="grids">
          <div class="grid" id="track1"></div>
          <div class="grid" id="track2"></div>
          <div class="grid" id="track3"></div>
          <div class="grid" id="track4"></div>
          <div class="grid" id="track5"></div>
          <div class="grid" id="track6"></div>
        </div>
      </div>
    </div>  
</template>

<style scoped>

  #trackInterface{
    width: 100%;
    height: 100%;
    justify-items: stretch;
    display: flex;
  }

  #instruments{
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .instrument{
    height: calc(100%/6);
    width: 100%;
    border: 1px solid rgb(60, 255, 255);
    box-sizing: border-box;
  }

  #grids{
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .grid {
    width: 100%;
    height: calc(100%/6);
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #fff;
    box-sizing: border-box;
  }

  .selected{
    background-color: #fff;
  }

</style>


<script>
export default{
  mounted(){
    document.querySelectorAll(".grid").forEach(grid => {
      for(let x=0; x<8;x++) {
        var cell = document.createElement('div');
        cell.className = "cell";
        grid.appendChild(cell);
        }
      }),
    document.querySelectorAll(".cell").forEach(cell => {
      cell.addEventListener("click", event => {
        let parent = event.target.parentNode;
        let index = Array.from(parent.children).indexOf(event.target);
        event.target.classList.toggle("selected");
        this.changeState(index, parent.id);
      })
    })
  },
methods: {
    changeState(index, parentID) {  
      this.$tracks.get(parentID)[index] = !this.$tracks.get(parentID)[index];
    }
  }
}
</script>

