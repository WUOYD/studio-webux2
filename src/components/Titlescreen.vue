<template>
    <div class="content">
        <div class="animation">
            <img class="logo" src="../assets/logo/mashroom-logo-lg.svg" alt="logo">
            <img class="mask" src="../assets/img/mashroom-bg-mask.svg" alt="background">
        </div>
        <div class="intro">
            <div class="text-wrapper">
                <h1>be part of the experience</h1>
                <p>Welcome to the interactive sound installation, where you can contribute to the sound playing in this room.</p>
                <h2>chose which color you want to add</h2>
            </div>
            <div class="color-container">
                <div class="color-item"></div>
                <div class="color-item selected"></div>
                <div class="color-item"></div>
                <div class="color-item"></div>
                <div class="color-item"></div>
                <div class="color-item"></div>
                <div class="color-item"></div>
                <div class="color-item"></div>
            </div>
            <button class="text icon play">join</button>
        </div>
    </div>
</template>

<style scoped>
.content{
    position: relative;
    height: 100vh;
    width: 100vw;
}

/* ================== ANIMATION ====================== */

.animation{
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
    z-index: 2;
}

@keyframes main{
    90%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}

.animation .logo,
.animation .mask{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
}

.animation .logo{
    width: 60vw;
    height: auto;
    animation: logo 3s forwards;
}

.animation .mask{
    width: 150vw;
    animation: mask 8s forwards;
}

@keyframes logo{
    from{
        width: 60vw;
    }
    to{
        width: 30vw;
    }
}

@keyframes mask{
    from{
        width: 150vw;
    }
    to{
        width: 16000vw;
    }
}

/* ================== INTRO ====================== */

.intro{
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

.text-wrapper{
    padding: 0 15vw;
    flex: 1;
}

.text-wrapper h1{
    margin-bottom: 25px;
}

.text-wrapper p{
    margin-bottom: 20vh;
}

.color-container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    width: 100%;
    margin: 15px 0;
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

.color-item.selected::before{
    border: 2px solid white;
    height: 25px;
    width: 25px;
}

</style> 

<script>
import { socket } from '../client'

export default {
}
</script>
