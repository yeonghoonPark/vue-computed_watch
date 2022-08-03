<template>
  <div>
    <h1>{{ count }}</h1>
    <br />
    <p>{{ text }}</p>
    <button @click="count++">Increase count</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      count: 0,
      text: 'Before the change',
    };
  },
  watch: {
    count(newValue, oldValue) {
      this.text = oldValue + '에서' + newValue + '(으)로 변경';
    },
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
