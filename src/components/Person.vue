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
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'Person',
    computed: {
        ...mapState(['personList'])
    }
}
</script>

