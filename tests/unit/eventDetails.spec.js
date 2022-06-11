import EventDetails from "../../src/views/EventDetails.vue"
import {mount} from '@vue/test-utils'



describe("EventDetails.vue", () => {
    // function for mount
    function mountComponent() {
        return mount(EventDetails)
    }

    // beforeEach runs before each test
    let wrapper 
    beforeEach(() => {
        wrapper = mountComponent()
    })
    
    // if the component is not found this will return false, and test will fail
    it('component exists check', () => { 
        mountComponent()
        expect(wrapper.exists()).toBeTruthy();
    })

})