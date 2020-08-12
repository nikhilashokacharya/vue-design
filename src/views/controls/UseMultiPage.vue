<template>
  <div class="pages">
    <div class="outer-multi">
      <div class="page">
        <input type="radio" id="page-1" name="page-group-2" checked />
        <label for="page-1">Page1</label>
        <div class="content1">
          <UseCommandButton />
          <!-- <UseCheckBox /> -->
        </div>
      </div>
      <div class="page">
        <input type="radio" id="page-2" name="page-group-2" />
        <label for="page-2">Page2</label>
        
        <div class="content1">
          <div>
          <!-- <UseOptionButton /> -->
          <UseCheckBox />
          </div>
          </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import UseCommandButton from './UseCommandButton.vue';
// import UseOptionButton from './UseOptionButton.vue';
import UseCheckBox from './UseCheckBox.vue'

@Component({
  components: {
    UseCommandButton,
    // UseOptionButton,
    UseCheckBox

  },
})
export default class UseMultiPage extends Vue {}
</script>

<style scoped>
.outer-multi {
  position: absolute;
  /* border: 1px solid black; */
  background-color: rgb(238, 238, 238);
  width: calc(100% - 396px);
  height: calc(100% - 30px);
  overflow: hidden;
}

.pages {
  position: relative;
  min-height: 150px;
  clear: both;
  margin: 25px 0;
}
.page {
  float: left;
}
.page label {
  background: rgb(238, 238, 238);
  border: 1px solid rgb(238, 238, 238);
  margin-left: -1px;
  position: relative;
  left: 1px;
  padding: 0px 7px 0px 7px;
  border-radius: 2px;
}
.page [type="radio"] {
  display: none;
}
.content1 {
  position: absolute;
  top: 18px;
  left: 0;
  /* background: transparent; */
  background-color: white;
  background-size: 9px 10px;
  background-image: radial-gradient(circle, rgb(0, 0, 0) 0.5px, rgba(0, 0, 0, 0) 0.2px);
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