<template>
  <div class="outer-check">
    <label class="control">
      <input type="checkbox" @change="handleChange" class="control-input visually-hidden" />
      <span class="control-indicator"></span>
      <span style="font-size: 12px;">CheckBox1</span>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class UseCheckBox extends Vue {
  handleChange(e: any){
    console.log(e.target.checked);
  }
}
</script>

<style scoped>
.outer-check {
  position: relative;
  height: 30px;
  width: 150px;
  background-color: rgb(238, 238, 238);
  box-shadow: -1px -1px gray;
  overflow: hidden;
}
.visually-hidden {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
.control {
  position: absolute;
  top: 20%;
  left: 10px;
  display: inline-flex;
  align-items: center;
}
.control-indicator {
  width: 14px;
  height: 14px;
  margin: 1px;
  margin-right: 6px;
  background-color: white;
  /* border: 1px solid lightgray; */
  border: white;
  box-shadow: -1px -1px grey;
  /* background-image: url('./checkmark.png'); */
}
.control-input:checked ~ .control-indicator {
  /* background-color: rgb(107, 158, 253); */
  background-image: url("../../assets/controls pictures/checkmark.png");
  background-size: 10px;
  background-position: center;
  background-repeat: no-repeat;
}
</style>