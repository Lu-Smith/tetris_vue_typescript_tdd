<script lang="ts" setup>
import { ref } from 'vue'
const rows = ref(Array.from({length: 18}, () => Array(10).fill(0)))
</script>

<template>
    <div class="board-container">
        <div class="board">
            <div class="rows" v-for="(row, rowIndex) in rows" :key="rowIndex">
                <div class="cell" v-for="(cell, cellIndex) in row" :key="cellIndex">
                    {{ cell }}
                </div>
            </div>

        </div>
    </div>

</template>
