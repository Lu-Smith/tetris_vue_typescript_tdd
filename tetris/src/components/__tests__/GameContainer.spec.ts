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

    describe('Tetris Game Logic', () => {
      it('should move Tetris block down with time',  async () => {
        const wrapper = mount(GameContainerVue, {
            props: {
              gameStarted: true,
              seconds: 0,
              newPosition: {row: 4, col: -1}, 
            },
          });

          expect(wrapper.vm.gameStarted).toBe(true);
          expect(wrapper.vm.seconds).toBe(0);
          expect((wrapper.vm as any).newPosition.col).toBe(-1);

         
          await (wrapper.vm as any).moveTetrisDownWithTime();
          await wrapper.vm.$nextTick();

          expect((wrapper.vm as any).newPosition.col).toBe(0);

          await (wrapper.vm as any).moveTetrisDownWithTime();
          await wrapper.vm.$nextTick();

          expect((wrapper.vm as any).newPosition.col).toBe(1);

        });
  

      it('should move Tetris block left', async () => {
        const wrapper = mount(GameContainerVue, {
          props: {
            gameStarted: true,
            seconds: 0,
            newPosition: {row: 4, col: -1},
            left: 1, 
          },
        });

        expect(wrapper.vm.gameStarted).toBe(true);
        expect(wrapper.vm.seconds).toBe(0);
        expect((wrapper.vm as any).newPosition.col).toBe(-1);
        expect((wrapper.vm as any).newPosition.row).toBe(4);

       
        await (wrapper.vm as any).moveTetrisLeft();
        await wrapper.vm.$nextTick();

        expect((wrapper.vm as any).newPosition.row).toBe(3);

        await (wrapper.vm as any).moveTetrisLeft();
        await wrapper.vm.$nextTick();

        expect((wrapper.vm as any).newPosition.row).toBe(2);
      });
    
      it('should move Tetris block right', async () => {
        const wrapper = mount(GameContainerVue, {
          props: {
            gameStarted: true,
            seconds: 0,
            newPosition: {row: 4, col: -1},
            right: 1, 
          },
        });

        expect(wrapper.vm.gameStarted).toBe(true);
        expect(wrapper.vm.seconds).toBe(0);
        expect((wrapper.vm as any).newPosition.col).toBe(-1);
        expect((wrapper.vm as any).newPosition.row).toBe(4);

       
        await (wrapper.vm as any).moveTetrisRight();
        await wrapper.vm.$nextTick();

        expect((wrapper.vm as any).newPosition.row).toBe(5);

        await (wrapper.vm as any).moveTetrisRight();
        await wrapper.vm.$nextTick();

        expect((wrapper.vm as any).newPosition.row).toBe(6);
      });

      it('should move Tetris block down', async () => {
        const wrapper = mount(GameContainerVue, {
          props: {
            gameStarted: true,
            seconds: 2,
            newPosition: {row: 4, col: -1},
            down: 1, 
          },
        });

        await wrapper.vm.$nextTick();

        expect(wrapper.vm.gameStarted).toBe(true);
        expect(wrapper.vm.seconds).toBe(2);

        expect((wrapper.vm as any).newPosition.col).toBe(-1);
        expect((wrapper.vm as any).newPosition.row).toBe(4);

       
        await (wrapper.vm as any).moveTetrisDown();
        await wrapper.vm.$nextTick();

        expect((wrapper.vm as any).newPosition.col).toBe(0);

        await (wrapper.vm as any).moveTetrisDown();
        await wrapper.vm.$nextTick();

        expect((wrapper.vm as any).newPosition.col).toBe(1);
      });
    
      it('should check if a move is valid', () => {
        // Initialize a sample game board and Tetris block
        // Call isMoveValid() with different scenarios (valid and invalid moves)
        // Assert that the function correctly identifies valid and invalid moves
      });
});

});
