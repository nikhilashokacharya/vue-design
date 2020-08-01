<template>
<div>
    <div class="box">
      <a  href="#popup1">Tab Order</a>
    </div>
    <div id="popup1" class="overlay">
  <div class="outer-taborder-div popup">
      <a class="close" href="#">&times;</a>
    <div class="taborder-header-div">
      Tab Order
      <!-- <button style="float:right">X</button> -->
      
    </div>
    <hr style="margin: 1px;" />
    <div class="wrapper">
      <div class="wrapper1">
         <span style="font-family:'Candara'"> Tab Order:</span>
        <iframe class="frame"></iframe>
      </div>
      <div class="wrapper2">
          <div></div>
          <input type="Button" value="OK" class="taborder-buttons">
          <input type="Button" value="Cancel" class="taborder-buttons">
          <div></div>
          <input type="Button" value="Move Up" class="taborder-buttons">
          <input type="Button" value="Move Down" class="taborder-buttons">
          <div></div>
      </div>
    </div>
  </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 60% 40%;
  padding-left: 10px;
  padding-top: 10px;
  /* grid-gap: 1em; */
  grid-row-gap: 1em;
  grid-column-gap: 2em;
  margin-bottom: 2em;
}
.wrapper1{
    grid-gap: 1em;
    
}
.wrapper2{
    display: grid;
    grid-template-columns:1fr;
    grid-gap: 1em;
    grid-column-gap: 3em;
}
.frame{
    width: 200px;
    height: 150px;
    background-color: white;
}
.taborder-header-div {
  height: 20px;
  background-color: white;
  font-size: 13px;
  /* postion: absolute; */
  padding-left: 5px;
}
.outer-taborder-div{
    border: 1px solid black;
    height: 230px;
    width: 320px;
    background-color: rgb(238, 238, 238);;
}

.taborder-buttons{
    width:80px; 
    height: 20px;
    font-family: 'Candara';
    font-weight: lighter;
    font-size: 13px;
    box-shadow: 1px 1px; 
    border: 0.5px solid gray ;
}

/* PopUp */
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
}
.overlay:target {
  visibility: visible;
  opacity: 1;
}

.popup {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
  transition: all 5s ease-in-out;
}

.popup h2 {
  margin-top: 0;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
}
.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.popup .close:hover {
  color: #06D85F;
}
.popup .content {
  max-height: 30%;
  overflow: auto;
}

@media screen and (max-width: 700px){
  .box{
    width: 70%;
  }
  .popup{
    width: 70%;
  }
}
</style>