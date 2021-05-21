<template>
  <router-view />
</template>

<script lang='ts'>
import HelloWorld from './components/HelloWorld.vue';
import { defineComponent, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
export default defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    console.log(useRouter());
  },
});
</script>

<style>
</style>