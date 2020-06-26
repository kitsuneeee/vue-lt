<template>
  <div class="parent-wrap">
    <div>親</div>
    <!-- 変更イベントを書く必要もない -->
    <child v-model="message" />
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
.parent-wrap {
  padding: 24px;
  border: solid 1px black;
}
</style>
