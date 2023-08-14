import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppVue from '@/App.vue'
import FooterComponentVue from '../FooterComponent.vue'


describe('App', () => {
  it('renders all elements correctly', () => {
    const wrapper = mount(AppVue)

    const footerComponent = wrapper.findComponent(FooterComponentVue)
    expect(footerComponent.exists()).toBe(true)


    // const headerElement = wrapper.find('header')
    // expect(headerElement.exists()).toBe(true)

    // const navElement = headerElement.find('nav')
    // expect(navElement.exists()).toBe(true)
    
})
})