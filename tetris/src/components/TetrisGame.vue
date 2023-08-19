<script lang="ts" setup>
import { ref } from 'vue'
import GameContainer from './GameContainer.vue';
const timer = ref('00:00')

const startGame = () => {
    timer.value = '00:01'
}


</script>

<template>
    <h1>Tetris</h1>
    <div class="level-timer-container">
        <h2>level 1</h2>
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

