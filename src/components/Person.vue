<template>
    <div>
        <h1>人员名单</h1>
        <ul>
            <!-- 第一种方法:通过'$store.state.personList'取值 -->
            <!-- <li v-for="v in $store.state.personList" :key="v.id">
                姓名:{{ v.name }}--年龄:{{ v.age }}
            </li> -->
            <!-- 第二种方法:通过'mapState()'防范取值 -->
            <li v-for="v in personList" :key="v.id">
                姓名:{{ v.name }}--年龄:{{ v.age }}
            </li>
        </ul>
        <br>
        <h1>sum的数值的10倍:{{ bigNum }}</h1>
        <input type="text" v-model="info" placeholder="请输入格式为:name age的形式" @keyup.enter="addPerson">
        <br>
        输入名字: <input type="text" v-model="delInfo" placeholder="请输入要删除人的姓名" @keyup.enter="delPerson" />
    </div>
</template>
<script>
export default {
    name: 'Person',
    data() {
        return {
            info: '',
            delInfo: ''
        }
    },
    computed: {
        personList() {
            return this.$store.state.personOption.personList
        },
        bigNum() {
            return this.$store.getters['sumOption/bigNum']
        }
        // ...mapState(['personList', 'sum'])
    },
    methods: {
        addPerson() {
            this.$store.dispatch('personOption/addPerson', this.info)
            this.info = ''
        },
        delPerson() {
            this.$store.commit('personOption/DEL_PERSON', this.delInfo)
            this.delInfo = ''
        }
    }
}
</script>

