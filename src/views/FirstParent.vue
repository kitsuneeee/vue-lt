<template>
  <div class="parent-wrap">
    <div>親</div>
    <!-- 変数を展開させたいならコロン付き -->
    <child
      :message="message"
      message2="親からのメッセージ2"
      @onChangeMessage="changeMessage"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { default as Child } from "@/components/FirstChild.vue";

@Component({
  components: {
    Child
  }
})
export default class FirstParent extends Vue {
  public message = "親からのメッセージ";

  public changeMessage(val: string): void {
    // emitを受け取って書き換える
    this.message = val;
  }
}
</script>

<style scoped>
.parent-wrap {
  padding: 24px;
  border: solid 1px black;
}
</style>
