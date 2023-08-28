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
      it('should move Tetris block down with time', () => {
        const wrapper = mount(GameContainerVue);
        const moveTetrisDownWithTime = (wrapper.vm as any).moveTetrisDownWithTime;
        // Initialize a sample game board and Tetris block
        const gameBoard = [
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ];
    
        const tetrisBlock = [
          [1, 1],
          [1, 1],
        ];

        const initialPosition = { row: 3, col: 1 };
        // Call moveTetrisDownWithTime()

        const newPosition = { ...initialPosition };
        newPosition.row -= 1;
        
        expect((wrapper.vm as any).isMoveValid(gameBoard, tetrisBlock, newPosition)).toBe(true);
        moveTetrisDownWithTime(initialPosition);

        // Assert that the Tetris block has moved left as expected
        expect(initialPosition).toEqual(newPosition);
      });

      it('should move Tetris block left', () => {
        const wrapper = mount(GameContainerVue);
        const moveTetrisLeft = (wrapper.vm as any).moveTetrisLeft;
        // Initialize a sample game board and Tetris block
        const gameBoard = [
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ];
    
        const tetrisBlock = [
          [1, 1],
          [1, 1],
        ];

        const initialPosition = { row: 0, col: 2 };
        // Call moveTetrisLeft()

        const newPosition = { ...initialPosition };
        newPosition.col -= 1;
        
        expect((wrapper.vm as any).isMoveValid(gameBoard, tetrisBlock, newPosition)).toBe(true);
        moveTetrisLeft(initialPosition);

        // Assert that the Tetris block has moved left as expected
        expect(initialPosition).toEqual(newPosition);
      });
    
      it('should move Tetris block right', () => {
        // Initialize a sample game board and Tetris block
        // Call moveTetrisRight()
        // Assert that the Tetris block has moved right as expected
      });
    
      it('should move Tetris block down', () => {
        // Initialize a sample game board and Tetris block
        // Call moveTetrisDown()
        // Assert that the Tetris block has moved down as expected
      });
    
      it('should check if a move is valid', () => {
        // Initialize a sample game board and Tetris block
        // Call isMoveValid() with different scenarios (valid and invalid moves)
        // Assert that the function correctly identifies valid and invalid moves
      });
    });

})