
import { createStore} from "vuex";
import API from "../api"


export const state = {
    eventList:[],
    sortFlag:false
}

export const getters = {
}

export const mutations = {
    getEvents (state, data) {
        state.pageData = data.page
        state.eventList=data["_embedded"].events
    },
    sort(state, sortKey) {
        state.eventList= !state.sortFlag ? state.eventList.sort((a, b) => a[sortKey].localeCompare(b[sortKey])):state.eventList.sort((a, b) => b[sortKey].localeCompare(a[sortKey]));
        state.sortFlag=!state.sortFlag
    },
    resetSortFlag(state){
        state.sortFlag=false
    }
}

export const actions = {
    async getEvents(context,payload){
            const {key,page}=payload
            const response = await API.getEvents(key, page)
            this.commit('getEvents', response.data)
            this.commit('resetSortFlag')
    },
    async sortByKey(context, payload){
            const {sortKey} = payload
            this.commit('sort', sortKey)
    }
}


export default new createStore({
    state,
    getters,
    mutations,
    actions,
    modules: {}
})

