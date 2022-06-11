import Home from "../../src/views/Home.vue"
import {shallowMount} from '@vue/test-utils'

describe("Home.vue", () => {
    // function for mount
    function mountComponent() {
        return shallowMount(Home)
    }

    // beforeEach runs before each test
    let wrapper 
    beforeEach(() => {
        wrapper = mountComponent()
    })
    
    // if the component is not found this will return false, and test will fail
    it('component exists check', () => { 
        expect(wrapper.exists()).toBeTruthy();
    })

    it('Table component exists check', () => {
        const table = wrapper.findComponent(Table)// => finds Bar by component instance
        expect(table.exists()).toBeTruthy()
    })
})