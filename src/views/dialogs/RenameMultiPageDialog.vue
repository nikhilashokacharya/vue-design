<template>
<div id="popup1" class="overlay" :style="{visibility:(isOpen===true)?'visible':'hidden',opacity:(isOpen===true)?'1':'0'}">
  <div class="rename-div-1 popup">
    <div class="remane-header-div">
      Rename
      <a class="close" href="#">
        <button class="ui-btn close" @click="closeme">
          <svg viewBox="0 0 10 10">
            <polygon
              points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1"
            />
          </svg>
        </button>
      </a>
    </div>
    <hr style="margin: 1px;" />
    <br />
    <div class="wrapper">
      <span>Caption:</span>
      <div>
        <input type="text" v-model="renameValue" @change="handleRename"/>
      </div>
      <span>Accelerator Key:</span>
      <div>
        <input type="text" style="width:10%" />
      </div>
      <span>Control Tip Text:</span>
      <div>
        <input type="text" @input="handleTip"/>
      </div>
      <div></div>
      <div>
        <input
          type="Button"
          value="OK"
          style="width:60px; box-shadow: 1px 1px; border: 0.5px solid gray ;"
          @click="closemeok"
        />
        <input
          type="Button"
          value="Cancel"
          style="width:60px; box-shadow: 1px 1px; border: 0.5px solid gray ;"
          @click="closemecancel"
        />
      </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { EventBus } from "../../components/event-bus"
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class RenameMultiPageDialog extends Vue {
    renameValue=""
    isOpen=false
    tempRename=null
    openDialog(){
    this.isOpen=true;
  }
  closeme(){
    this.isOpen=false;
  }
    mounted(){
      console.log(this.renameValue);
      EventBus.$on('callRename',()=>{
      this.isOpen=true;
      console.log('Inside Mounted')
    });
    EventBus.$on("renameTabs", (data: any)=>{
      this.renameValue=data.tabLabel;
    });
    }
    
    handleRename(e: any){
      this.tempRename=e.target.value;
      
    }
    handleTip(e: any){
      console.log(e.target.value);
      EventBus.$emit("tip",e.target.value);
    }
    closemeok(){
      this.renameValue=this.tempRename;
      EventBus.$emit("rename",this.renameValue);
      this.isOpen=false;
    }
    closemecancel(){
      this.isOpen=false;
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
  /* width: 40%; */
  /* margin: 0 auto; */
  background: rgba(255, 255, 255, 0.2);
  /* padding: 35px; */
  /* border: 2px solid #fff; */
  /* border-radius: 20px/50px; */
  /* background-clip: padding-box; */
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
  grid-template-columns: 50% 50%;
  /* grid-gap: 1em; */
  grid-row-gap: 1em;
}

.rename-div-1 {
  border: 1px solid gray;
  height: 180px;
  width: 270px;
  background-color: rgb(238, 238, 238);
}

.remane-header-div {
  height: 20px;
  background-color: white;
  font-size: 13px;
  padding-left: 5px;
}

.wrapper > span {
  font-size: 12px;
  font-family: courier;
  padding-left: 5px;
}

.wrapper > div > input {
  width: 120px;
  border: none;
  box-shadow: -1px -1px;
}

.ui-btn {
  margin: 0;
  width: 28px;
  height: 21px;
  border: 0;
  float: right;
  outline: 0;
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