<template>
  <div>
    <div class="bold">Prop,emitを試してみた</div>
    <div class="parent-wrap">
      <div class="bold">親</div>
      <div>message = {{ message }}</div>
      <!-- 変数を展開させたいならコロン付き -->
      <child
        :message="message"
        message2="親からのリテラルメッセージ"
        @onChangeMessage="changeMessage"
      />
    </div>
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
  public message = "親からの変数メッセージ";

  public changeMessage(val: string): void {
    // emitを受け取って書き換える
    this.message = val;
  }
}
</script>

<style scoped>
</style>
