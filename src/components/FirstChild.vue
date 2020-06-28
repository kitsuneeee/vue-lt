<template>
  <div class="child-wrap">
    <div class="bold">子</div>
    <div>message = {{ message }}</div>
    <div>message2 = {{ message2 }}</div>
    <div>message3 = {{ message3 }}</div>
    <div>message4 = {{ message4 }}</div>
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
  // 親からstring型が渡ってくるのでコンソールエラーがでる
  @Prop(Number) message3!: number;
  // 親からmessage4は渡されないのでdefaultメッセージが値となる
  @Prop({ default: 'defaultメッセージ4'}) message4!: number;


  public changeMessage(): void {
    // 直接書き換えるのはNG
    this.message = "子で直接書き換え";
  }
  public changeMessageByEmit(): void {
    // emitで親に値を送って、親側で書き換えてもらうのはOK
    this.$emit("onChangeMessage", "子からのemitで書き換え");
  }
}
</script>

<style scoped>
</style>
