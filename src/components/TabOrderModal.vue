<template>
  <div>
    <div class="box">
      <a  href="#popup1">Tab Order</a>
    </div>

    <!-- <div id="popup1" class="overlay">
      <div class="popup">
        <h4>Tab Order</h4>
        <a class="close" href="#">&times;</a>
        <hr />Tab Order
        <div>
          <iframe />
          <button>Hello</button>
        </div>
      </div>
    </div> -->
<div id="popup1" class="overlay">
    <div class="font-div popup">
    <div class="font-header">
      Font
      <!-- <button style="float:right">X</button> -->
      <a class="close" href="#">&times;</a>
    </div>
    <hr style="margin:3px" />
    <div class="font-body">
      <div class="wrapper">
        <div class="wrapper-1">
          <div>
            Font:
            <br />
            <input type="text" class="font-input-1" />
            <br />
            <iframe class="font-first-frame" />
          </div>
          <div>
            <fieldset class="fieldset-1">
              <legend style="font-size:12px">References</legend>
            </fieldset>
          </div>
        </div>
        <div class="wrapper-2">
            <div>
          Font Style:
          <br />
          <input type="text" class="font-input-2" />
          <br />
          <iframe class="font-second-frame" />
            </div>
            <div class="wrapper-21">
                <fieldset>
                    <legend>
                        Hello
                    </legend>
                </fieldset>
            </div>
        </div>
        <div>
          Size:
          <br />
          <input type="text" class="font-input-3" />
          <br />
          <div class="font-third-frame">
              <div>8</div>
              <div>9</div>
              <div>10</div>
              <div>11</div>
              <div>12</div>
              <div>14</div>
              <div>16</div>
              <div>18</div>
              <div>20</div>
              <div>22</div>
              <div>24</div>
              <div>26</div>
              <div>36</div>
              <div>48</div>
              <div>72</div>
          </div>
        </div>
        <div class="nested">
          <!-- <div></div> -->
          <div></div>
          <button>OK</button>
          <button>Cancel</button>
          <div></div>
        </div>
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
body {
  font-family: Arial, sans-serif;
/*   background: url(http://www.shukatsu-note.com/wp-content/uploads/2014/12/computer-564136_1280.jpg) no-repeat; */
  background-size: cover;
  height: 100vh;
}

h1 {
  text-align: center;
  font-family: Tahoma, Arial, sans-serif;
  color: #06D85F;
  margin: 80px 0;
}

.box {
  width: 40%;
  margin: 0 auto;
  background: rgba(255,255,255,0.2);
  padding: 35px;
  border: 2px solid #fff;
  border-radius: 20px/50px;
  background-clip: padding-box;
  text-align: center;
}

.button {
  font-size: 1em;
  padding: 10px;
  color: #fff;
  border: 2px solid #06D85F;
  border-radius: 20px/50px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-out;
}
.button:hover {
  background: #06D85F;
}

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

/* TEsting */
.wrapper1{
  margin-left: 0px;
}
.font-div{
  width:460px;
}
</style>