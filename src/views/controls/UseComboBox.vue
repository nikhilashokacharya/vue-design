<template>
  <div class="select-editable">
        <select>
        </select>
        <input type="text" name="format" value="" />
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.select-editable {
  position: relative;
  background-color: white;
  border: solid lightgray 0.1px;
  box-shadow: -1px -1px grey;
  width: 120px;
  height: 18px;
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
  width: 100px;
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
  right: 0;
  width: 20px;
  height: -webkit-fill-available;
  float: right;
  border-left: 1px solid lightgray;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
  background: rgb(238, 238, 238);
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50" border="1px solid red"><polygon points="0,0 100,0 50,50" style="fill:%23666666;stroke-width:3;stroke:rgb(0,0,250)" /></svg>');
  background-size: 40%;
  background-position: center;
  background-repeat: no-repeat;
  pointer-events: none;
  z-index: 1;
}
</style>