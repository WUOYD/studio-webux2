<template>
    <div class="content">
        <h1>which Instrument do you want to play</h1>
        <div id="sequencer">
            <div class="track free" id="track1" @click="updateView(1)">
                <div class="icon-wrapper" id="icon">
                    <img src="../assets/icons/icon-boob.svg" alt="icon-boob">
                </div>
                <span>drums</span>
                <button class="text icon play sm">jam</button>
            </div>
            <div class="track locked" id="track2" @click="updateView(2)">
                <div class="icon-wrapper" id="icon">
                    <img src="../assets/icons/icon-devil.svg" alt="icon-devil">
                </div>
                <span>guitar</span>
                <button class="text icon play sm">jam</button>                
            </div>
            <div class="track free" id="track3" @click="updateView(3)">
                <div class="icon-wrapper" id="icon">
                    <img src="../assets/icons/icon-drum.svg" alt="icon-drum">
                </div>
                <span>bass</span>
                <button class="text icon play sm">jam</button>
            </div>
            <div class="track locked" id="track4" @click="updateView(4)">
                <div class="icon-wrapper" id="icon">
                    <img src="../assets/icons/icon-fisch.svg" alt="icon-fisch">
                </div>
                <span>violin</span>
                <button class="text icon play sm">jam</button>
            </div>
            <div class="track locked" id="track5" @click="updateView(5)">
                <div class="icon-wrapper" id="icon">
                    <img src="../assets/icons/icon-smile.svg" alt="icon-smile">
                </div>
                <span>trumpet</span>
                <button class="text icon play sm">jam</button>
            </div>
            <div class="track free" id="track6" @click="updateView(6)">
                <div class="icon-wrapper" id="icon">
                    <img src="../assets/icons/icon-uvo.svg" alt="icon-uvo">
                </div>
                <span>synth</span>
                <button class="text icon play sm">jam</button>
            </div>
        </div>
        <h2>there are already 4 people jammin</h2>
    </div>
</template>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0;
}

h1{
    font-size: 16px;
}

/* sequencer */
#sequencer {
    width: 80vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin: 30px 0 10px 0;
}

.track {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #9747FF;
    border-radius: 10px;
    padding: 7px;
    box-shadow: #9747FF 0px 0px 8px;
    height: 50vh;
}

.track.locked {
    background: rgba(255, 255, 255, .2);
    box-shadow: none;
    height: 45vh;
    width: 75px;
}

.track .icon-wrapper{
    display: flex;
    flex: 1;
    width: 100%;
}

.track .icon-wrapper img{
    width: 60px;
    margin: 40% auto 0 auto;
}

.track.free .icon-wrapper img{
    margin-top: 60%;
}
.track span{
    font-size: 12px;
    padding: 10px 0 20px 0;
}

.track.locked button{
    background: none;
    font-size: 0;
    width: 0;
    height: 0;
}

.track.locked button::after{
    right: 0;
    top: -50%;
    left: 50%;
    transform: translateX(-50%);
}

</style> 

<script>
import { Howl, Howler } from 'howler'
import { socket } from '../client'

export default {
    data() {
        return {
            sound1: new Howl({
                src: ['../src/sounds/kick.wav'],
                volume: 0.5,
            }),
            sound2: new Howl({
                src: ['../src/sounds/snare.wav'],
                volume: 0.5,
            }),
            sound3: new Howl({
                src: ['../src/sounds/hat.wav'],
                volume: 0.5,
            }),
            sound4: new Howl({
                src: ['../src/sounds/cowbell.wav'],
                volume: 0.5,
            }),
            sound51: new Howl({
                src: ['../src/sounds/piano1.wav'],
                volume: 0.5,
            }),
            sound52: new Howl({
                src: ['../src/sounds/piano2.wav'],
                volume: 0.5,
            }),
            sound53: new Howl({
                src: ['../src/sounds/piano3.wav'],
                volume: 0.5,
            }),
            sound54: new Howl({
                src: ['../src/sounds/piano4.wav'],
                volume: 0.5,
            }),
            sound61: new Howl({
                src: ['../src/sounds/synth1.wav'],
                volume: 0.5,
            }),
            sound62: new Howl({
                src: ['../src/sounds/synth2.wav'],
                volume: 0.5,
            }),
            sound63: new Howl({
                src: ['../src/sounds/synth3.wav'],
                volume: 0.5,
            }),
            sound64: new Howl({
                src: ['../src/sounds/synth4.wav'],
                volume: 0.5,
            }),
            sounds: [],
            muted: false,
        }
    },
    mounted() {
        this.sounds.push(this.sound1, this.sound2, this.sound3, this.sound4, this.sound51, this.sound52, this.sound53, this.sound54, this.sound61, this.sound62, this.sound63, this.sound64)
        socket.on('playSounds', playSounds => {
            for (let j = 0; j < 13; j++) {
                if (playSounds[j] == true) {
                    this.sounds[j].play();
                }
            }
        })
        socket.on('muteClient', mute => {
            if (this.muted == true) {
                Howler.mute(false);
                this.muted = false
            }
            else {
                Howler.mute(true);
                this.muted = true
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
