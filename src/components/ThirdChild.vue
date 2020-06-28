<template>
  <div class="child-wrap">
    <div class="bold">子</div>
    <div>value = {{ value }}</div>
    <button @click="changeMessage">valueをinputイベントのemitで書き換える</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ThirdChild extends Vue {
  // Propはvalueと言う名前で受け取る
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
    this.internalValue = "子からのinputイベントで書き換え";
  }
}
</script>

<style scoped>
</style>
