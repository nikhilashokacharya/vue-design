<template>
  <div class="custom-input-outer">
    <label class="custom-label-ele">{{data.labelName}}</label>
    <input class="custom-input-ele" :value="data.inputValue" :type="data.inputType"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  components: {},
})
export default class CustomInput extends Vue {
  @Prop() name: any;
  @Prop() info: any;
  @Prop() inputType: any;
  data = {
    labelName: this.name,
    inputValue: this.info,
    inputType: this.inputType
  };
}
</script>

<style scoped>
.custom-input-outer {
  /* border: 1px solid lightgray; */
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
.custom-input-ele {
  border: 0.1px solid lightgray;
  outline: none;
  font-size: 12px;
}
</style>