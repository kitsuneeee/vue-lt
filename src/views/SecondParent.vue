<template>
  <div>
    <div class="bold">getter,setterを試してみた</div>
    <div class="parent-wrap">
      <div class="bold">親</div>
      <div>message = {{ message }}</div>
      <child :message="message" @onChangeMessage="changeMessage" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { default as Child } from "@/components/SecondChild.vue";

@Component({
  components: {
    Child
  }
})
export default class SecondParent extends Vue {
  public message = "親からのメッセージ";

  public changeMessage(val: string): void {
    // emitを受け取って書き換える
    this.message = val;
  }
}
</script>

<style scoped>
</style>
