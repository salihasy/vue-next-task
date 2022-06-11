import App from "../../App.vue"
import {mount} from '@vue/test-utils'

describe("App.vue", () => {
    // function for mount
    function mountComponent() {
        return mount(App)
    }

    // beforeEach runs before each test
    let wrapper 
    // if the component is not found this will return false, and test will fail
    it('component exists check', () => { 
        wrapper = mountComponent()
        expect(wrapper.exists()).toBeTruthy();
    })

    it('Header component exists check', () => {
        wrapper = mountComponent()
        const header = wrapper.findComponent(Header) // => finds Bar by component instance
        expect(header.exists()).toBeTruthy()
    })
})