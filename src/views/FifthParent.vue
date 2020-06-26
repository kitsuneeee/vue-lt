<template>
  <div class="parent-wrap">
    <div>親</div>
    <div>{{ childMessage }}</div>
    <button @click="changeMessage">子どもの変更書き換え</button>
    <button @click="changeMessage2">子どものメソッド実行</button>
    <child ref="child" />
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
      this.$refs.child.message = "書き換え";
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
.parent-wrap {
  padding: 24px;
  border: solid 1px black;
}
</style>
