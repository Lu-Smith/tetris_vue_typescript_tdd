<script lang="ts" setup>
import { ref } from 'vue'
import GameContainer from './GameContainer.vue';


const timer = ref<string | number>('00:00')
const minutes = ref(0)
const seconds = ref(0)
const interval = ref<null | number>(null) 
const level = ref(1)


const startGame = () => {
    interval.value = setInterval(() => {
        if(minutes.value < 10) {
            if(seconds.value < 10) {
                timer.value = `0${minutes.value}:0${seconds.value}`
            } else {
                timer.value = `0${minutes.value}:${seconds.value}`
            }
        } else {
            if(seconds.value < 10) {
                timer.value = `${minutes.value}:0${seconds.value}`
            } else {
                timer.value = `${minutes.value}:${seconds.value}`
            }
        }
        seconds.value += 1;
        if (seconds.value === 60) {
            minutes.value += 1;
            seconds.value = 0;
            level.value += 1;
        }
    }, 1000)
}
</script>

<template>
    <h1>Tetris</h1>
    <div class="level-timer-container">
        <h2>level {{level}}</h2>
        <div class="timer-container">
        {{ timer }}
        </div>
    </div>
    <div class="button-container">
        <button class="start" @click="startGame">Start</button>
        <button class="pause">Pause</button>
    </div>
    <div class="result-container">
        <div class="score">Score: 0</div>
        <div class="best-score">Your best score:</div>
    </div>
    <GameContainer />
</template>

<style>

</style>

