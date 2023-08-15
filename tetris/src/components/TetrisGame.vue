<script lang="ts" setup>
import GameContainer from './GameContainer.vue';
</script>

<template>
    <h2>Tetris</h2>
    <h3>level 1</h3>
    <button class="start">Start</button>
    <button class="pause">Pause</button>
    <div class="result-container">
        <div class="score">Score: 0</div>
        <div class="best-score">Your best score:</div>
    </div>
    <GameContainer />
</template>

