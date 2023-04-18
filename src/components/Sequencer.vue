<template>
    <div class="content">
        <div id="sequencer">
            <div class="track free" id="track1" @click="updateView(1)">
                <div class="icon" id="icon">
                    <img src="../assets/icons/icon-boob.svg" alt="icon-boob">
                </div>
            </div>
            <div class="track locked" id="track2" @click="updateView(2)">
                <div class="icon" id="icon">
                    <img src="../assets/icons/icon-devil.svg" alt="icon-devil">
                </div>
            </div>
            <div class="track free" id="track3" @click="updateView(3)">
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
            <div class="track free" id="track6" @click="updateView(6)">
                <div class="icon" id="icon">
                    <img src="../assets/icons/icon-uvo.svg" alt="icon-uvo">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.content {
    display: flex;
    flex-direction: row;
    align-items: center;
}


/* sequencer */
#sequencer {
    width: 80vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
}

.track {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #9747FF;
    border-radius: 10px;
    padding: 30px 0;
    box-shadow: #9747FF 0px 0px 8px;
}

.track.locked {
    background: rgba(255, 255, 255, .3);
    box-shadow: none;
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
