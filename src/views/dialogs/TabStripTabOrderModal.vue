<template>
  <div
    id="popup1"
    class="overlay"
    :style="{visibility:(isOpen===true)?'visible':'hidden',opacity:(isOpen===true)?'1':'0'}"
  >
    <div class="outer-taborder-div popup">
      <div class="taborder-header-div">
        <div class="taborder-header-innerdiv">
          <a>Tab Order</a>
        </div>
        <button class="ui-btn close" @click="closeme">
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
            <button
              class="inside-frame"
              ref="value.key"
              v-for="value in tabOrderArray"
              :key="value.key"
              @click="selectedTab(value)"
            >{{value.tabLabel | acceleratorFilter}}</button>
              
               <!-- :class="{'active-item': currentControl.index === value.index}"   -->

          </div>
        </div>
        <div class="wrapper2">
          <div style="height:3px"></div>
          <div class="wrapper21">
            <button class="taborder-buttons" @click="closemeok">OK</button>
            <button class="taborder-buttons" @click="closemecancel">Cancel</button>
          </div>
          <div style="height:35px"></div>
          <div class="wrapper21">
            <button class="taborder-buttons" @click="moveControlUp()">Move Up</button>
            <button class="taborder-buttons" @click="moveControlDown()">Move Down</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { EventBus } from "../../components/event-bus";
import { Component, Vue } from "vue-property-decorator";
@Component({
  filters: {
    acceleratorFilter(value: any) {
        const filteredValue = value;
        if(filteredValue!==null){
        if(filteredValue.includes("&#818;")){
        const newVal = filteredValue.replace(/&#818;/g,"");
        console.log('filter',newVal);
        return newVal;
        }
      }
      return value;
    }
  },
  components: {},
})
export default class TabStripTabOrderModal extends Vue {
  isOpen = false;
  openDialog() {
    this.isOpen = true;
  }
  closeme(){
  this.isOpen = false;
  }
  closemeok() {
    EventBus.$emit("Okayed",this.tabOrderArray);
    this.isOpen = false;
  }
  closemecancel(){
    this.isOpen = false;
  }
  tabOrderArray: any= [];
  currentControl: any = {};
  mounted() {
    this.tabOrderArray=[];
    EventBus.$on("tabOrderData", (data: any) => {
      const arrayData=[];
      for(let i=0; i<data.length;i++){
        arrayData.push(Object.assign({},data[i]));
      }
      this.tabOrderArray=arrayData;
      console.log('Inside Tab Order',arrayData);
    });
     EventBus.$on('callTabOrder',()=>{
      this.isOpen=true;
      // console.log('Inside Mounted')
    });
    this.sortObject(this.tabOrderArray);
  }
  created() {
    // this.sortObject(this.tabOrderArray);
  }
  selectedTab(data: any) {
    console.log(data);
    this.currentControl = data;
  }
  sortObject(obj: any) {
    this.tabOrderArray = obj;
    let arr = [];
    arr = this.tabOrderArray;

    arr.sort(function (a, b) {
      return a.index - b.index;
    });
    this.tabOrderArray = arr;
    this.currentControl = this.tabOrderArray[0];
    // console.log(this.tabOrderArray);
  }
  moveControlUp() {
    // debugger;
    let temp: any;
    const i = this.currentControl.index;
    if (this.currentControl.index === 0) {
      return;
    } else {
      this.tabOrderArray[i].index = i - 1;
      this.tabOrderArray[i - 1].index = i;
      this.sortObject(this.tabOrderArray);
      this.currentControl = this.tabOrderArray[i - 1];
    }
    console.log('UPped',this.currentControl.index);
  }

  moveControlDown() {
    let temp: any;
    const i = this.currentControl.index;
    if (this.currentControl.index === this.tabOrderArray.length - 1) {
      return;
    } else {
      this.tabOrderArray[i].index = i + 1;
      this.tabOrderArray[i + 1].index = i;
      this.sortObject(this.tabOrderArray);
      this.currentControl = this.tabOrderArray[i + 1];
    }
  }
}
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
  color: #06d85f;
  margin: 80px 0;
}

.span-style {
  position: absolute;
  left: 6px;
  top: 6px;
}

.box {
  background: rgba(255, 255, 255, 0.2);
  text-align: right;
}

.button {
  font-size: 1em;
  padding: 10px;
  color: #fff;
  border: 2px solid #06d85f;
  border-radius: 20px/50px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-out;
}
.button:hover {
  background: #06d85f;
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
  z-index: 110;
}
.overlay:target {
  visibility: visible;
  opacity: 1;
}

.popup {
  margin: 70px auto;
  /* padding: 20px; */
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
  /* top: 20px; */
  right: 0px;
  transition: all 200ms;
  /* font-size: 30px; */
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.popup .close:hover {
  color: #06d85f;
}
.popup .content {
  max-height: 30%;
  overflow: auto;
}

@media screen and (max-width: 700px) {
  .box {
    width: 70%;
  }
  .popup {
    width: 70%;
  }
}
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
.active-item {
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