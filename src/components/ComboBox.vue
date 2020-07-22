<template>
  <div class="combodiv">
    <input class="comboinput" />
    <select class="select">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
  </div>
</template>

<script>
export default {};
</script>

<style>
.combodiv {
  border: 0.1px solid gray;
  width: 184px;
  box-shadow: -1.5px -1.5px gray;
}
.comboinput {
  border: none;
}
.select {
  width: 18px;
  background-color: rgb(238, 238, 238);
}
</style>