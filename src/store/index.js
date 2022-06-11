
import { createStore} from "vuex";
import API from "../api"


export const state = {
    eventList:[]
}

export const getters = {
}

export const mutations = {
    getEvents (state, data) {
        state.eventList=data["_embedded"].events
    }
}

export const actions = {
    async getEvents(context,payload){
            const {key,page}=payload
            const response = await API.getEvents(key, page)
            this.commit('getEvents', response.data)
    }
}


export default new createStore({
    state,
    getters,
    mutations,
    actions,
    modules: {}
})

