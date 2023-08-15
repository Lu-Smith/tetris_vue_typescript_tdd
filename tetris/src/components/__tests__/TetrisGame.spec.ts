import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils';
import TetrisGameVue from "../TetrisGame.vue";
import GameContainerVue from "../GameContainer.vue";

describe('TetrisGame', () => {
    it('renders all elements correctly', () => {
        const wrapper = mount(TetrisGameVue)

        const titleElement = wrapper.find('h2')
        expect(titleElement.exists()).toBe(true)
        expect(titleElement.text()).toContain('Tetris')

        const levelElement = wrapper.find('h3')
        expect(levelElement.exists()).toBe(true)

        const startButton = wrapper.find('button.start')
        expect(startButton.exists()).toBe(true)
        expect(startButton.text()).toContain('Start')

        const pauseButton = wrapper.find('button.pause')
        expect(pauseButton.exists()).toBe(true)
        expect(pauseButton.text()).toContain('Pause')

        const resultContainer = wrapper.find('div.result-container')
        expect(resultContainer.exists()).toBe(true)
        const scoreElement = resultContainer.find('div.score')
        expect(scoreElement.exists()).toBe(true)
        const bestScoreElement = resultContainer.find('div.best-score')
        expect(bestScoreElement.exists()).toBe(true)

        const gameContainer = wrapper.findComponent(GameContainerVue)
        expect(gameContainer.exists()).toBe(true)

    })
})