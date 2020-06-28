<template>
  <div>
    <div class="bold">v-modelを試してみた</div>
    <div class="parent-wrap">
      <div class="bold">親</div>
      <div>message = {{ message }}</div>
      <!-- 変更イベントを書く必要もない -->
      <child v-model="message" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { default as Child } from "@/components/ThirdChild.vue";

@Component({
  components: {
    Child
  }
})
export default class ThirdParent extends Vue {
  public message = "親からのメッセージ";
}
</script>

<style scoped>
</style>
