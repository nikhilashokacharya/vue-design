<template>
<div>
<!-- <div class="refdiv">
  <input class="refinput" />
    <button class="refbutton" @click="clicked">
      <strong>_</strong>
    </button>
    </div> -->
    <div class="buttonIn">
        <input type="text" id="enter" />
        <button id="clear" @click="clicked"><strong>_</strong></button>
      </div>
<!-- <button ></button> -->
  <div class="tabs" v-if="clickedPallete">
    <div class="tab">
      <input class="tabinput" type="radio" id="tab-1" name="tab-group-1" checked />
      <label for="tab-1">Palette</label>
      <div class="content">
        <div class="grid-container">
          <div class="grid-item1"></div>
          <div class="grid-item2"></div>
          <div class="grid-item3"></div>
          <div class="grid-item4"></div>
          <div class="grid-item5"></div>
          <div class="grid-item6"></div>
          <div class="grid-item7"></div>
          <div class="grid-item8"></div>
          <div class="grid-item9"></div>
          <div class="grid-item10"></div>
          <div class="grid-item11"></div>
          <div class="grid-item12"></div>
          <div class="grid-item13"></div>
          <div class="grid-item14"></div>
          <div class="grid-item15"></div>
          <div class="grid-item16"></div>
          <div class="grid-item17"></div>
          <div class="grid-item18"></div>
          <div class="grid-item19"></div>
          <div class="grid-item20"></div>
          <div class="grid-item21"></div>
          <div class="grid-item22"></div>
          <div class="grid-item23"></div>
          <div class="grid-item24"></div>
          <div class="grid-item25"></div>
          <div class="grid-item26"></div>
          <div class="grid-item27"></div>
          <div class="grid-item28"></div>
          <div class="grid-item29"></div>
          <div class="grid-item30"></div>
          <div class="grid-item31"></div>
          <div class="grid-item32"></div>
          <div class="grid-item33"></div>
          <div class="grid-item34"></div>
          <div class="grid-item35"></div>
          <div class="grid-item36"></div>
          <div class="grid-item37"></div>
          <div class="grid-item38"></div>
          <div class="grid-item39"></div>
          <div class="grid-item40"></div>
          <div class="grid-item41"></div>
          <div class="grid-item42"></div>
          <div class="grid-item43"></div>
          <div class="grid-item44"></div>
          <div class="grid-item45"></div>
          <div class="grid-item46"></div>
          <div class="grid-item47"></div>
          <div class="grid-item48"></div>
          <div class="grid-item49"></div>
          <div class="grid-item50"></div>
          <div class="grid-item51"></div>
          <div class="grid-item52"></div>
          <div class="grid-item53"></div>
          <div class="grid-item54"></div>
          <div class="grid-item55"></div>
          <div class="grid-item56"></div>
          <div class="grid-item57"></div>
          <div class="grid-item58"></div>
          <div class="grid-item59"></div>
          <div class="grid-item60"></div>
          <div class="grid-item61"></div>
          <div class="grid-item62"></div>
          <div class="grid-item63"></div>
          <div class="grid-item64"></div>
        </div>
      </div>
    </div>
    <div class="tab">
      <input class="tabinput" type="radio" id="tab-2" name="tab-group-1" />
      <label for="tab-2">System</label>

      <div class="content">
        <div class="gridcontainer">
          <div>
            <span class="griditem1"></span>Scroll Bars
          </div>
          <div>
            <span class="griditem2"></span>Desktop
          </div>
          <div>
            <span class="griditem3"></span>Active Title Bar
          </div>
          <div>
            <span class="griditem4"></span>Inactive Title Bar
          </div>
          <div>
            <span class="griditem5"></span>Menu Bar
          </div>
          <div>
            <span class="griditem6"></span>Window Background
          </div>
          <div>
            <span class="griditem7"></span>Window Frame
          </div>
          <div>
            <span class="griditem8"></span>Menu Text
          </div>
          <div>
            <span class="griditem9"></span>Window Text
          </div>
          <div>
            <span class="griditem10"></span>Active Title Bar Text
          </div>
          <div>
            <span class="griditem11"></span>Active Border
          </div>
          <div>
            <span class="griditem12"></span>Inactive Border
          </div>
          <div>
            <span class="griditem13"></span>Application Workspace
          </div>
          <div>
            <span class="griditem14"></span>Highlight
          </div>
          <div>
            <span class="griditem15"></span>Highlight Text
          </div>
          <div>
            <span class="griditem16"></span>Button Face
          </div>
          <div>
            <span class="griditem17"></span>Button Shadow
          </div>
          <div>
            <span class="griditem18"></span>Disabled Text
          </div>
          <div>
            <span class="griditem19"></span>Button Text
          </div>
          <div>
            <span class="griditem20"></span>Active Title Bar Text
          </div>
          <div>
            <span class="griditem21"></span>Button Highlight
          </div>
          <div>
            <span class="griditem22"></span>Button Dark Shadow
          </div>
          <div>
            <span class="griditem23"></span>Button Light Shadow
          </div>
          <div>
            <span class="griditem24"></span>ToolTip Text
          </div>
          <div>
            <span class="griditem25"></span>ToolTip
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  data(){
    return {
      clickedPallete:false
    }
  },
  methods:{
    clicked(){
      this.clickedPallete=!this.clickedPallete;
    }
  }
};
</script>

<style>
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
  position: relative;
  min-height: 150px;
  clear: both;
  margin: 25px 0;
}
.tab {
  float: left;
}
.tab label {
  background: rgb(238, 238, 238);

  border: 1px solid rgb(238, 238, 238);
  margin-left: -1px;
  position: relative;
  left: 1px;
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
  padding: 20px;
  width: 200px;
  height: 200px;
  border: 1px solid rgb(238, 238, 238);
  box-shadow: 1px 1px gray;
  margin-top: 7px;
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
  background-color: white;
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
  background-color: rgb(255, 255, 168);
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
  border: 1px solid red;
  overflow-y: scroll;
  font-size: 12px;
}
.griditem1 {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem2 {
  background-color: black;
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem3 {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem4 {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem5 {
  background-color: rgba(255, 255, 255, 0.8);
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
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem8 {
  background-color: black;
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem9 {
  background-color: black;
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem10 {
  background-color: black;
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem11 {
  background-color: rgba(255, 255, 255, 0.8);
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
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem14 {
  background-color: rgba(255, 255, 255, 0.8);
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
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem17 {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem18 {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem19 {
  background-color: black;
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem20 {
  background-color: black;
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
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem23 {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem24 {
  background-color: black;
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
.griditem25 {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  width: 14px;
  height: 14px;
  text-align: center;
  margin: 1px;
  display: inline-block;
}
</style>