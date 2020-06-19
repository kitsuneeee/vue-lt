<template>
  <div class="parent-wrap">
    <div>親</div>
    <first-child :message="message" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FirstChild from "@/components/FirstChild.vue";

@Component({
  components: {
    FirstChild
  }
})
export default class FirstParent extends Vue {
  public message = "親からのメッセージ";
}
</script>

<style scoped>
.parent-wrap {
  padding: 24px;
  border: solid 1px black;
}
</style>
