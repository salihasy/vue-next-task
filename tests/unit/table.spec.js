import {shallowMount} from '@vue/test-utils'
import Search from "../../src/components/Events.vue"
import Events from "../../src/components/Search.vue"
import Table from "@/components/Table.vue";


describe("Table.vue", () => {
    // function for mount
    function mountComponent() {
        return shallowMount(Table)
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

    it('Search component exists check', () => {
        const search = wrapper.findComponent(Search)
        expect(search.exists()).toBeTruthy()
    })


    it('Events component exists check', () => {
        const events = wrapper.findComponent(Events)
        expect(events.exists()).toBeTruthy()
    })



})