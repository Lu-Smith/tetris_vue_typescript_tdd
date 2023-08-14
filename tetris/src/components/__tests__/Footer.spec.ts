import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import FooterComponentVue from '../FooterComponent.vue'
import exp from 'constants'


describe('Footer', () => {
  it('renders all elements correctly', () => {
    const wrapper = mount(FooterComponentVue)
    expect(wrapper.text()).toContain('This game was coded by Luna Smith and is available as an open-source project on GitHub.')
    
    const footerElement = wrapper.find('h4')
    expect(footerElement.exists()).toBeTruthy

    const profileLink = footerElement.find('a.profile-link')
    expect(profileLink.exists()).toBe(true)
    expect(profileLink.attributes('href')).toContain('https://www.lunasmithart.com/')
    expect(profileLink.attributes('target')).toBe('_blank')

    const gitHubLink = footerElement.find('a.gitHub-link')
    expect(gitHubLink.exists()).toBe(true)
    expect(gitHubLink.attributes('href')).toContain('https://github.com/Lu-Smith/tetris_vue_typescript_tdd')
    expect(gitHubLink.attributes('target')).toBe('_blank')
})
})