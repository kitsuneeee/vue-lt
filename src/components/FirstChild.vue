<template>
  <div class="child-wrap">
    <div>子</div>
    <div>{{ message }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class FirstChild extends Vue {
  @Prop() message!: string;
}
</script>

<style scoped>
.child-wrap {
  margin: 12px;
  padding: 24px;
  border: solid 1px black;
}
</style>
