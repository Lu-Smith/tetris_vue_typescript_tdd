<script lang="ts" setup>
import { ref, computed, watch } from 'vue'

const props = defineProps(
    { 
        gameStarted: Boolean,
        seconds: Number,
        moveLeft: Boolean,
        moveRight: Boolean,
        moveDown: Boolean,
        left: Number,
        right: Number,
        down: Number,
    }
);

const boardRows = ref(Array.from({length: 10}, () => Array(18).fill(0)))
const randomBackgroundColor = computed(() => {
  const hue = Math.floor(Math.random() * 360); 
  return `hsl(${hue}, 50%, 60%)`; 
});

const tetrisShapes = [
  [[1, 1, 1, 1]],                  // I-shape
  [[1, 1], [1, 1]],                // O-shape
  [[1, 1, 1], [0, 1, 0]],          // T-shape
  [[1, 1, 1], [1, 0, 0]],          // L-shape
  [[1, 1, 1], [0, 0, 1]],          // J-shape
  [[1, 1, 0], [0, 1, 1]],          // S-shape
  [[0, 1, 1], [1, 1, 0]]           // Z-shape
];

function getRandomTetrisShape() {
  const randomIndex = Math.floor(Math.random() * tetrisShapes.length);
  return tetrisShapes[randomIndex];
}

const currentTetrisBlock = ref(getRandomTetrisShape());
const currentTetrisPosition = ref({ row: 0, col: 0 });

const moveTetrisLeft = () => {
  console.log('move left');
}

const isMoveValid = () => {
  console.log('move invalid')
}


</script>

<template>
        <div class="block-container">
            <div class="block-rows" v-for="(blockRow, rowIndex) in currentTetrisBlock " :key="rowIndex">
                <div 
                class="block-cells" 
                v-for="(blockCell, cellIndex) in blockRow" 
                :key="cellIndex"
                :style="{ backgroundColor: blockCell === 1 ? randomBackgroundColor : 'transparent' }">
                    {{ blockCell }}
                </div>
        </div>
    </div>
    <div class="board-container">
        <div class="board">
            <div class="board-rows" v-for="(boardRow, rowIndex) in boardRows" :key="rowIndex">
                <div 
                class="board-cells" 
                v-for="(boardCell, cellIndex) in boardRow" 
                :key="cellIndex"
                :style="{ backgroundColor: boardCell === 1 ? randomBackgroundColor : 'transparent' }">
                    {{ boardCell }}
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.block-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.block {
    display: grid;
    grid-template-columns: repeat(4, 30px); 
    grid-gap: 1px;
    border: 1px solid #000;
    background-color: rgba(0, 0, 0, 0.4);
}

.block-cells {
    width: 30px; 
    height: 30px; 
    border: 1px solid rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    border-radius: 3px;
}

.board-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 65vh;
}

.board {
  display: grid;
  grid-template-columns: repeat(10, 30px); 
  grid-gap: 1px;
  border: 1px solid #000;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 3px;
}

.board-cells {
    width: 30px; 
    height: 30px; 
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
}
</style>
