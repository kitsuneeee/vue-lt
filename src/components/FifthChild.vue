<template>
  <div class="child-wrap">
    <div>子</div>
    <div>{{ message }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class FifthChild extends Vue {
  public message = "子どものメッセージ";

  public changeMessage(): void {
    this.message = "メソッド実行されました";
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
