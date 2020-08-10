<template>
  <div class="spin">
    <button class="button-element-top"></button>
    <button class="button-element-bottom"></button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.spin {
  display: grid;
  grid-template-columns: 1fr;
  width: 30px;
  height: 60px;
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