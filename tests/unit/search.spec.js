import Search from "@/components/Search.vue"
import { shallowMount } from '@vue/test-utils'

describe("Search.vue", () => {
    // function for mount
    function mountComponent() {
        return shallowMount(Search)
    }

    it('component exists check', () => { 
        const wrapper=mountComponent()
        expect(wrapper.exists()).toBeTruthy();
    })

    it('search button exists check', () => {
        const wrapper = mountComponent()
        let a = wrapper.find('button')
        expect(a.text()).toStrictEqual("Search")
        expect(a.exists()).toBeTruthy()
    })

    // if the input element is not found this will return false, and test will fail
    it('input element exists check', () => {
        const wrapper = mountComponent()
        let a = wrapper.find('#search-input')
        expect(a.exists()).toBeTruthy()
    })
})