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
const newTetrisBlock = ref(getRandomTetrisShape());
const newPosition = ref({row: 4, col: -1});
const tetrisBlock = ref([...currentTetrisBlock.value]);

function generateNewTetrisBlock() {
  if (newPosition.value.col === 0) {
      tetrisBlock.value = [...newTetrisBlock.value];
  }
}

function moveTetrisDownWithTime() {
  if (newPosition.value.col + 1 <= 17 ) {
    newPosition.value.col += 1; // Move the block down
  } else {
    newPosition.value.col = 17; // Don't move the block down
    console.log('down', props.down);
    console.log('col', newPosition.value.col);
  }
}

function moveTetrisLeft() {
  newPosition.value.col = newPosition.value.col; 
    if (newPosition.value.row - props.left! < 0 ) {
      newPosition.value.row = 0; // Don't move the block left
    } else { 
      newPosition.value.row -= props.left! }; // Move the block left
}

function moveTetrisRight() {
  newPosition.value.col = newPosition.value.col; 
  if(newPosition.value.row < (boardRows.value.length - currentTetrisBlock.value.length)) {
    if (newPosition.value.row + props.right! >= (boardRows.value.length - currentTetrisBlock.value.length)) {
      newPosition.value.row = boardRows.value.length - currentTetrisBlock.value.length; // Don't move the block right
    } else { 
      newPosition.value.row += props.right!; // Move the block right
    
    } 
  }
}

function moveTetrisDown() {
  if (newPosition.value.col + 1 <= 17 ) {
    newPosition.value.col += 1; // Move the block down
  } else {
    newPosition.value.col = 17; // Don't move the block down
  }
  newPosition.value.row = newPosition.value.row;
} 

watch([() => props.seconds, () => props.left, () => props.right, () => props.down], () => {
  if (props.gameStarted) {
    generateNewTetrisBlock();

      for (let row = 0; row < currentTetrisBlock.value.length; row++) {
        for (let col = 0; col < currentTetrisBlock.value[row].length; col++) {
          if (currentTetrisBlock.value[row][col] === 1) {
            if (newPosition.value.row >= 0 
            && newPosition.value.row < (boardRows.value.length)
            && newPosition.value.col < (boardRows.value[0].length - currentTetrisBlock.value[row].length)) {
              boardRows.value[newPosition.value.row + row][newPosition.value.col + col] = 0;
            }
          }
        }
      }

        // Move the left
        if (props.left) {
        moveTetrisLeft();
        }

         // Move the block right
        if (props.right) {
          moveTetrisRight();
        }
        // Move the block down
        if (props.down) {
          moveTetrisDown();
        }

        // Move the block down with time
        moveTetrisDownWithTime();

      // Update the new position of the block
      for (let row = 0; row < currentTetrisBlock.value.length; row++) {
        for (let col = 0; col < currentTetrisBlock.value[row].length; col++) {
          if (currentTetrisBlock.value[row][col] === 1) {
            if (newPosition.value.row >= 0 
            && newPosition.value.row < (boardRows.value.length)
            && newPosition.value.col <= (boardRows.value[0].length - currentTetrisBlock.value[row].length)) {
            boardRows.value[newPosition.value.row + row][newPosition.value.col + col] = 1;
          } 

        }
      }
    }
  }
});
</script>

<template>
    <div class="block-container">
          <div class="block-rows" v-for="(blockRow, rowIndex) in tetrisBlock " :key="rowIndex">
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
