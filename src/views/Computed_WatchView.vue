<template>
  <div>
    <h1>Forward direction : {{ message }}</h1>
    <hr />
    <h1>Reverse direction : {{ reverseMessage }}</h1>
    <p>{{ date }}</p>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      message: '안녕하세요',
      date: Date.now(),
    };
  },
  computed: {
    reverseMessage: function () {
      return this.message.split('').reverse().join('');
    },
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    // reverseMessage: function () {
    //   return this.message.split('').reverse().join('');
    // },
  },
};
</script>
