//该文件用于创建Vuex中最为核心的store

//引入Vuex
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
//准备actions--用于响应组件中的动作
const actions = {
    jiaOdd(context, value){
        if(context.state.sum % 2)
            context.commit('Jia', value)
    },
    jiaWait(context,value){
        setTimeout(()=>{
            context.commit('Jia', value)
        },1000)
    }
}
//准备mutations--用于操作数据(state)
const mutations = {
    Jia(state,value){
        // console.log('mutations中的Jia被调用了',state,value);
        state.sum += value
    },
    Jian(state,value){
        state.sum -= value
    }
}
//准备state--用于存储数据
const state = {
    //当前的和
    sum:0,
    school:'新疆工程学院',
    subject:'数据科学与大数据技术'
}
//准备getters--用于将state中的数据进行加工
const getters = {
    bigNum(state){
        return state.sum * 10
    }
}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
