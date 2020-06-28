<template>
  <div class="child-wrap">
    <div class="bold">子</div>
    <div>internalMessage = {{ internalMessage }}</div>
    <button @click="changeMessage">messageをsetter経由のemitで書き換える</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class SecondChild extends Vue {
  @Prop() message!: string;

  // 内部ではinternalMessageを利用する
  get internalMessage(): string {
    // 親からのmessageを参照
    return this.message;
  }
  set internalMessage(val: string) {
    // 値が書き換わった場合はemitで親のmessageを書き換える
    this.$emit("onChangeMessage", val);
  }
  public changeMessage(): void {
    this.internalMessage = "子からのemitで書き換え";
  }
}
</script>

<style scoped>
</style>
