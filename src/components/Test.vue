<template>
    <div>
        <h1>当前求和为:{{ sum }}</h1>
        <h1>放大10倍的值:{{ bigNum }}</h1>
        <h1>学校:{{ school }}, 学科:{{ subject }}</h1>
        <h1>person组件总人数为:{{ personNum }}</h1>
        <select name="baseNum" v-model="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
            <option :value="4">4</option>
            <option :value="5">5</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
        <br>
        <input type="text" v-model="info" placeholder="请输入格式为:name age的形式" @keyup.enter="addPerson">
    </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    name: 'Test',
    data() {
        return {
            n: 1,
            info: ''
        }
    },
    methods: {
        //程序员亲自写方法
        // add() {
        //     this.$store.commit('Jia', this.n)
        //     // console.log(this.$store);
        // },
        // reduce() {
        //     this.$store.commit('Jian', this.n)
        // },
        //借助mapMutations生成对应的方法,方法中会调用commit去联系mutations(对象写法)
        ...mapMutations({ increment: 'JIA', decrement: 'JIAN' }),
        //借助mapMutations生成对应的方法,方法中会调用commit去联系mutations(数组写法)
        // ...mapMutations(['Jia', 'Jian']),

        /*-------------------------------------------- */
        //程序员亲自写方法
        // incrementOdd() {
        //     this.$store.dispatch('jiaOdd', this.n)
        // },
        // incrementWait() {
        //     this.$store.dispatch('jiaWait', this.n)
        // },
        addPerson() {
            this.$store.dispatch('addPerson', this.info)
            this.info = ''

        },
        ...mapActions({ incrementOdd: 'jiaOdd', incrementWait: 'jiaWait' }),

        // ...mapActions(['jiaOdd', 'jiaWait'])
    },
    computed: {
        //借助mapState生成计算属性,从state中读取数据(对象写法)
        // ...mapState({ sum: 'sum', school: 'school', subject: 'subject' }),

        //借助mapState生成计算属性,从state中读取数据(数组写法) 推荐!!!
        ...mapState(['sum', 'school', 'subject', 'personList']),

        //借助mapGetters生成计算属性, 从getters中读取数据.(对象写法)
        // ...mapGetters({ bigNum: 'bigNum' }),

        //借助mapGetters生成计算属性, 从getters中读取数据.(数组写法)  推荐!!!
        ...mapGetters(['bigNum', 'personNum'])
    }
}
</script>
<style lang='less' scoped></style>
