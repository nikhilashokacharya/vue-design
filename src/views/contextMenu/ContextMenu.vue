<template>
  <div class="outercontext-div">
    <div class="wrapper-context">
      <button class="wrapper1-context" v-for="(value,i) in values" :key="i">
        <div>
          <FDSVGImage :name="value.icon" />
        </div>
        <span class="set-context">{{value.text}}</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { userformContextMenu } from "./models/userform";
import FDSVGImage from "../../components/FDSVGImage.vue";
@Component({
  components: {
    FDSVGImage,
  },
})
export default class ContextMenu extends Vue {
  values: any = userformContextMenu;
  mounted() {
    console.log("CMENU", userformContextMenu);
  }
}
</script>

<style scoped>
.outercontext-div {
  border: 0.3px solid black;
  box-shadow: 2px 2px lightgray;
  width: 150px;
  height: auto;
  font-size: 13px;
}
.wrapper-context {
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  height: 100%;
}
.wrapper1-context {
  display: grid;
  grid-template-columns: 10% 90%;
  border: 0.3px solid white;
  background: white;
  height: 24px;
  padding-top: 5px;
  outline: none;
}
.wrapper1-context:hover {
  background-color: rgb(155, 215, 255);
  border: 0.3px solid rgb(0, 153, 255);
}
.iset-context {
  text-align: left;
  padding-left: 15px;
  font-size: 12px;
}
.set-context {
  text-align: left;
  padding-left: 15px;
  font-size: 12px;
}
hr {
  margin: 0px;
}
</style>