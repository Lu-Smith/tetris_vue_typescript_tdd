<script lang="ts" setup>
import GameContainer from './GameContainer.vue';
</script>

<template>
    <h1>Tetris</h1>
    <div class="level-timer-container">
        <h2>level 1</h2>
        <div class="timer-container">
        00:00
        </div>
    </div>
    <button class="start">Start</button>
    <button class="pause">Pause</button>
    <div class="result-container">
        <div class="score">Score: 0</div>
        <div class="best-score">Your best score:</div>
    </div>
    <GameContainer />
</template>

<style></style>

