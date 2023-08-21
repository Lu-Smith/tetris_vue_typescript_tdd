<script lang="ts" setup>
import { ref } from 'vue'
const blockRows = ref<number[][]>([]);
const numBlockRows = 8;
let currentBlockNumber = 1;

for (let i = 0; i < numBlockRows; i++) {
    const blockRow = [];
    blockRow.push(currentBlockNumber);
    currentBlockNumber++;
    blockRows.value.push(blockRow);
}

const boardRows = ref<number[][]>([]);
const numBoardRows = 180;
let currentBoardNumber = 1;

for (let i = 0; i < numBoardRows; i++) {
    const boardRow = [];
    boardRow.push(currentBoardNumber);
    currentBoardNumber++;
    boardRows.value.push(boardRow);
}
</script>

<template>
        <div class="block-container">
        <div class="block">
            <div class="block-rows" v-for="(blockRow, rowIndex) in blockRows" :key="rowIndex">
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
