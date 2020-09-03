<template>
  <div>
    <div class="buttonIn grid-design">
      <input type="text" id="enter" class="color-input" />
      <button
        id="clear"
        :style="{height: '17px',
    padding: '0px',
    paddingLeft: '1px',
    paddingRight: '1px',
    border: '1px solid white',
    borderRightColor: 'gray',
    borderBottomColor: 'gray',
    borderLeftColor: 'lightgray',
    borderTopColor: 'lightgray',
    outline: 'none',
    marginLeft: '-2px'}"
        @click="clicked"
      >
        <!-- <strong>_</strong> -->
        _
      </button>
    </div>
    <div class="grid-design1">
      <div></div>
      <div class="outer-border">
        <div
          class="tabs"
          style="margin: 0px 0px;float:right;margin-right:0px"
          v-if="clickedPallete"
        >
          <div class="tab">
            <input class="tabinput" type="radio" id="color-1" name="tab-color-1" checked />
            <label for="color-1">Palette</label>
            <div class="content">
              <div class="grid-container">
                <div
                  class="grid-item1"
                  @click="selectColor('rgb(255, 255, 255)')"
                  style="backgroundColor:rgb(255, 255, 255);"
                ></div>
                <div
                  class="grid-item2"
                  @click="selectColor('rgb(255, 188, 188)')"
                  style="backgroundColor: rgb(255, 188, 188);"
                ></div>
                <div
                  class="grid-item3"
                  @click="selectColor('rgb(255, 227, 174)')"
                  style="backgroundColor: rgb(255, 227, 174);"
                ></div>
                <div
                  class="grid-item4"
                  @click="selectColor('rgb(255, 255, 168)')"
                  style="backgroundColor:rgb(255, 255, 168);"
                ></div>
                <div
                  class="grid-item5"
                  @click="selectColor('rgb(181, 255, 181)')"
                  style="backgroundColor:rgb(181, 255, 181);"
                ></div>
                <div
                  class="grid-item6"
                  @click="selectColor('rgb(202, 242, 255)')"
                  style="backgroundColor:rgb(202, 242, 255);"
                ></div>
                <div
                  class="grid-item7"
                  @click="selectColor('rgb(184, 184, 255)')"
                  style="backgroundColor:rgb(184, 184, 255);"
                ></div>
                <div
                  class="grid-item8"
                  @click="selectColor('rgb(255, 200, 255)')"
                  style="backgroundColor:rgb(255, 200, 255);"
                ></div>
                <div
                  class="grid-item9"
                  @click="selectColor('rgb(211, 211, 211)')"
                  style="backgroundColor:rgb(211, 211, 211);"
                ></div>
                <div
                  class="grid-item10"
                  @click="selectColor('rgb(253, 165, 165)')"
                  style="backgroundColor:rgb(253, 165, 165);"
                ></div>
                <div
                  class="grid-item11"
                  @click="selectColor('rgb(255, 213, 134)')"
                  style="backgroundColor:rgb(255, 213, 134);"
                ></div>
                <div
                  class="grid-item12"
                  @click="selectColor('rgb(255, 255, 138)')"
                  style="backgroundColor:rgb(255, 255, 138);"
                ></div>
                <div
                  class="grid-item13"
                  @click="selectColor('rgb(134, 255, 134)')"
                  style="backgroundColor:rgb(134, 255, 134);"
                ></div>
                <div
                  class="grid-item14"
                  @click="selectColor('rgb(132, 224, 255)')"
                  style="backgroundColor:rgb(132, 224, 255);"
                ></div>
                <div
                  class="grid-item15"
                  @click="selectColor('rgb(133, 133, 255)')"
                  style="backgroundColor:rgb(133, 133, 255);"
                ></div>
                <div
                  class="grid-item16"
                  @click="selectColor('rgb(255, 130, 255)')"
                  style="backgroundColor:rgb(255, 130, 255);"
                ></div>
                <div
                  class="grid-item17"
                  @click="selectColor('rgb(175, 174, 174)')"
                  style="backgroundColor:rgb(175, 174, 174);"
                ></div>
                <div
                  class="grid-item18"
                  @click="selectColor('rgb(255, 116, 116)')"
                  style="backgroundColor:rgb(255, 116, 116);"
                ></div>
                <div
                  class="grid-item19"
                  @click="selectColor('rgb(255, 197, 89)')"
                  style="backgroundColor:rgb(255, 197, 89);"
                ></div>
                <div
                  class="grid-item20"
                  @click="selectColor('rgb(255, 255, 109)')"
                  style="backgroundColor:rgb(255, 255, 109);"
                ></div>
                <div
                  class="grid-item21"
                  @click="selectColor('rgb(77, 255, 77)')"
                  style="backgroundColor:rgb(77, 255, 77);"
                ></div>
                <div
                  class="grid-item22"
                  @click="selectColor('rgb(67, 208, 255)')"
                  style="backgroundColor:rgb(67, 208, 255);"
                ></div>
                <div
                  class="grid-item23"
                  @click="selectColor('rgb(102, 102, 255)')"
                  style="backgroundColor:rgb(102, 102, 255);"
                ></div>
                <div
                  class="grid-item24"
                  @click="selectColor('rgb(255, 71, 255)')"
                  style="backgroundColor:rgb(255, 71, 255);"
                ></div>
                <div
                  class="grid-item25"
                  @click="selectColor('rgb(129, 128, 128)')"
                  style="backgroundColor:rgb(129, 128, 128);"
                ></div>
                <div
                  class="grid-item26"
                  @click="selectColor('rgb(255, 74, 74)')"
                  style="backgroundColor:rgb(255, 74, 74);"
                ></div>
                <div
                  class="grid-item27"
                  @click="selectColor('rgb(255, 186, 58)')"
                  style="backgroundColor:rgb(255, 186, 58);"
                ></div>
                <div
                  class="grid-item28"
                  @click="selectColor('rgb(255, 255, 72)')"
                  style="backgroundColor:rgb(255, 255, 72);"
                ></div>
                <div
                  class="grid-item29"
                  @click="selectColor('rgb(0, 255, 0)')"
                  style="backgroundColor:rgb(0, 255, 0);"
                ></div>
                <div
                  class="grid-item30"
                  @click="selectColor('rgb(0, 191, 255)')"
                  style="backgroundColor:rgb(0, 191, 255);"
                ></div>
                <div
                  class="grid-item31"
                  @click="selectColor('rgb(58, 58, 255)')"
                  style="backgroundColor:rgb(58, 58, 255);"
                ></div>
                <div
                  class="grid-item32"
                  @click="selectColor('rgb(255, 7, 255)')"
                  style="backgroundColor:rgb(255, 7, 255);"
                ></div>
                <div
                  class="grid-item33"
                  @click="selectColor('rgb(65, 64, 64)')"
                  style="backgroundColor:rgb(65, 64, 64);"
                ></div>
                <div
                  class="grid-item34"
                  @click="selectColor('rgb(255, 41, 41)')"
                  style="backgroundColor:rgb(255, 41, 41);"
                ></div>
                <div
                  class="grid-item35"
                  @click="selectColor('rgb(255, 176, 29)')"
                  style="backgroundColor:rgb(255, 176, 29);"
                ></div>
                <div
                  class="grid-item36"
                  @click="selectColor('rgb(255, 255, 35)')"
                  style="backgroundColor:rgb(255, 255, 35);"
                ></div>
                <div
                  class="grid-item37"
                  @click="selectColor('rgb(58, 204, 58)')"
                  style="backgroundColor:rgb(58, 204, 58);"
                ></div>
                <div
                  class="grid-item38"
                  @click="selectColor('rgb(75, 147, 172)')"
                  style="backgroundColor:rgb(75, 147, 172);"
                ></div>
                <div
                  class="grid-item39"
                  @click="selectColor('rgb(48, 48, 202)')"
                  style="backgroundColor:rgb(48, 48, 202);"
                ></div>
                <div
                  class="grid-item40"
                  @click="selectColor('rgb(175, 62, 175)')"
                  style="backgroundColor:rgb(175, 62, 175);"
                ></div>
                <div
                  class="grid-item41"
                  @click="selectColor('rgb(26, 25, 25)')"
                  style="backgroundColor:rgb(26, 25, 25);"
                ></div>
                <div
                  class="grid-item42"
                  @click="selectColor('rgb(255, 0, 0);')"
                  style="backgroundColor:rgb(255, 0, 0);"
                ></div>
                <div
                  class="grid-item43"
                  @click="selectColor('rgb(255, 166, 0)')"
                  style="backgroundColor:rgb(255, 166, 0);"
                ></div>
                <div
                  class="grid-item44"
                  @click="selectColor('rgb(255, 255, 0)')"
                  style="backgroundColor:rgb(255, 255, 0);"
                ></div>
                <div
                  class="grid-item45"
                  @click="selectColor('rgb(43, 161, 43)')"
                  style="backgroundColor:rgb(43, 161, 43);"
                ></div>
                <div
                  class="grid-item46"
                  @click="selectColor('rgb(10, 94, 122)')"
                  style="backgroundColor:rgb(10, 94, 122);"
                ></div>
                <div
                  class="grid-item47"
                  @click="selectColor('rgb(31, 31, 109)')"
                  style="backgroundColor:rgb(31, 31, 109);"
                ></div>
                <div
                  class="grid-item48"
                  @click="selectColor('rgb(112, 41, 112);')"
                  style="backgroundColor:rgb(112, 41, 112);"
                ></div>
                <div
                  class="grid-item49"
                  @click="selectColor('rgb(255, 255, 255)')"
                  style="backgroundColor:rgb(255, 255, 255);"
                ></div>
                <div
                  class="grid-item50"
                  @click="selectColor('rgb(255, 255, 255)')"
                  style="backgroundColor:rgb(255, 255, 255);"
                ></div>
                <div
                  class="grid-item51"
                  @click="selectColor('rgb(255, 255, 255)')"
                  style="backgroundColor:rgb(255, 255, 255);"
                ></div>
                <div
                  class="grid-item52"
                  @click="selectColor('rgb(255, 255, 255)')"
                  style="backgroundColor:rgb(255, 255, 255);"
                ></div>
                <div
                  class="grid-item53"
                  @click="selectColor('rgb(255, 255, 255)')"
                  style="backgroundColor:rgb(255, 255, 255);"
                ></div>
                <div
                  class="grid-item54"
                  @click="selectColor('rgb(255, 255, 255)')"
                  style="backgroundColor:rgb(255, 255, 255);"
                ></div>
                <div
                  class="grid-item55"
                  @click="selectColor('rgb(255, 255, 255)')"
                  style="backgroundColor:rgb(255, 255, 255);"
                ></div>
                <div
                  class="grid-item56"
                  @click="selectColor('rgb(255, 255, 255)')"
                  style="backgroundColor:rgb(255, 255, 255);"
                ></div>
                <div
                  class="grid-item57"
                  @click="selectColor('rgb(255, 255, 255)')"
                  style="backgroundColor:rgb(255, 255, 255);"
                ></div>
                <div
                  class="grid-item58"
                  @click="selectColor('rgb(255, 255, 255)')"
                  style="backgroundColor:rgb(255, 255, 255);"
                ></div>
                <div
                  class="grid-item59"
                  @click="selectColor('rgb(255, 255, 255)')"
                  style="backgroundColor:rgb(255, 255, 255);"
                ></div>
                <div
                  class="grid-item60"
                  @click="selectColor('rgb(255, 255, 255)')"
                  style="backgroundColor:rgb(255, 255, 255);"
                ></div>
                <div
                  class="grid-item61"
                  @click="selectColor('rgb(255, 255, 255)')"
                  style="backgroundColor:rgb(255, 255, 255);"
                ></div>
                <div
                  class="grid-item62"
                  @click="selectColor('rgb(255, 255, 255)')"
                  style="backgroundColor:rgb(255, 255, 255);"
                ></div>
                <div
                  class="grid-item63"
                  @click="selectColor('rgb(255, 255, 255)')"
                  style="backgroundColor:rgb(255, 255, 255);"
                ></div>
                <div
                  class="grid-item64"
                  @click="selectColor('rgb(255, 255, 255)')"
                  style="backgroundColor:rgb(255, 255, 255);"
                ></div>
              </div>
            </div>
          </div>
          <div class="tab">
            <input class="tabinput" type="radio" id="color-2" name="tab-color-1" />
            <label for="color-2">System</label>

            <div class="content">
              <div class="gridcontainer">
                <div @click="selectColor('rgb(161, 161, 161)')">
                  <span class="griditem1" style="backgroundColor:rgb(161, 161, 161);"></span>Scroll Bars
                </div>
                <div @click="selectColor('rgb(0, 0, 0)')">
                  <span class="griditem2" style="backgroundColor:rgb(0, 0, 0);"></span>Desktop
                </div>
                <div @click="selectColor('rgba(126, 179, 204, 0.8)')">
                  <span class="griditem3" style="backgroundColor:rgba(126, 179, 204, 0.8);"></span>Active Title Bar
                </div>
                <div @click="selectColor('rgba(155, 201, 223, 0.8)')">
                  <span class="griditem4" style="backgroundColor:rgba(155, 201, 223, 0.8);"></span>Inactive Title Bar
                </div>
                <div @click="selectColor('rgba(236, 234, 234, 0.8)')">
                  <span class="griditem5" style="backgroundColor:rgba(236, 234, 234, 0.8);"></span>Menu Bar
                </div>
                <div @click="selectColor('rgba(255, 255, 255, 0.8)')">
                  <span class="griditem6" style="backgroundColor:rgba(255, 255, 255, 0.8);"></span>Window Background
                </div>
                <div @click="selectColor('rgba(128, 127, 127, 0.8)')">
                  <span class="griditem7" style="backgroundColor:rgba(128, 127, 127, 0.8);"></span>Window Frame
                </div>
                <div @click="selectColor('rgb(0, 0, 0)')">
                  <span class="griditem8" style="backgroundColor:rgb(0, 0, 0);"></span>Menu Text
                </div>
                <div @click="selectColor('rgb(0, 0, 0)')">
                  <span class="griditem9" style="backgroundColor:rgb(0, 0, 0);"></span>Window Text
                </div>
                <div @click="selectColor('rgb(0, 0, 0)')">
                  <span class="griditem10" style="rgb(0, 0, 0);"></span>Active Title Bar Text
                </div>
                <div @click="selectColor('rgba(173, 172, 172, 0.8)')">
                  <span class="griditem11" style="backgroundColor:rgba(173, 172, 172, 0.8);"></span>Active Border
                </div>
                <div @click="selectColor('rgba(255, 255, 255, 0.8)')">
                  <span class="griditem12" style="backgroundColor:rgba(255, 255, 255, 0.8);"></span>Inactive Border
                </div>
                <div @click="selectColor('rgba(161, 160, 160, 0.8)')">
                  <span class="griditem13" style="backgroundColor:rgba(161, 160, 160, 0.8);"></span>Application Workspace
                </div>
                <div @click="selectColor('rgba(50, 139, 255, 0.8)')">
                  <span class="griditem14" style="backgroundColor:rgba(50, 139, 255, 0.8);"></span>Highlight
                </div>
                <div @click="selectColor('rgba(255, 255, 255, 0.8)')">
                  <span class="griditem15" style="backgroundColor:rgba(255, 255, 255, 0.8);"></span>Highlight Text
                </div>
                <div @click="selectColor('rgba(235, 235, 235, 0.8)')">
                  <span class="griditem16" style="backgroundColor:rgba(235, 235, 235, 0.8);"></span>Button Face
                </div>
                <div @click="selectColor('rgba(185, 185, 185, 0.8)')">
                  <span class="griditem17" style="backgroundColor:rgba(185, 185, 185, 0.8);"></span>Button Shadow
                </div>
                <div @click="selectColor('rgba(124, 124, 124, 0.8)')">
                  <span class="griditem18" style="backgroundColor:rgba(124, 124, 124, 0.8);"></span>Disabled Text
                </div>
                <div @click="selectColor('rgb(0, 0, 0);')">
                  <span class="griditem19" style="backgroundColor:rgb(0, 0, 0);"></span>Button Text
                </div>
                <div @click="selectColor('rgb(0, 0, 0)')">
                  <span class="griditem20" style="backgroundColor:rgb(0, 0, 0);"></span>Active Title Bar Text
                </div>
                <div @click="selectColor('rgba(255, 255, 255, 0.8)')">
                  <span class="griditem21" style="backgroundColor:rgba(255, 255, 255, 0.8);"></span>Button Highlight
                </div>
                <div @click="selectColor('rgba(124, 124, 124, 0.8)')">
                  <span class="griditem22" style="backgroundColor:rgba(124, 124, 124, 0.8);"></span>Button Dark Shadow
                </div>
                <div @click="selectColor('rgba(226, 226, 226, 0.8)')">
                  <span class="griditem23" style="backgroundColor:rgba(226, 226, 226, 0.8);"></span>Button Light Shadow
                </div>
                <div @click="selectColor('rgb(0, 0, 0)')">
                  <span class="griditem24" style="backgroundColor:rgb(0, 0, 0);"></span>ToolTip Text
                </div>
                <div @click="selectColor('rgb(240, 239, 239)')">
                  <span class="griditem25" style="backgroundColor:rgb(240, 239, 239);"></span>ToolTip
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clickedPallete: false,
      clickedValue: false,
    };
  },
  methods: {
    clicked() {
      this.clickedPallete = !this.clickedPallete;
    },
    selectColor(data) {
      console.log("Color:", data);
    },
  },
};
</script>

<style scoped>
/* .outer-border{
  border:1px solid red;
} */
.grid-design {
  /* height: 14px; */
  display: grid;
  grid-template-columns: 90% 10%;
}
grid-design1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: rgb(238, 238, 238);
}
.color-input {
  border: none;
  outline: none;
  height: 14px;
}
.refdiv {
  border: 0.1px solid gray;
  width: 184px;
  box-shadow: -1.5px -1.5px gray;
}
.refinput {
  border: none;
  width: 158px;
}
.refbutton {
  width: 22px;
}
.tabs {
  position: absolute;
  min-height: 174px;
  width: 204px;
  border: 1px solid gray;
  background-color: rgb(240, 240, 240);
  clear: both;
  align-self: right;
  /* margin: 25px 0; */
  z-index: 400;
  right: -31px;
}
.tab {
  float: left;
}
.tab label {
  background: rgb(238, 238, 238);
  height: 12px;
  border: 1px solid rgb(238, 238, 238);
  margin-left: -1px;
  position: relative;
  left: 1px;
  padding: 3px;
}
.tab [type="radio"] {
  display: none;
}
.content {
  position: absolute;
  top: 18px;
  left: 0;
  background: rgb(238, 238, 238);
  /* width: auto;
  height: auto; */
  /* padding: 20px; */
  width: 200px;
  height: 152px;
  border: 1px solid rgb(238, 238, 238);
  box-shadow: 1px 1px gray;
  margin-top: 1px;
}
[type="radio"]:checked ~ label {
  background: ccc;
  box-shadow: 1px 0px gray;
  border-bottom: 1px solid ccc;
  border: 0.5px solid white;
  z-index: 2;
}
[type="radio"]:unchecked ~ label {
  border: 0.5px solid white;
}
[type="radio"]:checked ~ label ~ .content {
  z-index: 1;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto;
  width: 10px;
  padding: 10px;
  /* position: fixed; */
}
.grid-item1 {
  /* background-color: rgb(255, 255, 255); */
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item2 {
  background-color: rgb(255, 188, 188);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item3 {
  background-color: rgb(255, 227, 174);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item4 {
  /* background-color: rgb(255, 255, 168); */
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item5 {
  background-color: rgb(181, 255, 181);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item6 {
  background-color: rgb(202, 242, 255);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item7 {
  background-color: rgb(184, 184, 255);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item8 {
  background-color: rgb(255, 200, 255);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item9 {
  background-color: rgb(211, 211, 211);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item10 {
  background-color: rgb(253, 165, 165);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item11 {
  background-color: rgb(255, 213, 134);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item12 {
  background-color: rgb(255, 255, 138);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item13 {
  background-color: rgb(134, 255, 134);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item14 {
  background-color: rgb(132, 224, 255);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item15 {
  background-color: rgb(133, 133, 255);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item16 {
  background-color: rgb(255, 130, 255);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item17 {
  background-color: rgb(175, 174, 174);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item18 {
  background-color: rgb(255, 116, 116);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item19 {
  background-color: rgb(255, 197, 89);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item20 {
  background-color: rgb(255, 255, 109);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item21 {
  background-color: rgb(77, 255, 77);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item22 {
  background-color: rgb(67, 208, 255);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item23 {
  background-color: rgb(102, 102, 255);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item24 {
  background-color: rgb(255, 71, 255);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item25 {
  background-color: rgb(129, 128, 128);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item26 {
  background-color: rgb(255, 74, 74);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item27 {
  background-color: rgb(255, 186, 58);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item28 {
  background-color: rgb(255, 255, 72);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item29 {
  background-color: rgb(0, 255, 0);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item30 {
  background-color: rgb(0, 191, 255);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item31 {
  background-color: rgb(58, 58, 255);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item32 {
  background-color: rgb(255, 7, 255);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item33 {
  background-color: rgb(65, 64, 64);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item34 {
  background-color: rgb(255, 41, 41);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item35 {
  background-color: rgb(255, 176, 29);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item36 {
  background-color: rgb(255, 255, 35);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item37 {
  background-color: rgb(58, 204, 58);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item38 {
  background-color: rgb(75, 147, 172);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item39 {
  background-color: rgb(48, 48, 202);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item40 {
  background-color: rgb(175, 62, 175);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item41 {
  background-color: rgb(26, 25, 25);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item42 {
  background-color: rgb(255, 0, 0);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item43 {
  background-color: rgb(255, 166, 0);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item44 {
  background-color: rgb(255, 255, 0);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item45 {
  background-color: rgb(43, 161, 43);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item46 {
  background-color: rgb(10, 94, 122);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item47 {
  background-color: rgb(31, 31, 109);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item48 {
  background-color: rgb(112, 41, 112);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item49 {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item50 {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item51 {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item52 {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item53 {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item54 {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item55 {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item56 {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item57 {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item58 {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item59 {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item60 {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item61 {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item62 {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item63 {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}
.grid-item64 {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
}

/* System */
.gridcontainer {
  height: 150px;
  border: 1px solid gray;
  overflow-y: scroll;
  font-size: 12px;
}
.griditem1 {
  background-color: rgb(161, 161, 161);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem2 {
  background-color: rgb(0, 0, 0);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem3 {
  background-color: rgba(126, 179, 204, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem4 {
  background-color: rgba(155, 201, 223, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem5 {
  background-color: rgba(236, 234, 234, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem6 {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem7 {
  background-color: rgba(128, 127, 127, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem8 {
  background-color: rgb(0, 0, 0);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem9 {
  background-color: rgb(0, 0, 0);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem10 {
  background-color: rgb(0, 0, 0);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem11 {
  background-color: rgba(173, 172, 172, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem12 {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem13 {
  background-color: rgba(161, 160, 160, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem14 {
  background-color: rgba(50, 139, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem15 {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem16 {
  background-color: rgba(235, 235, 235, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem17 {
  background-color: rgba(185, 185, 185, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem18 {
  background-color: rgba(124, 124, 124, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem19 {
  background-color: rgb(0, 0, 0);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem20 {
  background-color: rgb(0, 0, 0);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem21 {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem22 {
  background-color: rgba(124, 124, 124, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem23 {
  background-color: rgba(226, 226, 226, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem24 {
  background-color: rgb(0, 0, 0);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem25 {
  background-color: rgb(240, 239, 239);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
</style>