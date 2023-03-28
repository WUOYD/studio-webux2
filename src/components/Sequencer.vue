<template>
    <div class="content">
      <div id="sequencer">
        <div class="track" id="track1">
            <div class="name" id="name1">
                <p>Name</p>
            </div>
            <div class="edit" id="edit1">
                <p>Edit</p>
            </div>
            <div class="mute" id="mute1">
                <p>Mute</p>
            </div>
            <div class="play" id="play1">
                <p>Play</p>
            </div>
        </div>
        <div class="track" id="track2">
            <div class="name" id="name2">
                <p>Name</p>
            </div>
            <div class="edit" id="edit2">
                <p>Edit</p>
            </div>
            <div class="mute" id="mute2">
                <p>Mute</p>
            </div>
            <div class="play" id="play2">
                <p>Play</p>
            </div>
        </div>
        <div class="track" id="track3">
            <div class="name" id="name3">
                <p>Name</p>
            </div>
            <div class="edit" id="edit3">
                <p>Edit</p>
            </div>
            <div class="mute" id="mute3">
                <p>Mute</p>
            </div>
            <div class="play" id="play3">
                <p>Play</p>
            </div>
        </div>
        <div class="track" id="track4">
            <div class="name" id="name4">
                <p>Name</p>
            </div>
            <div class="edit" id="edit4">
                <p>Edit</p>
            </div>
            <div class="mute" id="mute4">
                <p>Mute</p>
            </div>
            <div class="play" id="play4">
                <p>Play</p>
            </div>
        </div>
        <div class="track" id="track5">
            <div class="name" id="name5">
                <p>Name</p>
            </div>
            <div class="edit" id="edit5">
                <p>Edit</p>
            </div>
            <div class="mute" id="mute5">
                <p>Mute</p>
            </div>
            <div class="play" id="play5">
                <p>Play</p>
            </div>
        </div>
        <div class="track" id="track6">
            <div class="name" id="name6">
                <p>Name</p>
            </div>
            <div class="edit" id="edit6">
                <p>Edit</p>
            </div>
            <div class="mute" id="mute6">
                <p>Mute</p>
            </div>
            <div class="play" id="play6">
                <p>Play</p>
            </div>
        </div>
        <div class="track" id="track7">
            <div class="name" id="name7">
                <p>Name</p>
            </div>
            <div class="edit" id="edit7">
                <p>Edit</p>
            </div>
            <div class="mute" id="mute7">
                <p>Mute</p>
            </div>
            <div class="play" id="play7">
                <p>Play</p>
            </div></div>
        <div class="track" id="track8">
            <div class="name" id="name8">
                <p>Name</p>
            </div>
            <div class="edit" id="edit8">
                <p>Edit</p>
            </div>
            <div class="mute" id="mute8">
                <p>Mute</p>
            </div>
            <div class="play" id="play8">
                <p>Play</p>
            </div></div>
      </div>
    </div>  
</template>

<style scoped>

#sequencer{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: 90%;
}

.track{ 
  width: calc(70% / 2 );
  height: auto;
  margin: auto; 
  border: 1px solid #fff;
  justify-items: stretch;
  display: grid;
  box-sizing: border-box;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
} 

.name{
  grid-area: 1 / 1 / 2 / 3;
  background-color: rgba(255, 255, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.edit{
  grid-area: 2 / 1 / 4 / 2;
  background-color: rgba(90, 0, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.mute{
  grid-area: 2 / 2 / 3 / 3;
  background-color: rgba(255, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.play{
  grid-area: 3 / 2 / 4 / 3;
  background-color: rgba(0, 128, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>