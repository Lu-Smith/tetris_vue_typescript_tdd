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
        const boardCells = boardGrid.findAll('.board-cells')
        expect(boardCells.length).toBe(180)

        //display block
        const blockContainer = wrapper.find('div.block-container')
        expect(blockContainer.exists()).toBe(true)
        const blockGrid = wrapper.find('div.block')
        expect(blockGrid.exists()).toBe(true)
        const cells = blockGrid.findAll('.block-cells')
        expect(cells.length).toBe(8)
    }),

    it('display random block', () => {
        const wrapper = mount(GameContainerVue)

        const randomBlockElement = wrapper.find('block')
        expect(randomBlockElement.exists()).toBe(true)
     
    })
})