<script lang="ts" setup>
import { ref } from 'vue'
const boardRows = ref(Array.from({length: 10}, () => Array(18).fill('0')))
const blockRows = ref(Array.from({ length: 4 }, () => Array(3).fill('0')));

const tetrisShapes = [
  [[1, 1, 1, 1]],                   // I-shape
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
</script>

<template>
        <div class="block-container">
        <div class="block">
            <div class="block-rows" v-for="(blockRow, rowIndex) in currentTetrisBlock " :key="rowIndex">
                <div class="block-cells" v-for="(blockCell, cellIndex) in blockRow" :key="cellIndex">
                    {{ blockCell }}
                </div>
            </div>
        </div>
    </div>
    <div class="board-container">
        <div class="board">
            <div class="board-rows" v-for="(boardRow, rowIndex) in boardRows" :key="rowIndex">
                <div class="board-cells" v-for="(boardCell, cellIndex) in boardRow" :key="cellIndex">
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
  background-color: transparent;
  border: 1px solid #ddd;
  display: flex;
    align-items: center;
    justify-content: center;
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
}

.board-cells {
  width: 30px; 
  height: 30px; 
  background-color: transparent;
  border: 1px solid #ddd;
  display: flex;
    align-items: center;
    justify-content: center;
}
</style>
