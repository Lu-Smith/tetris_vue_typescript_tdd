import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils';
import TetrisGameVue from "../TetrisGame.vue";

describe('TetrisGame', () => {
    it('renders all elements correctly', () => {
        const wrapper = mount(TetrisGameVue)

        const titleElement = wrapper.find('h2')
        expect(titleElement.exists()).toBe(true)

        const startButton = wrapper.find('button.start')
        expect(startButton.exists()).toBe(true)
        expect(startButton.text()).toContain('Start')

        const pauseButton = wrapper.find('button.pause')
        expect(pauseButton.exists()).toBe(true)
        expect(pauseButton.text()).toContain('Pause')
    })
})