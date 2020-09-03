<template>
    <div class="outer" :style="outerArea">
      <div class="tabs">
        <div id="container" class="move" ref="scrolling">
          <div class="tab" v-for="(value,key) in values" :key="key">
            <input
              name="tab-group-1"
              :id="value.id"
              type="radio"
              :checked="value.checked"
              @click="clickedTab(value)"
            />
            <label :v-model="value.title" :for="value.id" :title="value.title" v-html="value.tabLabel"></label>
            <div class="content">{{value.tabContent}}</div>
          </div>
        </div>
        <div></div>
        <div :style="{display:isScroll?'block':'none'}">
          <button class="left-button" @click="leftmove"></button>
          <button class="right-button" @click="rightmove"></button>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { EventBus } from "../../components/event-bus";
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  components: {},
})
export default class InsertElement extends Vue {
  counter = 3;
  isScroll = true;
  title = "";
  outerArea = {
    width: "284px",
    height: "140px",
  };
  values = [
    {
      id: "tab-1",
      tabLabel: "Tab1",
      checked: false,
      title: "",
      index:0
    },
    {
      id: "tab-2",
      tabLabel: "Tab2",
      checked: false,
      title: "",
      index:1
    },
  ];

  leftmove() {
    const scrollRef = (this as any).$refs.scrolling;
    console.log(scrollRef.scrollWidth + 30);
    scrollRef.scrollLeft -= 20;
    if (scrollRef.scrollWidth + 30 <= parseInt(this.outerArea.width)) {
      this.isScroll = false;
    }
  }
  rightmove() {
    console.log("right");
    const scrollRef = (this as any).$refs.scrolling;
    console.log(scrollRef);
    scrollRef.scrollLeft += 20;
  }
  mounted() {
    const ele = this.values;
    ele[0].checked = true;

    EventBus.$on("addTab", () => {
      this.add();
    });
    EventBus.$on("delTab", () => {
      this.del();
    });
    EventBus.$on("rename", (renameValue: any) => {
      this.rename(renameValue);
    });
    EventBus.$on("tip", (titleValue: any) => {
      this.toolTip(titleValue);
    });
    EventBus.$on("Okayed", (newArray: any) => {
      this.values=newArray;
    });
  }
  add() {
    this.values.forEach((x) => {
      x.checked = false;
    });
    const newCounter = this.counter++;
    this.values = [
      ...this.values,
      { id: `tab-${newCounter}`, tabLabel: `Tab${newCounter}`, checked: true, index: `${newCounter-1}`},
    ];
    console.log(this.values);
  }
  del() {
    console.log(this.values.length);
    const ele = this.values;
    for (let i = 0; i < this.values.length; i++) {
      if (ele[i].checked) {
        const x = this.values.splice(i, 1);
        console.log(x);
        ele[this.values.length - 1].checked = true;
      }
    }
  }
  clickedTab(data: any) {
    EventBus.$emit("tabOrderData", this.values);
    this.values.forEach((x) => {
      if (data.id === x.id) {
        x.checked = true;
        EventBus.$emit("renameTabs", data);
      } else {
        x.checked = false;
      }
    });
  }
  rename(renameValue: any) {
    const ele = this.values;
    for (let i = 0; i < this.values.length; i++) {
      if (ele[i].checked) {
        console.log(ele[i]);
        ele[i].tabLabel = renameValue;
      }
    }
  }
  toolTip(titleValue: any) {
    const ele = this.values;
    for (let i = 0; i < this.values.length; i++) {
      if (ele[i].checked) {
        console.log(this.title);
        ele[i].title = titleValue;
      }
    }
  }
}
</script>

<style scoped>
.outer {
  background-color: rgb(238, 238, 238);
  overflow-y: hidden;
  overflow-x: hidden;
}
.tabs {
  display: grid;
  grid-template-columns: 1fr 40px 30px;
  position: relative;
  clear: both;
  margin: 0;
  /* margin-left: 10px; */
  width: calc(100%);
  height: calc(100% + 22px);
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
}
.left-button {
  position: relative;
  background-image: url("../../assets/controls pictures/left-arrow-img.png");
  background-size: 30%;
  background-position: center;
  background-repeat: no-repeat;
  border: 2px solid white;
  border-right-color: gray;
  border-bottom-color: gray;
  top: 3px;
  right: 15px;
  width: 22px;
  height: 18px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  z-index: 5;
}
.right-button {
  position: relative;
  background-image: url("../../assets/controls pictures/right-arrow-img.png");
  background-size: 30%;
  background-position: center;
  background-repeat: no-repeat;
  border: 2px solid white;
  border-right-color: gray;
  border-bottom-color: gray;
  top: 3px;
  right: 15px;
  width: 22px;
  height: 18px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  z-index: 5;
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