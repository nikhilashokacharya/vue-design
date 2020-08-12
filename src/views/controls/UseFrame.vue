<template>
  <fieldset class="fieldset">
    <legend>Frame1</legend>
    <!-- <div>Hello</div> -->
    <UseCheckbox />
  </fieldset>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import UseCheckbox from "./UseCheckBox.vue";

@Component({
  components: {
    UseCheckbox,
  },
})
export default class UseFrame extends Vue {}
</script>

<style scoped>
.fieldset {
  min-width: 0px;
  background-color: white;
  background-size: 9px 10px;
  background-image: radial-gradient(
    circle,
    rgb(0, 0, 0) 0.5px,
    rgba(0, 0, 0, 0) 0.2px
  );
  width: 250px;
  height: 200px;
  border: 1px solid gray;
  overflow: hidden;
}
</style>