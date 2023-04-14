<template>
    <div class="content">
        <div class="intro">
            <h1>be part of the experience</h1>
            <div class="color-container">
                <div class="color-item locked"></div>
                <div class="color-item selected"></div>
                <div class="color-item"></div>
                <div class="color-item"></div>
                <div class="color-item"></div>
                <div class="color-item"></div>
                <div class="color-item locked"></div>
                <div class="color-item"></div>
            </div>
        </div>
        <div id="sequencer">
            <div class="track" id="track1" @click="updateView(1)">
                <div class="icon" id="icon">
                    <img src="../assets/icons/icon-boob.svg" alt="icon-boob">
                </div>
            </div>
            <div class="track locked" id="track2" @click="updateView(2)">
                <div class="icon" id="icon">
                    <img src="../assets/icons/icon-devil.svg" alt="icon-devil">
                </div>
            </div>
            <div class="track" id="track3" @click="updateView(3)">
                <div class="icon" id="icon">
                    <img src="../assets/icons/icon-drum.svg" alt="icon-drum">
                </div>
            </div>
            <div class="track locked" id="track4" @click="updateView(4)">
                <div class="icon" id="icon">
                    <img src="../assets/icons/icon-fisch.svg" alt="icon-fisch">
                </div>
            </div>
            <div class="track locked" id="track5" @click="updateView(5)">
                <div class="icon" id="icon">
                    <img src="../assets/icons/icon-smile.svg" alt="icon-smile">
                </div>
            </div>
            <div class="track" id="track6" @click="updateView(6)">
                <div class="icon" id="icon">
                    <img src="../assets/icons/icon-uvo.svg" alt="icon-uvo">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.content{
    display: flex;
    flex-direction: row;
    align-items: center;
}

/* left col */
.intro{
    width: 40vw;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.color-container{
    display: flex;
    flex-wrap: wrap;
    width: 125px;
    gap: 15px;
    margin-top: 20px;
}

.color-item{
    height: 20px;
    width: 20px;
    border-radius: 50px;
    background: blue;
    position: relative;
}

.color-item::before{
    content: '';
    position: absolute;
    height: 10px;
    width: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50px;
}

.color-item.locked::before{
    background: black;
}

.color-item.selected::before{
    border: 2px solid white;
    height: 25px;
    width: 25px;
}


/* sequencer */
#sequencer{
    width: 60vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
}

.track{  
    display: flex;
    justify-content: center;
    align-items: center;
    background: #9747FF;
    border: 2px solid #130721;
    border-radius: 10px;
    width: 25%;
    padding: 30px 0;
}

.track.locked{
    background: rgba(255, 255, 255, .3);
    position: relative;
}

.track.locked::after{
    content: url('../assets/icons/icon-lock.svg');
    position: absolute;
    top: 7px;
    right: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #130721;
    height: 25px;
    width: 27px;
    padding-top: 2px;
    border-radius: 20px;
}


</style> 

<script>
import { Howl } from 'howler'
import { socket } from '../client'

export default {
  data() {
    return {
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
        sound51: new Howl({
            src: ['../src/sounds/chord11.wav'],
            volume: 0.5,}),
        sound52: new Howl({
            src: ['../src/sounds/chord12.wav'],
            volume: 0.5,}),
        sound53: new Howl({
            src: ['../src/sounds/chord13.wav'],
            volume: 0.5,}),
        sound54: new Howl({
            src: ['../src/sounds/chord14.wav'],
            volume: 0.5,}),
        sound6: new Howl({
            src: ['../src/sounds/bd.wav'],
            volume: 0.5,}),
        sounds: [],
    }
  },
  mounted(){
    this.sounds.push(this.sound1, this.sound2, this.sound3, this.sound4, this.sound51, this.sound52, this.sound53, this.sound54, this.sound6)
    socket.on('playSounds', playSounds => {
        for (let j = 0; j < 9; j++) {
            if(playSounds[j] == true){
                this.sounds[j].play();
            }
        }
    })
  },
  methods: {
    updateView(comp) {
        socket.emit("updateView", comp);
        socket.emit("updateComp", comp);
    }
  }
}
</script>
