//该文件用于创建Vuex中最为核心的store

//引入Vuex
import Vuex from 'vuex'
import Vue from 'vue'
//引入生成随机id库
import {
    nanoid
} from 'nanoid'
Vue.use(Vuex)
//准备actions--用于响应组件中的动作
const actions = {
    jiaOdd(context, value) {
        if (context.state.sum % 2)
            context.commit('JIA', value)
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit('JIA', value)
        }, 1000)
    },
    addPerson(context, info) {
        const personObj = {
            id: nanoid(),
            name: info.split(' ')[0],
            age: info.split(' ')[1]
        }
        context.commit('Add_PERSON', personObj)
    }
}
//准备mutations--用于操作数据(state)
const mutations = {
    JIA(state, value) {
        // console.log('mutations中的Jia被调用了',state,value);
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    },
    Add_PERSON(state, value) {
        state.personList.push(value)
    }
}
//准备state--用于存储数据
const state = {
    //当前的和
    sum: 0,
    school: '新疆工程学院',
    subject: '数据科学与大数据技术',
    personList: [{
            id: 2000,
            name: '张三',
            age: 21
        },
        {
            id: 2040,
            name: '李四',
            age: 25
        },
        {
            id: 2030,
            name: '王五',
            age: 23
        },
    ]
}
//准备getters--用于将state中的数据进行加工
const getters = {
    bigNum(state) {
        return state.sum * 10
    },
    personNum(state) {
        return state.personList.length
    }
}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})