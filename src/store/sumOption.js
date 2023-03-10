export default {
    namespaced: true, //开启命名空间
    actions: {
        jiaOdd(context, value) {
            if (context.state.sum % 2)
                context.commit('JIA', value)
        },
        jiaWait(context, value) {
            setTimeout(() => {
                context.commit('JIA', value)
            }, 1000)
        },
    },
    mutations: {
        JIA(state, value) {
            // console.log('mutations中的Jia被调用了',state,value);
            state.sum += value
        },
        JIAN(state, value) {
            state.sum -= value
        },
    },
    state: {
        sum: 0,
        school: '新疆工程学院',
        subject: '数据科学与大数据技术',
    },
    getters: {
        bigNum(state) {
            return state.sum * 10
        },
    }
}