<template>
  <div>
    <div class="bold">$refsを試してみた</div>
    <div class="parent-wrap">
      <div class="bold">親</div>
      <div class="data-wrap">
        <div>$refs.child.message = {{ childMessage }}（参照はできない）</div>
        <button @click="changeMessage">$refs.child.messageのmessageを直接書き換え</button>
        <button @click="changeMessage2">子どものmessage変更メソッド実行</button>
      </div>
      <child ref="child" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { default as Child } from "@/components/FifthChild.vue";

@Component({
  components: {
    Child
  }
})
export default class FifthParent extends Vue {
  public $refs!: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    child: any;
  };

  get childMessage(): string {
    if (this.$refs.child) {
      // リアクティブじゃないからテンプレートでは利用すべきでない
      return this.$refs.child.message;
    }
    return "";
  }

  public changeMessage(): void {
    if (this.$refs.child) {
      this.$refs.child.message = "親が直接書き換え";
    }
  }
  public changeMessage2(): void {
    if (this.$refs.child) {
      this.$refs.child.changeMessage();
    }
  }
}
</script>

<style scoped>
</style>
