<template>
    <div class="content">
        <div id="animation">
            <p>MashRoom</p>
        </div>
        <div class="intro">
            <h1>be part of the experience</h1>
            <div class="color-container">
                <div class="color-item locked"></div>
                <div class="color-item selected"></div>
                <div class="color-item"></div>
                <div class="color-item"></div>
                <div class="color-item"></div>
                <div class="color-item"></div>
                <div class="color-item"></div>
                <div class="color-item"></div>
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

/* ColorPicker */
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

</style> 

<script>
import { socket } from '../client'

export default {
}
</script>
