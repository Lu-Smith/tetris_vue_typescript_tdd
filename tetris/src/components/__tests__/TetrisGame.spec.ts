import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils';
import TetrisGameVue from "../TetrisGame.vue";

describe('TetrisGame', () => {
    it('renders all elements correctly', () => {
        const wrapper = mount(TetrisGameVue)

        const titleElement = wrapper.find('h2')
        expect(titleElement.exists()).toBe(true)
    })
})