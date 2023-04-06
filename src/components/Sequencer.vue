<template>
    <div class="content">
        <div id="controls">
            <img class="controlele" id="play" src="../assets/icons/play.svg" @click="updateStatus()">
            <img class="controlele" id="stop" src="../assets/icons/stop.svg" @click="updateStatus()">
        </div>
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
            </div>
        </div>
    </div>
</template>

<style scoped>
#sequencer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    height: 90%;
}

.track {
    width: calc(90% / 2);
    height: 20%;
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

.name {
    grid-area: 1 / 1 / 2 / 3;
    background-color: rgba(255, 255, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.edit {
    grid-area: 2 / 1 / 4 / 2;
    background-color: rgba(90, 0, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.mute {
    grid-area: 2 / 2 / 4 / 3;
    background-color: rgba(255, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
} 
#controls{
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
 }
.controlele{
  width: 5%;
  display: flex;
  justify-content: center;
  margin: 1rem;
}
</style> 

<script>
import { Howl } from 'howler'
import { socket } from '../client'

export default {
  data() {
    return {
        playStatus: true,
        track1: [false,false,false,false,false,false,false,false],
        track2: [false,false,false,false,false,false,false,false],
        track3: [false,false,false,false,false,false,false,false],
        track4: [false,false,false,false,false,false,false,false],
        track5: [false,false,false,false,false,false,false,false],
        track6: [false,false,false,false,false,false,false,false],
        tracks: [this.track1, this.track2, this.track3, this.track4, this.track5, this.track6],
        sound1: new Howl({
            src: ['../src/sounds/bd.wav'],
            volume: 0.5,}),
        sound2: new Howl({
            src: ['../src/sounds/sd.wav'],
            volume: 0.5,}),
        sound3: new Howl({
            src: ['../src/sounds/ch.wav'],
            volume: 0.5,}),
        sound4: new Howl({
            src: ['../src/sounds/cb.wav'],
            volume: 0.5,}),
        sound5: new Howl({
            src: ['../src/sounds/bd.wav'],
            volume: 0.5,}),
        sound6: new Howl({
            src: ['../src/sounds/bd.wav'],
            volume: 0.5,}),
        sounds: [this.sound1, this.sound2, this.sound3, this.sound4, this.sound5, this.sound6]
    }
  },
  mounted(){
    socket.on("broadcastStatus", status => {
        this.playStatus = status
    });
    socket.on("broadcastT1", index => {
        this.track1[index] = !this.track1[index];
    });
    socket.on("broadcastT2", index => {
        this.track2[index] = !this.track2[index];
    });
    socket.on("broadcastT3", index => {
        this.track3[index] = !this.track3[index];
    });
    socket.on("broadcastT4", index => {
        this.track4[index] = !this.track4[index];
    });
    socket.on("broadcastT5", index => {
        this.track5[index] = !this.track5[index];
    });
    socket.on("broadcastT6", index => {
        this.track6[index] = !this.track6[index];
    });
  },
  methods: {
    sequencer() {
        while (true) {
            while (playStatus == true) {
                for (let i = 0; i < 8; i++) {
                    for (let j = 0; j < 6; j++) {
                        if(tracks[i][j] == true){
                            sounds[i].play();
                        }
                    }
                }
            }
            while (playStatus == false) {}
        }
    },
    updateStatus(){
        this.playStatus = !this.playStatus;
        socket.emit("updateStatus", this.playStatus);
    }
  }
}
</script>
