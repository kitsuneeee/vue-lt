<template>
  <div class="child-wrap">
    <div>子</div>
    <div>{{ value }}</div>
    <button @click="changeMessage">messageをsetter経由で書き換える</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ThirdChild extends Vue {
  // valueで受け取る
  @Prop() value!: string;

  // 内部ではinternalValueを利用する
  get internalValue(): string {
    return this.value;
  }
  set internalValue(val: string) {
    // inputイベントでemitする
    this.$emit("input", val);
  }
  public changeMessage(): void {
    this.internalValue = "子からのsetter経由のemitでの書き換え";
  }
}
</script>

<style scoped>
.child-wrap {
  margin: 12px;
  padding: 24px;
  border: solid 1px black;
}
</style>
