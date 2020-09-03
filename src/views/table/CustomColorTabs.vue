<template>
  <div class="custom-colortabs-outer">
      <label class="custom-label-ele">{{data.labelName}}</label>
       <div class="custom-div-ele"><ColorPallate /></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ColorPallate from "../../table-design/ColorPallate.vue"
@Component({
  components: {ColorPallate},
})
export default class CustomColorTabs extends Vue {
  @Prop() name: any;
    data = {
        labelName:this.name
    }
}
</script>

<style scoped>
.custom-colortabs-outer{
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
  width: calc(100% - 26px);
}
</style>