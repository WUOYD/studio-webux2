<template>
    <div class="content">
      <div class="controls"></div>
      <div id="trackInterface">
        <div class="grid" id="track1"></div>
        <div class="grid" id="track2"></div>
      </div>
    </div>  
</template>

<style scoped>
  #grid {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    width: 100%;
    height: 90%;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #fff;
  }

  #trackInterface{
    width: 100%;
    height: 100%;
    justify-items: stretch;
  }

  .cell{
    width: calc(100%/16);
    height: calc(100%/6);
    border: 1px solid #fff;
    box-sizing: border-box;
  }

  .selected{
    background-color: #fff;
  }

  #cell1 { grid-area: 1 / 1 / 2 / 2; }
  #cell2 { grid-area: 1 / 2 / 2 / 3; }
  #cell3 { grid-area: 1 / 3 / 2 / 4; }
  #cell4 { grid-area: 1 / 4 / 2 / 5; }
  #cell5 { grid-area: 2 / 1 / 3 / 2; }
  #cell6 { grid-area: 2 / 2 / 3 / 3; }
  #cell7 { grid-area: 2 / 3 / 3 / 4; }
  #cell8 { grid-area: 2 / 4 / 3 / 5; }
  #cell9 { grid-area: 3 / 1 / 4 / 2; }
  #cell10 { grid-area: 3 / 2 / 4 / 3; }
  #cell11 { grid-area: 3 / 3 / 4 / 4; }
  #cell12 { grid-area: 3 / 4 / 4 / 5; }
  #cell13 { grid-area: 4 / 1 / 5 / 2; }
  #cell14 { grid-area: 4 / 2 / 5 / 3; }
  #cell15 { grid-area: 4 / 3 / 5 / 4; }
  #cell16 { grid-area: 4 / 4 / 5 / 5; }

</style>


<script>
export default{
  mounted(){
    document.querySelectorAll(".cell").forEach(cell => {
      cell.addEventListener("click", event => {
        let parent = event.target.parentNode;
        let index = Array.from(parent.children).indexOf(event.target);
        event.target.classList.toggle("selected");
        this.changeState(index);
        console.log(this.track)
      })
    })
  },
  data() {
    return {
      track1: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      track2: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      track3: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      track4: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      track5: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      track6: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      track7: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      track8: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    };
  },
  methods: {
    changeState(index) {
      this.track1[index] = !this.track[index];
    },
  },
  render: function() {
      document.querySelectorAll(".grid").forEach(grid => {
        for(x=0; x<16;x++) {
          var cell = document.createElement('div');
          cell.className = "cell";
          grid.appendChild(cell);
        }
      })
  }
}
</script>

