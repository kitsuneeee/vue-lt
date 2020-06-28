<template>
  <div class="child-wrap">
    <div class="bold">子</div>
    <div>messages = [{{ messages.join(", ") }}]</div>
    <button @click="changeMessages">messagesに直接値を代入</button>
    <button @click="changeMessagesContent">messagesの中身を直接書き換え</button>
    <button @click="pushMessage">messagesにpushメソッドで追加</button>
    <button @click="spliceMessage">messagesをspliceメソッドで削除</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class FourthChild extends Vue {
  @Prop() messages!: string[];

  // 配列の参照置き換えは怒られる
  public changeMessages(): void {
    this.messages = ["書き換え"];
  }
  // 怒られないけど変更が検知されない
  public changeMessagesContent(): void {
    this.messages[0] = "書き換え";
  }
  // メソッド経由なら怒られないし変更も検知される
  public pushMessage(): void {
    this.messages.push("要素追加");
  }
  // メソッド経由なら怒られないし変更も検知される
  public spliceMessage(): void {
    this.messages.splice(this.messages.length - 1, 1);
  }
}
</script>

<style scoped>
</style>
