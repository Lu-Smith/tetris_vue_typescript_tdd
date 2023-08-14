import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import FooterComponentVue from '../FooterComponent.vue'


describe('Footer', () => {
  it('renders all elements correctly', () => {
    const wrapper = mount(FooterComponentVue)
    expect(wrapper.text()).toContain('This game was coded by Luna Smith and is available as an open-source project on GitHub.')
  })
})