import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var myStore = new Vuex.Store({
    state:{
        nowSelectedTab:"home"
    },
    mutations:{
        updateSelectedTab(state,arg){
            state.nowSelectedTab = arg
        }
    }
})

export default myStore