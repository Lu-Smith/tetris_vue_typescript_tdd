import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils';
import TetrisGameVue from "../TetrisGame.vue";
import GameContainerVue from "../GameContainer.vue";
import { ref } from 'vue';

describe('TetrisGame', () => {
    it('renders all elements correctly', () => {
        const wrapper = mount(TetrisGameVue)

        //display title
        const titleElement = wrapper.find('h1')
        expect(titleElement.exists()).toBe(true)
        expect(titleElement.text()).toContain('Tetris')

        //display level-timer
        const levelTimerContainer = wrapper.find('div.level-timer-container')
        expect(levelTimerContainer.exists()).toBe(true)
        const timerContainer = wrapper.find('div.timer-container')
        expect(timerContainer.exists()).toBe(true)
        const levelElement = wrapper.find('h2')
        expect(levelElement.exists()).toBe(true)

        //display buttons
        const buttonContainer = wrapper.find('div.button-container')
        expect(buttonContainer.exists()).toBe(true)

        const startButton = wrapper.find('button.start')
        expect(startButton.exists()).toBe(true)
        expect(startButton.text()).toContain('Start')

        const pauseButton = wrapper.find('button.pause')
        expect(pauseButton.exists()).toBe(true)
        expect(pauseButton.text()).toContain('Pause')

        //display result
        const resultContainer = wrapper.find('div.result-container')
        expect(resultContainer.exists()).toBe(true)
        const scoreElement = resultContainer.find('div.score')
        expect(scoreElement.exists()).toBe(true)
        const bestScoreElement = resultContainer.find('div.best-score')
        expect(bestScoreElement.exists()).toBe(true)

         //display a game board
        const gameContainer = wrapper.findComponent(GameContainerVue)
        expect(gameContainer.exists()).toBe(true)

    }),

    it('start button start the timer', async () => {
        const wrapper = mount(TetrisGameVue);
        expect((wrapper.vm as any).timer).toBe('00:00');
        expect((wrapper.vm as any).level).toBe(1);
        expect((wrapper.vm as any).startButton).toBe('Start');
        expect((wrapper.vm as any).gameStarted).toBe(false);

        //starts the timer
        const startButton = wrapper.find('button.start')
        await startButton.trigger('click')
        await new Promise(resolve => setTimeout(resolve, 1100));

        expect((wrapper.vm as any).seconds).toBe(1)
    }),

    // it('change level every 2 minutes of playing', async () => {
    //     const wrapper = mount(TetrisGameVue)

    //     //change level
    //     const startButton = wrapper.find('button.start');
    //     await startButton.trigger('click');

    //     await new Promise(resolve => setTimeout(resolve, 121100));

    //     expect((wrapper.vm as any).seconds).toBe(0)
    //     expect((wrapper.vm as any).minutes).toBe(2)

    //     const levelElement = wrapper.find('h2')
    //     expect(levelElement.text()).toBe('level 2')
    // }, 150000);

    it('pause button stops timer', async () => {
        const wrapper = mount(TetrisGameVue)

        const pauseButton = wrapper.find('button.pause');
        await pauseButton.trigger('click');
        await new Promise((resolve) => setTimeout(resolve, 1000));

        expect((wrapper.vm as any).interval).toBeNull();
    });

    it('start button changes to continue changes', async () => {
        const wrapper = mount(TetrisGameVue)

        const pauseButton = wrapper.find('button.pause');
        await pauseButton.trigger('click');

        const startButton = wrapper.find('button.start');
        expect(startButton.text()).toContain('Continue');
    });

    it('Tetris block appears in a board game after click at start button', async () => {
        const wrapper = mount(TetrisGameVue)

        //display start button
        const startButton = wrapper.find('button.start');
        await startButton.trigger('click');

        await wrapper.vm.$nextTick();

        expect((wrapper.vm as any).timer).toBe('00:00'); 
        expect((wrapper.vm as any).level).toBe(1);
    
        //display correct block
        const gameContainer = wrapper.findComponent(GameContainerVue);
        (gameContainer.vm as any).currentTetrisBlock = [[[1, 1, 1, 1]]];

        await wrapper.vm.$nextTick();
    
        const blockCells = gameContainer.findAll('.block-cells');
        const boardCells = gameContainer.findAll('.board-cells');
        expect(blockCells.length).toBe(1);
        expect(boardCells.length).toBe(180);

        //  //display block in the board game
        //  const boardCellValues = boardCells.map((boardCell) => Number(boardCell.text()));
        //  const numberOfOnes = boardCellValues.filter((value) => value === 1).length;
        //  expect(numberOfOnes).toBe(4);
    });

    it('handleKeyLeft sets moveLeft to true', async () => {
        const wrapper = mount(TetrisGameVue);

        //display start button
        const startButton = wrapper.find('button.start');
        await startButton.trigger('click');
        await wrapper.vm.$nextTick();

        expect((wrapper.vm as any).gameStarted).toBe(true);
        expect((wrapper.vm as any).moveLeft).toBe(false);
        expect((wrapper.vm as any).left).toBe(0);

        expect(typeof (wrapper.vm as any).handleKeyLeft).toBe('function');

        const mockEvent = new KeyboardEvent('keydown', { key: 'ArrowLeft' });

        // Call the handleKeyLeft method with the mocked event
        (wrapper.vm as any).handleKeyLeft(mockEvent);
    
        await wrapper.vm.$nextTick();

        expect((wrapper.vm as any).moveLeft).toBe(true);
        expect((wrapper.vm as any).left).not.toBe(0);
    });

    it('handleKeyRight sets moveRight to true', async () => {
        const wrapper = mount(TetrisGameVue);

        //display start button
        const startButton = wrapper.find('button.start');
        await startButton.trigger('click');
        await wrapper.vm.$nextTick();

        expect((wrapper.vm as any).gameStarted).toBe(true);
        expect((wrapper.vm as any).moveRight).toBe(false);
        expect((wrapper.vm as any).right).toBe(0);

        expect(typeof (wrapper.vm as any).handleKeyRight).toBe('function');

        const mockEvent = new KeyboardEvent('keydown', { key: 'ArrowRight' });

        // Call the handleKeyRight method with the mocked event
        (wrapper.vm as any).handleKeyRight(mockEvent);
    
        await wrapper.vm.$nextTick();

        expect((wrapper.vm as any).moveRight).toBe(true);
        expect((wrapper.vm as any).right).not.toBe(0);
    });

    it('handleKeyDown sets moveDown to true', async () => {
        const wrapper = mount(TetrisGameVue);

        //display start button
        const startButton = wrapper.find('button.start');
        await startButton.trigger('click');
        await wrapper.vm.$nextTick();

        expect((wrapper.vm as any).gameStarted).toBe(true);
        expect((wrapper.vm as any).moveDown).toBe(false);
        expect((wrapper.vm as any).down).toBe(0);

        expect(typeof (wrapper.vm as any).handleKeyDown).toBe('function');

        const mockEvent = new KeyboardEvent('keydown', { key: 'ArrowDown' });

        // Call the handleKeyDown method with the mocked event
        (wrapper.vm as any).handleKeyDown(mockEvent);
    
        await wrapper.vm.$nextTick();

        expect((wrapper.vm as any).moveDown).toBe(true);
        expect((wrapper.vm as any).down).not.toBe(0);
    });
})