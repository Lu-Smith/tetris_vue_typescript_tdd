import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils';
import GameContainerVue from "../GameContainer.vue";

describe('GameContainer', () => {
    it('renders all elements correctly', () => {
        const wrapper = mount(GameContainerVue)

        //display board
        const boardContainer = wrapper.find('div.board-container')
        expect(boardContainer.exists()).toBe(true)
        const boardGrid = wrapper.find('div.board')
        expect(boardGrid.exists()).toBe(true)
        const boardRows = boardGrid.findAll('.board-rows')
        const boardCells = boardGrid.findAll('.board-cells')
        expect(boardRows).toHaveLength(10)
        expect(boardCells.length).toBe(180)

        //display block
        const blockContainer = wrapper.find('div.block-container')
        expect(blockContainer.exists()).toBe(true)
        const blockGrid = wrapper.find('div.block')
        expect(blockGrid.exists()).toBe(true)
        const rows = blockGrid.findAll('.block-rows')
        const cells = blockGrid.findAll('.block-cells')
        expect(rows).toHaveLength(4)
        expect(cells.length).toBe(8)

        //display timer
        const timerContainer = wrapper.find('div.timer-container')
        expect(timerContainer.exists()).toBe(true)
    
    })
})