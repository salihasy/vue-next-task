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

    it('input text with v-model change check', () => {
        const wrapper = mountComponent();
        let inputText = wrapper.find('#search-input');
        inputText.element.value = "say"
        inputText.trigger("input")
        expect(wrapper.vm.$data.key).toBe("say")
    })

    it('search button click functionality check', async () => {
        const dispatchMock = jest.fn()
        const wrapper = shallowMount(Search, {
            data() {
                return {
                    key : "saliha"
                }
            },
            global : {
                mocks : {
                    $store : {
                        dispatch : dispatchMock
                    }
                }}
        })

        let button = wrapper.find('#search-button')
        button.trigger("click")
        await wrapper.vm.$nextTick()
        expect(dispatchMock).toHaveBeenCalledWith('getEvents', {
            key: "saliha",
            page: 1
        })
    })

    it('search button click functionality check when input key null or undefined', async () => {
        const dispatchMock = jest.fn()
        const wrapper = shallowMount(Search, {
            data() {
                return {
                    key : ""
                }
            },
            global : {
                mocks : {
                    $store : {
                        dispatch : dispatchMock
                    }
                }}
        })

        let button = wrapper.find('#search-button')
        button.trigger("click")
        await wrapper.vm.$nextTick()
        expect(dispatchMock).not.toHaveBeenCalledWith('getEvents', {
            key: "",
            page: 1
        })
    })
})