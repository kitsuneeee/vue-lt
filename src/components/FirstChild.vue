<template>
  <div class="child-wrap">
    <div>子</div>
    <div>{{ message }}</div>
    <div>{{ message2 }}</div>
    <button @click="changeMessage">messageを直で書き換える</button>
    <button @click="changeMessageByEmit">messageをemitで書き換える</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class FirstChild extends Vue {
  @Prop() message!: string;
  @Prop() message2!: string;

  public changeMessage(): void {
    // 直接書き換えるのはNG
    this.message = "子で直接書き換え";
  }
  public changeMessageByEmit(): void {
    // emitで親に値を送って、親側で書き換えてもらう
    this.$emit("onChangeMessage", "子からのemitで書き換え");
  }
}
</script>

<style lang="scss" scoped>
.child-wrap {
  margin: 12px;
  padding: 24px;
  border: solid 1px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    display: block;
  }
}
</style>
