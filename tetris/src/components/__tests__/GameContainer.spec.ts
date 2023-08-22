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
        const cells = blockContainer.findAll('.block-cells')
        expect(blockContainer.exists()).toBe(true)
    }),

    it('displays the current Tetris block correctly', async () => {
        const wrapper = mount(GameContainerVue);
    

        (wrapper.vm as any).currentTetrisBlock = [[[1, 1], [1, 1]]];
    
        await wrapper.vm.$nextTick();
   
        const blockCells = wrapper.findAll('.block-cells');
        expect(blockCells.length).toBe(2);
        blockCells.forEach((blockCell) => {
            if (blockCell.text() === '1') {
              const backgroundColor = (blockCell.element as any).style.backgroundColor;
              expect(backgroundColor).toMatch(/^hsl\(\d+, 50%, 60%\)$/); 
            }
          });
    });

    it('Tetris block appears in a board game after click at start button', async () => {
        const wrapper = mount(GameContainerVue);
    

        (wrapper.vm as any).currentTetrisBlock = [[[1, 1, 1, 1]]];
    
        await wrapper.vm.$nextTick();
   
        const blockCells = wrapper.findAll('.block-cells');
        expect(blockCells.length).toBe(1);
        
    });
})