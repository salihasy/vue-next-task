import App from "../../App.vue"
import Header from "../../components/Header.vue"
import {mount} from '@vue/test-utils'

describe("App.vue", () => {
    let wrapper
    // function for mount
    function mountComponent() {
        return mount(App)
    }
    // if the component is not found this will return false, and test will fail
    it('component exists check', () => { 
        wrapper = mountComponent()
        expect(wrapper.exists()).toBeTruthy();
    })

    it('Header component exists check', () => {
        wrapper = mountComponent()
        const header = wrapper.findComponent(Header) 
        expect(header.exists()).toBeTruthy()
    })

    it('Home component exists check', async () => {
        const router = createRouter({
            history : createWebHistory(),
            routes : routes
        })
        const store = new createStore({
            // this state not change real state , reset state for each test
            state : JSON.parse(JSON.stringify(state)),
            getters,
            mutations,
            actions
        })
        router.push('/')
        await router.isReady()
        wrapper = mount(App, {
            global: {
              plugins: [router, store]
            }
          })
        const home = wrapper.findComponent(Home)
        expect(home.exists()).toBeTruthy()
    })
})