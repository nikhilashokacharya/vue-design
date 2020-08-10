<template>
  <div>
    <div class="outer-taborder-div">
      <div class="taborder-header-div">
        <div class="taborder-header-innerdiv">
          <a>Tab Order</a>
        </div>
        <button class="ui-btn close">
          <svg viewBox="0 0 10 10">
            <polygon
              points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1"
            />
          </svg>
        </button>
      </div>
      <div class="wrapper">
        <div class="wrapper1">
          <span class="inner-header">Tab Order</span>
          <div class="frame">
            <div v-if="controls"></div>
            <button
              class="inside-frame"
              v-for="(value,key,index) in controls"
              :key="value.tabindex"
              :tabindex="parseInt(value.tabindex)"
              @click="check(index)"
              :mini="value.tabindex"
            >
            <div>
              <div>
                {{value.name}}:{{value.tabindex}}
              </div>
            </div>
            </button>
           
          </div>
        </div>
        <div class="wrapper2">
          <div style="height:3px"></div>
          <div class="wrapper21">
            <button class="taborder-buttons">OK</button>
            <button class="taborder-buttons">Cancel</button>
          </div>
          <div style="height:35px"></div>
          <div class="wrapper21">
            <button class="taborder-buttons">Move Up</button>
            <button
              class="taborder-buttons"
              @click="increaseIndex(selectedIndex,controls)"
            >Move Down</button>
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
      array1:[],
      selectedIndex: 1,
      i: 0,
      controls: {
        ID_LABEL1: {
          name: "Label1",
          tabindex: 0,
        },
        ID_COMMANDBUTTON1: {
          name: "CommandButton1",
          tabindex: 1,
        },
        ID_TEXTBOX1: {
          name: "TextBox1",
          tabindex: 2,
        },
      },
    };
  },
  filters:{
    // sortByIndex: function (){
      
    // }
  },
  methods: {
    check(data) {
      console.log(data);
      this.selectedIndex = data;
    },
    increaseIndex(selectedIndex, values) {
      this.selectedIndex = selectedIndex + 1;
      console.log(this.selectedIndex);
      const b = this.controls;
      this.controls[selectedIndex + 1] = this.controls[selectedIndex];
      this.values[selectedIndex] = b;
    },

    // increaseIndex(selectedIndex, values) {
    //   this.selectedIndex = selectedIndex+1;
    //   // console.log(this.selectedIndex);
    //   // let i;
    //   // for(i;i<this.values.length;i++){
    //   const b = this.values[selectedIndex+1];
    //   this.values[selectedIndex+1] = this.values[selectedIndex];
    //   this.values[selectedIndex] = b;
    //   // }
    // },
    // decreaseIndex(selectedIndex, values) {
    //   this.selectedIndex = selectedIndex-1;
    //   // console.log(this.selectedIndex);
    //   // let i;
    //   // for(i;i<this.values.length;i++){
    //   const b = this.values[selectedIndex-1];
    //   this.values[selectedIndex-1] = this.values[selectedIndex];
    //   this.values[selectedIndex] = b;
    //   // }
    // },
  },
};
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 65% 35%;
  padding-left: 10px;
  padding-top: 22px;
  grid-row-gap: 1em;
  grid-column-gap: 1em;
  margin-bottom: 2em;
}
.wrapper1 {
  grid-gap: 1em;
}
.wrapper2 {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
  grid-column-gap: 3em;
  height: 16px;
}
.wrapper21 {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.5em;
  height: 16px;
}
.frame {
  width: 200px;
  height: 150px;
  background-color: white;
  box-shadow: -1px -1px gray;
  overflow-y: auto;
  overflow-x: hidden;
}
.inside-frame {
  /* border: 1px solid black; */
  border: none;
  background-color: white;
  text-align: left;
  outline: none;
  width: 100%;
  height: auto;
  font-family: "SESimplex";
  font-weight: 500;
  font-size: 11px;
  padding-left: 2px;
}
.inside-frame:focus {
  background-color: rgb(2, 84, 207);
  color: white;
}
.taborder-header-div {
  display: grid;
  grid-template-columns: 90% 10%;
  height: 25px;
  background-color: white;
  font-size: 13px;
}
.taborder-header-innerdiv {
  padding-left: 7px;
  padding-top: 6px;
}
.outer-taborder-div {
  border: 0.3px solid gray;
  height: 235px;
  width: 330px;
  background-color: rgb(238, 238, 238);
}
.inner-header {
  font-family: "SESimplex";
  font-weight: 500;
  font-size: 12px;
}
.taborder-buttons {
  width: 80px;
  height: 23px;
  font-family: "Candara";
  font-weight: lighter;
  font-size: 13px;
  box-shadow: 1px 1px;
  border: 0.5px solid gray;
  /* outline: 1px; */
}
.ui-btn {
  /* margin: 2px; */
  margin: 0;
  width: 33px;
  height: 25px;
  border: 0;
  outline: 0;
  background: transparent;
}
.ui-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}
.ui-btn.close {
  background: white;
}
.ui-btn:hover {
  background: #e81123;
  color: white;
}
.ui-btn svg path,
.ui-btn svg rect,
.ui-btn svg polygon {
  fill: white;
}
.ui-btn svg {
  width: 10px;
  height: 10px;
  stroke: gray;
}
.ui-btn svg:hover {
  width: 10px;
  height: 10px;
  stroke: white;
}
</style>