<template>
  <div class="select-editable" style="width: 150px;
    height: 17px;">
    <select></select>
    <input type="text" name="format" value />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.select-editable {
  position: relative;
  background-color: white;
}

.select-editable select {
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 14px;
  border: none;
  width: 100%;
  height: 100%;
  margin: 0;
  appearance: none;
}

.select-editable input {
  position: absolute;
  top: 0px;
  left: 0px;
  width: calc(100% - 14px);
  height: calc(100% - 2px);
  padding: 1px;
  font-size: 12px;
  border: none;
}

.select-editable select:focus,
.select-editable input:focus {
  outline: none;
}

.select-editable:before {
    content: "";
    position: absolute;
    /* top: 1px; */
    right: 0px;
    width: 15px;
    height: -webkit-fill-available;
    float: right;
    border: 1px solid lightgrey;
    border-right-color: gray;
    border-bottom-color: gray;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50" border="1px solid red"><polygon points="0,0 100,0 50,50" style="fill:%23666666;stroke-width:3;stroke:rgb(0,0,250)" /></svg>');
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
  pointer-events: none;
  z-index: 1;
}
</style>