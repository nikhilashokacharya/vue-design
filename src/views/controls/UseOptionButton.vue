<template>
  <div class="outer-option">
    <label class="control">
      <input type="radio" class="control-input visually-hidden" />
      <span class="control-indicator"></span>
      <span style="font-size:13px">OptionButton</span>
    </label>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.outer-option {
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
  display: inline-flex;
  align-items: center;
  position: absolute;
  top: 20%;
  left: 10px;
}
.control-indicator {
  width: 10px;
  height: 10px;
  /* margin: 1px; */
  margin-right: 6px;
  /* border: 1px solid black; */
  box-shadow: -1px -1px grey;
  border-radius: 14px;
  background-color: white;
  /* background-image: url('./checkmark.png'); */
}
/* .control-input:hover ~ .control-indicator {
        background-color: rgb(184, 209, 255);
    } */
.control-input:checked ~ .control-indicator {
  /* background-color: rgb(107, 158, 253); */
  background-image: url("../../assets/controls pictures/optionmark-img.png");
  background-size: 5px;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
}
</style>