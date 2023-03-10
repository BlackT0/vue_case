//该文件用于创建Vuex中最为核心的store

//引入Vuex
import Vuex from 'vuex'
import Vue from 'vue'

//引入vuex模块化option
import sumOption from './sumOption'
import personOption from './personOptions'

Vue.use(Vuex)

//创建并暴露store
const vs = new Vuex.Store({
    modules: {
        sumOption,
        personOption
    }
})
// console.log(vs);
export default vs