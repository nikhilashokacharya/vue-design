<template>
  <div class="tabs">
    <!-- <div class="outer-tabs">
      <div class="tab" v-for="(value,key) in values" :key="key">
        <input name="tab-group-1" :id="value.id" type="radio" />
          <label :for="value.id">{{value.tabLabel}}</label>
          <div class="content1">{{value.tabContent}}</div>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class UseTabStrip extends Vue {
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
        }
      ]
    }
  
</script>

<style scoped>
.outer-tabs {
  position: relative;
  /* border: 1px solid black; */
  background-color: rgb(238, 238, 238);
  width: 100%;
  height: calc(100% - 30px);
  overflow-x: auto;
  overflow-y: hidden;
   white-space: nowrap;
}

.tabs {
  min-height: 150px;
  clear: both;
  margin: 25px 0;
  width: 411px;
  height: 300px;
  overflow-y: hidden;
  overflow-x: hidden;
}
.tab {
  float: left;
}
.tab label {
  background: rgb(238, 238, 238);
  border: 1px solid rgb(238, 238, 238);
  margin-left: -1px;
  /* position: relative; */
  left: 1px;
  padding: 0px 7px 0px 7px;
  border-radius: 2px;
}
.tab [type="radio"] {
  display: none;
}
.content1 {
  position: absolute;
  top: 18px;
  left: 0;
  /* background: transparent; */
  background-color: rgb(238, 238, 238);
  background-size: 9px 10px;
  width: calc(100% - 42px);
  height: calc(100% - 60px);
  padding: 20px;
  /* border: 1px solid rgb(238, 238, 238); */
  border-top: 0.1px solid white;
  border-radius: 1px;
  box-shadow: 1px 1px grey;
  overflow: hidden;
}
[type="radio"]:checked ~ label {
  background: ccc;
  box-shadow: 2px 0px gray;
  border: 0.5px solid white;
  border-bottom: 1px solid ccc;
  z-index: 2;
}
[type="radio"]:checked ~ label ~ .content1 {
  z-index: 1;
}
</style>