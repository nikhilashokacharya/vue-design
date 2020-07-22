<template>
  <div class="new">
    <form class="checkbox-form">
      <div class="form-group">
        <input class="checkbox-input" type="checkbox" id="html" />
        <label class="checkbox-label" for="html">CheckBox1</label>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style >
.form-group {
    background-color: rgb(238, 238, 238);
  padding-top: 5px;
  box-shadow: -1px -1px gray;
  width: 150px;
  height: 23px;
}
.checkbox-input {
    float: left;
    
}
.checkbox-label{
    float: left;
    font-size: 11px;
    padding-top: 5px;
    /* font-weight: 559; */
}
.checkbox-form{
    align-content: center;
}
</style>