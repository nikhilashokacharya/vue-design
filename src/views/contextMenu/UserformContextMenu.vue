<template>
  <div>
      <div class="outerdiv">
          <div><span class="set">Select <u>A</u>ll</span></div>
          <div><i style='font-size:15px' class='fa'>&#xf0ea;</i><span class="iset"><u>P</u>aste</span></div>
          <div><span class="set"><u>D</u>elete</span></div>
          <hr>
          <div><i style='font-size:15px' class='fa'>&#xf187;</i><span class="iset">Prope<u>r</u>ties</span></div>
          <div><span class="set">View C<u>o</u>de</span></div>
          <div><span class="set">T<u>a</u>b Order</span></div>

      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.outerdiv{
    border: 0.5px solid black;
    box-shadow: 1px 1px;
    width: 140px;
    height: auto;
    font-size: 13px;
}
.outerdiv > div {
  margin-top: 3px;
  margin-bottom: 3px;
  margin-left: 5px;
}
.outerdiv > div:hover {
  background-color: rgb(146, 184, 255);
  /* border: 1px solid rgb(69, 155, 253); */
}
.iset{
  margin-left: 5px;
}
.set{
  margin-left: 20px;
}
</style>