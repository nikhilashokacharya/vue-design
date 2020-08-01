<template>
  <div>
    <div class="outer-toolbox-div">
      <div class="toolbox-header">
        <div>
          <span>ToolBox</span>
        </div>
        <div>
          <!-- <button>X</button> -->
          <span class="closeButton">
            <img
              class="close"
              @click="handleClose"
              src="https://img.icons8.com/fluent/48/000000/close-window.png"
            />
          </span>
        </div>
      </div>
      <div class="toolbox-body">
        <div>
          <Button class="toolbox-tab">Controls</Button>
        </div>
        <div class="toolbox-icons">
          <div class="container">
            <img
              src="../../assets/toolbox icons/SelectIcon.png"
              alt="SelectIcon"
              class="image toolbox-icon"
              
            />
            <div class="overlay">
              <div class="text"></div>
            </div>
          </div>
          <div class="container">
            <img src="../../assets/toolbox icons/Label.png" alt="Label" class="image toolbox-icon" />
            <div class="overlay">
              <div class="text"></div>
            </div>
          </div>
          <div class="container">
            <img
              src="../../assets/toolbox icons/TextBox.png"
              alt="TextBox"
              class="image toolbox-icon"
            />
            <div class="overlay">
              <div class="text"></div>
            </div>
          </div>
          <div class="container">
            <img
              src="../../assets/toolbox icons/ComboBox.png"
              alt="ComboBox"
              class="image toolbox-icon"
            />
            <div class="overlay">
              <div class="text"></div>
            </div>
          </div>
          <div class="container">
            <img
              src="../../assets/toolbox icons/ListBox.png"
              alt="ListBox"
              class="image toolbox-icon"
            />
            <div class="overlay">
              <div class="text"></div>
            </div>
          </div>
          <div class="container">
            <img
              src="../../assets/toolbox icons/CheckBox.png"
              alt="CheckBox"
              class="image toolbox-icon"
            />
            <div class="overlay">
              <div class="text"></div>
            </div>
          </div>
          <div class="container">
            <img
              src="../../assets/toolbox icons/OptionButton.png"
              alt="OptionButton"
              class="image toolbox-icon"
            />
            <div class="overlay">
              <div class="text"></div>
            </div>
          </div>
          <div class="container">
            <img
              src="../../assets/toolbox icons/ToggleButton.png"
              alt="ToggleButton"
              class="image toolbox-icon"
            />
            <div class="overlay">
              <div class="text"></div>
            </div>
          </div>
          <div class="container">
            <img src="../../assets/toolbox icons/Frame.png" alt="Frame" class="image toolbox-icon" />
            <div class="overlay">
              <div class="text"></div>
            </div>
          </div>
          <div class="container">
            <img
              src="../../assets/toolbox icons/CommandButton.png"
              alt="CommandButton"
              class="image toolbox-icon"
            />
            <div class="overlay">
              <div class="text"></div>
            </div>
          </div>
          <div class="container">
            <img
              src="../../assets/toolbox icons/TabStrip.png"
              alt="TabStrip"
              class="image toolbox-icon"
            />
            <div class="overlay">
              <div class="text"></div>
            </div>
          </div>
          <div class="container">
            <img
              src="../../assets/toolbox icons/MultiPage.png"
              alt="MultiPage"
              class="image toolbox-icon"
            />
            <div class="overlay">
              <div class="text"></div>
            </div>
          </div>
          <div class="container">
            <img
              src="../../assets/toolbox icons/ScrollBar.png"
              alt="ScrollBar"
              class="image toolbox-icon"
            />
            <div class="overlay">
              <div class="text"></div>
            </div>
          </div>
          <div class="container">
            <img
              src="../../assets/toolbox icons/SpinButton.png"
              alt="SpinButton"
              class="image toolbox-icon"
            />
            <div class="overlay">
              <div class="text"></div>
            </div>
          </div>
          <div class="container">
            <img
              src="../../assets/toolbox icons/Picture.png"
              alt="Picture"
              class="image toolbox-icon"
            />
            <div class="overlay">
              <div class="text"></div>
            </div>
          </div>
          <div class="container">
            <img
              src="../../assets/toolbox icons/RefEdit.png"
              alt="RefEdit"
              class="image toolbox-icon"
            />
            <div class="overlay">
              <div class="text"></div>
            </div>
          </div>
          <!-- <img
            src="../../assets/toolbox icons/SelectIcon.png"
            alt="SelectIcon"
            class="toolbox-icon"
          />
          <img src="../../assets/toolbox icons/Label.png" alt="Label" class="toolbox-icon" />
          <img src="../../assets/toolbox icons/TextBox.png" alt="TextBox" class="toolbox-icon" />
          <img src="../../assets/toolbox icons/ComboBox.png" alt="ComboBox" class="toolbox-icon" />
          <img src="../../assets/toolbox icons/ListBox.png" alt="ListBox" class="toolbox-icon" />
          <img src="../../assets/toolbox icons/CheckBox.png" alt="CheckBox" class="toolbox-icon" />
          <img
            src="../../assets/toolbox icons/OptionButton.png"
            alt="OptionButton"
            class="toolbox-icon"
          />
          <img
            src="../../assets/toolbox icons/ToggleButton.png"
            alt="ToggleButton"
            class="toolbox-icon"
          />
          <img src="../../assets/toolbox icons/Frame.png" alt="Frame" class="toolbox-icon" />
          <img
            src="../../assets/toolbox icons/CommandButton.png"
            alt="CommandButton"
            class="toolbox-icon"
          />
          <img src="../../assets/toolbox icons/TabStrip.png" alt="TabStrip" class="toolbox-icon" />
          <img src="../../assets/toolbox icons/MultiPage.png" alt="MultiPage" class="toolbox-icon" />
          <img src="../../assets/toolbox icons/ScrollBar.png" alt="ScrollBar" class="toolbox-icon" />
          <img
            src="../../assets/toolbox icons/SpinButton.png"
            alt="SpinButton"
            class="toolbox-icon"
          />
          <img src="../../assets/toolbox icons/Picture.png" alt="Picture" class="toolbox-icon" />
          <img src="../../assets/toolbox icons/RefEdit.png" alt="RefEdit" class="toolbox-icon" />-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        // clicked(){

        // }
    }
};
</script>

<style scoped>
.outer-toolbox-div {
  border: 0.1px solid gray;
  background-color: rgb(238, 238, 238);
  min-height: 130px;
  box-shadow: 2px 2px lightgrey;
  height: fit-content;
  min-width: 220px;
  width: fit-content;
}
.toolbox-header {
  display: grid;
  grid-template-columns: 90% 10%;
  height: 26px;
  width: 100%;
  background-color: white;
}
.toolbox-body {
  display: grid;
  grid-template-columns: 1fr;
  background-color: rgb(238, 238, 238);
}
.toolbox-tab {
  padding-bottom: 4px;
  border-color: gray;
  box-shadow: 1px 0px grey;
  border-bottom-width: 0px;
  border-top-color: white;
  border-left-color: white;
  /* width: 1px; */
  border-top-width: 0.3px;
  border-left-width: 0.3px;
  border-right-width: 0.1px;
  margin-left: 5px;
  margin-top: 6px;
}
.toolbox-icons {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  margin: 4px;
  margin-top: 0px;
  border-top: 1px solid white;
  border-left: 1px solid white;
  box-shadow: 1px 1px grey;
  height: 70px;
}
.toolbox-icon {
  width: 24px;
  height: 24px;
}
img.toolbox-icon:hover {
  color: rgb(0, 153, 255);
  /* border: 1px solid blue; */
}
.container {
  position: relative;
  width: 24px;
}

.image {
  display: block;
  width: 24px;
  height: 24px;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 24px;
  width: 24px;
  opacity: 0;
  transition: 0.5s ease;
  background-color: rgb(8, 130, 211);
}
.overlay:focus{
   background-color: rgb(8, 130, 211); 
}

.container:hover .overlay {
  opacity: 0.5;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.close {
  height: 26px;
}
.closeButton {
  position: relative;
  right: 10px;
  cursor: pointer;
}
</style>