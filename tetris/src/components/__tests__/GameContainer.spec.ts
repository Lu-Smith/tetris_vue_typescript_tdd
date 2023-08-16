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
        const rows = boardGrid.findAll('.rows')
        const cells = boardGrid.findAll('cells')
        expect(rows).toHaveLength(18)
        expect(cells).toHaveLength(180)

    })
})