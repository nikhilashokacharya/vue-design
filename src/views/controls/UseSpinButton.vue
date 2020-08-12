<template>
  <div class="spin" :style="spinStyle" @click="handleClick">
    <button class="button-element-top"></button>
    <button class="button-element-bottom"></button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class UseSpinButton extends Vue {
  spinStyle={width: '30px',
  height: '60px',
  transform:'rotate(0deg)'}
  handleClick(){
    this.spinStyle.width='61px';
    if(this.spinStyle.width>this.spinStyle.height){

      this.spinStyle.transform='rotate(90deg)';
    }
  }
}
</script>

<style scoped>
.spin {
  display: grid;
  grid-template-columns: 1fr;
  /* width: 30px;
  height: 60px; */
}
.button-element-top {
  background-image: url("../../assets/controls pictures/triangle-up-img.png");
  background-size: 40%;
  background-position: center;
  background-repeat: no-repeat;
  border-color: lightgrey;
}

.button-element-bottom {
  background-image: url("../../assets/controls pictures/triangle-down-img.png");
  background-size: 40%;
  background-position: center;
  background-repeat: no-repeat;
  border-color: lightgrey;
}
</style>