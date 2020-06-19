<template>
  <div class="parent-wrap">
    <div>親</div>
    <second-child :message="message" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SecondChild from "@/components/SecondChild.vue";

@Component({
  components: {
    SecondChild
  }
})
export default class SecondParent extends Vue {
  public message = "親からのメッセージ";
}
</script>

<style scoped>
.parent-wrap {
  padding: 24px;
  border: solid 1px black;
}
</style>
