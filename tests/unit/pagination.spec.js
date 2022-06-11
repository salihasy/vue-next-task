import Pagination from "@/components/Pagination.vue"
import { shallowMount } from '@vue/test-utils'
import {actions, getters, mutations, state} from "../../src/store/index";
import { createStore } from 'vuex'

describe("Pagination.vue", () => {
    // function for mount
    const store = new createStore({
        // this state not change real state , reset state for each test
        state : JSON.parse(JSON.stringify(state)),
        getters,
        mutations,
        actions
    })
    function mountComponent() {
        return shallowMount(Pagination,{
            global: {
                plugins: [store]
            }

        })
    }


    // if the component is not found this will return false, and test will fail
    it('component exists check', () => { 
        const wrapper=mountComponent()
        expect(wrapper.exists()).toBeTruthy();
    })
    
})