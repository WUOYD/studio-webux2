<template>
    <div class="content sequencer">
        <h1>which Instrument do you want to play</h1>
        <div id="sequencer">
            <div class="track free" id="track1" @click="updateView(1)">
                <div class="icon-wrapper" id="icon">
                    <img src="../assets/icons/icon-boob.svg" alt="icon-boob">
                </div>
                <span>bass</span>
                <button class="text icon play sm">jam</button>
            </div>
            <div class="track free" id="track2" @click="updateView(2)">
                <div class="icon-wrapper" id="icon">
                    <img src="../assets/icons/icon-devil.svg" alt="icon-devil">
                </div>
                <span>tom</span>
                <button class="text icon play sm">jam</button>
            </div>
            <div class="track free" id="track3" @click="updateView(3)">
                <div class="icon-wrapper" id="icon">
                    <img src="../assets/icons/icon-drum.svg" alt="icon-drum">
                </div>
                <span>hihat</span>
                <button class="text icon play sm">jam</button>
            </div>
            <div class="track free" id="track4" @click="updateView(4)">
                <div class="icon-wrapper" id="icon">
                    <img src="../assets/icons/icon-fisch.svg" alt="icon-fisch">
                </div>
                <span>keys</span>
                <button class="text icon play sm">jam</button>
            </div>
            <div class="track free" id="track5" @click="updateView(5)">
                <div class="icon-wrapper" id="icon">
                    <img src="../assets/icons/icon-smile.svg" alt="icon-smile">
                </div>
                <span>synth</span>
                <button class="text icon play sm">jam</button>
            </div>
            <div class="track free" id="track6" @click="updateView(6)">
                <div class="icon-wrapper" id="icon">
                    <img src="../assets/icons/icon-uvo.svg" alt="icon-uvo">
                </div>
                <span>bass</span>
                <button class="text icon play sm">jam</button>
            </div>
        </div>
        <div class="session-count-wrapper">
            <h2>there are already</h2>
            <div><span>{{ userCounter }}</span><img src="../assets/icons/icon-session.svg" alt="session"></div>
            <h2>people jammin</h2>
        </div>
    </div>
</template>

<style scoped>
.content.sequencer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 0;
    gap: 0;
    padding: 20px 7vw 20px 7vw;
}

h1 {
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
    margin: 20px 0 15px 0;
}

.track {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: var(--color-accent);
    border-radius: 10px;
    padding: 7px;
    box-shadow: var(--color-accent) 0px 0px 8px;
    height: 50vh;
    max-height: 250px;
}

.track.locked {
    background: rgba(255, 255, 255, .2);
    box-shadow: none;
    height: 45vh;
    width: 75px;
}

.track .icon-wrapper {
    display: flex;
    flex: 1;
    width: 100%;
}

.track .icon-wrapper img {
    width: 60px;
    margin: 40% auto 0 auto;
}

.track.free .icon-wrapper img {
    margin-top: 60%;
}

.track span {
    font-size: 12px;
    padding: 10px 0 20px 0;
}

.track.locked button {
    background: none;
    font-size: 0;
    width: 0;
    height: 0;
}

.track.locked button::after {
    right: 0;
    top: -50%;
    left: 50%;
    transform: translateX(-50%);
}

.session-count-wrapper {
    display: flex;
    align-items: center;
}

.session-count-wrapper>div {
    background: var(--color-accent-light);
    padding: 7px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin: 0 15px;
    height: 20px;
}

.session-count-wrapper span {
    font-size: 13px;
    background: var(--color-accent);
    border-radius: 30px;
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: .8;
    margin-right: 7px;
}
</style> 

<script>
import { Howl, Howler } from 'howler'
import { socket } from '../client'

export default {
    data() {
        return {
            muted: false,
            userCounter: 0,
            sound1: new Howl({
                src: ['../src/sounds/kick.wav'],
                volume: 0.4,
            }),
            sound2: new Howl({
                src: ['../src/sounds/snare.wav'],
                volume: 0.3,
            }),
            sound3: new Howl({
                src: ['../src/sounds/hat.wav'],
                volume: 0.2,
            }),
            sound41: new Howl({
                src: ['../src/sounds/chi1.wav'],
                volume: 0.3,
            }),
            sound42: new Howl({
                src: ['../src/sounds/chi2.wav'],
                volume: 0.3,
            }),
            sound43: new Howl({
                src: ['../src/sounds/chi3.wav'],
                volume: 0.3,
            }),
            sound44: new Howl({
                src: ['../src/sounds/chi4.wav'],
                volume: 0.2,
            }),
            sound51: new Howl({
                src: ['../src/sounds/pluck1.wav'],
                volume: 0.2,
            }),
            sound52: new Howl({
                src: ['../src/sounds/pluck2.wav'],
                volume: 0.2,
            }),
            sound53: new Howl({
                src: ['../src/sounds/pluck3.wav'],
                volume: 0.2,
            }),
            sound54: new Howl({
                src: ['../src/sounds/pluck4.wav'],
                volume: 0.2,
            }),
            sound61: new Howl({
                src: ['../src/sounds/chord1.wav'],
                volume: 0.2,
            }),
            sound62: new Howl({
                src: ['../src/sounds/chord2.wav'],
                volume: 0.2,
            }),
            sound63: new Howl({
                src: ['../src/sounds/chord3.wav'],
                volume: 0.2,
            }),
            sound64: new Howl({
                src: ['../src/sounds/chord4.wav'],
                volume: 0.2,
            }),
            sounds: []
        }
    },
    mounted() {
        this.sounds.push(this.sound1, this.sound2, this.sound3, this.sound41, this.sound42, this.sound43, this.sound44, this.sound51, this.sound52, this.sound53, this.sound54, this.sound61, this.sound62, this.sound63, this.sound64)
        socket.on('playSounds', playSounds => {
            for (let j = 0; j < 15; j++) {
                console.log(playSounds)
                if (playSounds[j] == true) {
                    this.sounds[j].play();
                }
                else { }
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
        socket.on('userCount', count => {
            this.userCounter = count;
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
