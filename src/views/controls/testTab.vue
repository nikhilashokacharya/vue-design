<template>
  <div class="outer">
    <div class="tabs">
      <div id="container" class="move" ref="scrolling">
        <div class="tab" v-for="(value,key) in values" :key="key">
          <input name="tab-group-1" :id="value.id" type="radio" />
          <label :for="value.id">{{value.tabLabel}}</label>
          <div class="content">{{value.tabContent}}</div>
        </div>
      </div>
      <div>
        <button class="left-button" @click="leftmove"></button>
        <button class="right-button" @click="rightmove"></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  components: {},
})
export default class InsertElement extends Vue {
  values = [
    {
      id: "tab-1",
      tabLabel: "Tab One",
      tabContent: "Hello",
    },
    {
      id: "tab-2",
      tabLabel: "Tab Two",
      tabContent: "How",
    },
    {
      id: "tab-3",
      tabLabel: "Tab Three",
      tabContent: "Are",
    },
    {
      id: "tab-4",
      tabLabel: "Tab Four",
      tabContent: "You",
    },
    {
      id: "tab-5",
      tabLabel: "Tab Five",
      tabContent: "You",
    },
    {
      id: "tab-6",
      tabLabel: "Tab Six",
      tabContent: "You",
    },
  ];

  leftmove() {
    console.log("left");
    const scrollRef = (this as any).$refs.scrolling;
    console.log(scrollRef);
    scrollRef.scrollLeft -= 200;
  }
  rightmove() {
    console.log("right");
    const scrollRef = (this as any).$refs.scrolling;
    console.log(scrollRef);
    scrollRef.scrollLeft += 230;
  }
}
</script>

<style scoped>
.outer {
  width: 200px;
  height: 140px;
  background-color: rgb(238, 238, 238);
  overflow-y: hidden;
  overflow-x: hidden;
}
.tabs {
  display: grid;
  grid-template-columns: 1fr 30px;
  position: relative;
  clear: both;
  margin: 0;
  /* margin-left: 10px; */
  width: calc(100%);
  height: 100%;
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
}
.left-button {
  position: relative;
  background-image: url('../../assets/controls pictures/left-arrow-img.png');
  background-size: 30%;
  background-position: center;
  background-repeat: no-repeat;
  top: 3px;
  right: 19px;
  width: 22px;
  height: 18px;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
.right-button {
  position: relative;
  background-image: url('../../assets/controls pictures/right-arrow-img.png');
  background-size: 30%;
  background-position: center;
  background-repeat: no-repeat;
  top: 3px;
  right: 19px;
  width: 22px;
  height: 18px;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
.move {
  height: -webkit-fill-available;
  width: 100%;
  display: inline-block;
  overflow-x: auto;
  overflow-y: hidden;
}
.tab {
  display: inline-block;
  vertical-align: top;
  z-index: 1;
}
.scroll-tab {
  z-index: 2;
}
.tab label {
  border: 0.1px solid white;
  background-color: rgb(238, 238, 238);
  display: inline-block;
  padding: 5px 5px 5px 5px;
  margin: 0;
  cursor: pointer;
  position: relative;
}
.tab [type="radio"] {
  display: none;
}
::-webkit-scrollbar {
  width: 0;
  height: 1em;
  background-color: rgb(238, 238, 238);
}

::-webkit-scrollbar-button {
  background: rgb(238, 238, 238);
  height: 20px;
  border: 1px solid lightgray;
  border-right-color: gray;
  border-bottom-color: gray;
}

/* Up */
::-webkit-scrollbar-button:single-button:horizontal:decrement {
  background-image: url("../../assets/controls pictures/triangle-up-img.png");
  transform: rotate(90deg);
  background-size: 10px;
  background-position: center;
  background-repeat: no-repeat;
  /* border-color: lightgrey; */
}

/* Down */
::-webkit-scrollbar-button:single-button:horizontal:increment {
  background-image: url("../../assets/controls pictures/triangle-down-img.png");
  background-size: 10px;
  background-position: center;
  background-repeat: no-repeat;
  /* border-color: lightgrey; */
}

::-webkit-scrollbar-track-piece {
  width: 0px;
}

/* ::-webkit-scrollbar-thumb {
        background: #eee;
        border: 1px solid lightgray;
        border-right-color: gray;
        border-bottom-color: gray;
    } */
.tab .content {
  position: absolute;
  white-space: normal;
  top: 23px;
  left: 0px;
  background: rgb(238, 238, 238);
  height: 100px;
  right: 0;
  bottom: 0;
  padding: 20px;
  padding-right: 10px;
  width: calc(100% - 35px);
  height: calc(100% - 89px);
  border: 0.1px solid white;
  box-shadow: 2px 1px gray;
}
.tab [type="radio"]:checked ~ label {
  border-right: 2px solid gray;
  border-bottom: none;
  border-radius: 3px;
  z-index: 2;
}
.tab [type="radio"]:checked ~ label ~ .content {
  z-index: 1;
}
.content {
  overflow: auto;
}
</style>