<template>
    <div class="content">
        <div class="animation">
            <img class="logo" src="../assets/logo/mashroom-logo-lg.svg" alt="logo">
            <img class="mask" src="../assets/img/mashroom-bg-mask.svg" alt="background">
        </div>
        <div class="intro">
            <div class="text-wrapper">
                <h1>be part of the experience</h1>
                <p>Welcome to the interactive sound installation, where you can contribute to the sound playing in this
                    room.</p>
                <h2>chose which color you want to add</h2>
            </div>
            <div class="color-container">

                <div v-for="(item, index) in items" :key="index" :class="[{ 'selected': selectedItem === index }, 'color-item']" :id="[`color-${index}`]" @click="toggleSelectedItem(index)">
                </div>

            </div>
            <button class="text icon play" @click="join()">join</button>
        </div>
    </div>
</template>

<style scoped>
.content {
    /* display: none !important; */
    position: relative;
    height: 100vh;
    width: 100vw;
    z-index: 1;
}


/* ================== ANIMATION ====================== */

.animation {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: var(--color-main);
    display: flex;
    background-image: url('../assets/img/mashroom-bg.png');
    background-size: cover;
    overflow: hidden;
    animation: main 4s forwards;
    z-index: 1;
}

@keyframes main {
    90% {
        opacity: 1;
    }
    95%{
        opacity: 0;
    }
    99%{
        opacity: 0;
        z-index: 1;
    }
    100% {
        opacity: 0;
        z-index: -1;
    }
}

.animation .logo,
.animation .mask {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
}

.animation .logo {
    width: 60vw;
    height: auto;
    animation: logo 3s forwards;
}

.animation .mask {
    width: 150vw;
    animation: mask 8s forwards;
}

@keyframes logo {
    from {
        width: 60vw;
    }

    to {
        width: 30vw;
    }
}

@keyframes mask {
    from {
        width: 150vw;
    }

    to {
        width: 16000vw;
    }
}

/* ================== INTRO ====================== */

.intro {
    /* display: none!important; */
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    height: 100vh;
    width: 100vw;
    background: var(--color-main);
    padding: 15vh 5vw 10vh 5vh;
    box-sizing: border-box;
}

.text-wrapper {
    padding: 0 15vw;
    flex: 1;
}

.text-wrapper h1 {
    margin-bottom: 25px;
}

.text-wrapper p {
    margin-bottom: 20vh;
}

.color-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    width: 100%;
    margin: 15px 0;
}

.color-item {
    height: 20px;
    width: 20px;
    border-radius: 50px;
    position: relative;
}

.color-item::before {
    content: '';
    position: absolute;
    height: 10px;
    width: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50px;
}

.color-item.selected::before {
    border: 2px solid white;
    height: 25px;
    width: 25px;
}

#color-0 {
    background: #9747FF;
}

#color-1{
    background: #FFC700;
}

#color-2 {
    background: #FF7B00;
}

#color-3{
    background: #FF4768;
}

#color-4{
    background: #0038FF;
}

#color-5{
    background: #00C7F2;
}
</style> 

<script>
import { socket } from '../client'

export default {
    methods: {
        join() {
            let color;
            var rootStyle = document.querySelector(':root');
            document.querySelectorAll(".color-item").forEach(grid => {
                if (grid.classList.contains("selected")) {
                    color = grid.id
                }
            })
            switch (color) {
                case "color-0":
                    rootStyle.style.setProperty('--color-accent', '#9747FF');
                    rootStyle.style.setProperty('--color-accent-light', '#9747ff33');
                    break
                case "color-1":
                    rootStyle.style.setProperty('--color-accent', '#FFC700');
                    rootStyle.style.setProperty('--color-accent-light', '#FFC70033');
                    break
                case "color-2":
                    rootStyle.style.setProperty('--color-accent', '#FF7B00');
                    rootStyle.style.setProperty('--color-accent-light', '#FF7B0033');
                    break
                case "color-3":
                    rootStyle.style.setProperty('--color-accent', '#FF4768');
                    rootStyle.style.setProperty('--color-accent-light', '#FF476833');
                    break
                case "color-4":
                    rootStyle.style.setProperty('--color-accent', '#0038FF');
                    rootStyle.style.setProperty('--color-accent-light', '#0038FF33');
                    break
                case "color-5":
                    rootStyle.style.setProperty('--color-accent', '#00C7F2');
                    rootStyle.style.setProperty('--color-accent-light', '#00C7F233');
                    break
            }
            socket.emit("join", "join");
        },
        toggleSelectedItem(index) {
            if (this.selectedItem === index) {
                this.selectedItem = null;
            } else {
                this.selectedItem = index;
            }
        }

    },
    data() {
        return {
            items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
            selectedItem: null
        }
  }
}
</script>