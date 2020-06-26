<template>
  <div class="child-wrap">
    <div>子</div>
    <div>{{ messages.join(", ") }}</div>
    <button @click="pushMessage">messagesに追加</button>
    <button @click="changeMessage">messagesに変更</button>
    <button @click="changeMessageByEmit">messagesをemit経由で変更</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class FourthChild extends Vue {
  @Prop() messages!: string[];

  // 怒られる
  public changeMessage(): void {
    this.messages = ["書き換え"];
  }
  // 怒られないけど変更が検知されない
  public changeMessageByEmit(): void {
    this.messages[0] = "書き換え";
  }
  // メソッド経由なら怒られないし変更も検知される
  public pushMessage(): void {
    this.messages.push("追加");
  }
}
</script>

<style scoped>
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
