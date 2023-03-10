<template>
  <div id="app">
    <test></test>
    <person></person>
  </div>
</template>

<script>
import Person from './components/Person.vue'
import Test from './components/Test.vue'

export default {
  name: 'App',
  components: { Test, Person },
  data() {
    return {
    }
  }
}
</script>

<style></style>
