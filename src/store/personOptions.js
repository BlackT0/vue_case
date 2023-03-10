//引入生成随机id库 nanoid
import {
    nanoid
} from 'nanoid'
export default {
    namespaced: true, //开启命名空间
    actions: {
        addPerson(context, info) {
            const personObj = {
                id: nanoid(),
                name: info.split(' ')[0],
                age: info.split(' ')[1]
            }
            context.commit('Add_PERSON', personObj)
        }
    },
    mutations: {
        Add_PERSON(state, value) {
            state.personList.push(value)
        },
        DEL_PERSON(state, value) {
            //错误演示,因为知识为了测试功能,其实过滤语法应该写在actions中,mutations中知识去修改state中的数据,不应该有处理数据的过程
            state.personList = state.personList.filter(tt => tt.name !== value)
        }
    },
    state: {
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
    },
    getters: {
        personNum(state) {
            return state.personList.length
        }
    }
}