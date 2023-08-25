<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import GameContainer from './GameContainer.vue';


const timer = ref<string | number>('00:00')
const minutes = ref(0)
const seconds = ref(0)
const interval = ref<null | number>(null) 
const level = ref(1)
const startButton = ref('Start')
const gameStarted = ref(false)
const moveLeft = ref(false)
const moveRight = ref(false)
const moveDown = ref(false)

const gameBoardStarted = () => {
    gameStarted.value = true;

    const handleKeyLeft = (event: KeyboardEvent) => {
        if (event.key === 'ArrowLeft') {
            moveLeft.value = true;
            event.preventDefault(); 
        }
    }

    const handleKeyRight = (event: KeyboardEvent) => {
        if (event.key === 'ArrowRight') {
            moveRight.value = true;
            event.preventDefault(); 
        }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'ArrowDown') {
            moveDown.value = true;
            event.preventDefault(); 
        }
    }

    const handleRelease = (event: KeyboardEvent) => {
        if (event.key === 'ArrowLeft') {
            moveLeft.value = false;
        } else if (event.key === 'ArrowRight') {
            moveRight.value = false;
        } else if (event.key === 'ArrowDown') {
            moveDown.value = false;
        }
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keydown', handleKeyLeft);
    window.addEventListener('keydown', handleKeyRight);
    window.addEventListener('keyup', handleRelease);

    onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('keydown', handleKeyLeft);
    window.removeEventListener('keydown', handleKeyRight);
    window.removeEventListener('keyup', handleRelease);
})
}

const startGame = () => {
    clearInterval(interval.value!) 
    gameBoardStarted()
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
    }
        if (minutes.value % 2 === 0 && minutes.value != 0) {
            level.value = minutes.value / 2 + 1;
    }
    }, 1000)
}

const gamePaused = () => {
    clearInterval(interval.value!) 
    startButton.value = 'Continue'
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
        <button class="start" @click="startGame">{{ startButton }}</button>
        <button class="pause" @click="gamePaused">Pause</button>
    </div>
    <div class="result-container">
        <div class="score">Score: 0</div>
        <div class="best-score">Your best score:</div>
    </div>
    <GameContainer 
    :gameStarted="gameStarted" 
    :seconds="seconds" 
    :moveLeft="moveLeft"
    :moveRight="moveRight"
    :moveDown="moveDown"/>
</template>


