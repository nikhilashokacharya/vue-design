<template>
  <div class="custom-fontDialog-outer">
    <label class="custom-label-ele">{{data.labelName}}</label>
    <div class="custom-div-ele">
      <FontDialog />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FontDialog from "../../table-design/FontDialog.vue";
@Component({
  components: { FontDialog },
})
export default class CustomFontDialog extends Vue {
  data = {
    labelName: "Font",
  };
}
</script>

<style scoped>
.custom-fontDialog-outer {
  position: relative;
  width: 220px;
  display: grid;
  grid-template-columns: 100px 1fr;
}
.custom-label-ele {
  outline: none;
  border: 0.1px solid lightgray;
  font-size: 12px;
  position: inherit;
}
.custom-div-ele {
  border: 0.1px solid lightgray;
  outline: none;
  font-size: 12px;
  width: calc(100% - 30px);
}
</style>