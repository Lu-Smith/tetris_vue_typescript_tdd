<script lang="ts" setup>
import { ref } from 'vue'
const rows = ref(Array.from({length: 10}, () => Array(18).fill('Hello')))
</script>

<template>
    <div class="board-container">
        <div class="board">
            <div class="rows" v-for="(row, rowIndex) in rows" :key="rowIndex">
                <div class="cells" v-for="(cell, cellIndex) in row" :key="cellIndex">
                    {{ cell }}
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.board-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70vh;
}

.board {
  display: grid;
  grid-template-columns: repeat(10, 30px); 
  grid-gap: 1px; /* Gap between cells */
  border: 1px solid #000;
  background-color: rgba(0, 0, 0, 0.4);
}

.cells {
  width: 30px; /* Adjust cell size as needed */
  height: 30px; /* Adjust cell size as needed */
  background-color: transparent;
  border: 1px solid #ddd;
}
</style>
