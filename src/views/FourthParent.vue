<template>
  <div>
    <div class="bold">配列の書き換えを試してみた</div>
    <div class="parent-wrap">
      <div class="bold">親</div>
      <div class="data-wrap">
        <div>messages = [{{ messages.join(", ") }}]</div>
        <button @click="changeMessages">messagesに直接値を代入</button>
        <button @click="changeMessagesContent">messagesの中身を直接書き換え</button>
        <button @click="pushMessage">messagesにpushメソッドで追加</button>
        <button @click="spliceMessage">messagesをspliceメソッドで削除</button>
      </div>
      <child :messages="messages" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { default as Child } from "@/components/FourthChild.vue";

/**
 * 配列,オブジェクトの書き換え
 */
@Component({
  components: {
    Child
  }
})
export default class FourthParent extends Vue {
  public messages: string[] = ["test1", "test2", "test3"];

  // 配列の参照置き換えもOK
  public changeMessages(): void {
    this.messages = ["書き換え"];
  }
  // 変更が検知されない
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
