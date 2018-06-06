<template>
  <div>
    <input v-model.ltrim="msg"> <!-- VUE_BAD_DIRECTIVE_FORMAT alarm because 'ltrim' modifier is not supported for 'v-model' directive. -->
    <div v-if="shouldHi">Hi</div>
    <div v-else="shouldBye">Bye</div> <!-- VUE_BAD_DIRECTIVE_FORMAT alarm because value is not needed for 'v-else' directive. -->
  </div>
</template>
<script>
  export default {
    data() {
      return { msg: 'hello world' };
    },
    props: {
      shouldHi: {
        type: Boolean,
        default: true
      },
      shouldBye: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
