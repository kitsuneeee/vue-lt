<template>
  <div class="parent-wrap">
    <div>親</div>
    <child :messages="messages" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { default as Child } from "@/components/FourthChild.vue";

@Component({
  components: {
    Child
  }
})
export default class FourthParent extends Vue {
  public messages: string[] = ["test1", "test2", "test3"];
}
</script>

<style scoped>
.parent-wrap {
  padding: 24px;
  border: solid 1px black;
}
</style>
