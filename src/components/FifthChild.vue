<template>
  <div class="child-wrap">
    <div class="bold">子</div>
    <div>message = {{ message }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class FifthChild extends Vue {
  public message = "子のメッセージ";

  public changeMessage(): void {
    this.message = "子の変更メソッドで書き換え";
  }
}
</script>

<style scoped>
</style>
