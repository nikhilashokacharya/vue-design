<template>
  <div class="outercontext-div">
    <div class="wrapper-context" v-for="(value,i) in values" :key="i">
      <button class="wrapper1-context" v-if="value.values.length===0">
        <div>
          <FDSVGImage :name="value.icon" />
        </div>
        <span class="set-context">{{value.text}}</span>
      </button>
      <button class="wrapper1-context wrapper21" v-else>
          <div></div>
          <ul class="set-context top-level-menu">
            <li>
              <a href="#">
                <!-- <u>A</u>lign -->
                {{value.text}}
              </a>
              <ul class="third-level-menu" >
                <li class="wrapper1-context" v-for="(subVal,i) in value.values" :key="i">
                  <div>
                     <FDSVGImage :name="subVal.icon" />
                  </div>
                  <a href="#">
                    <!-- <u>L</u>efts -->
                    {{subVal.text}}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div class="triangle-right"></div>
        </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { userformContextMenu } from "./models/userform";
import { controlContextMenu } from './models/controls'
import FDSVGImage from "../../components/FDSVGImage.vue";
@Component({
  components: {
    FDSVGImage,
  },
})
export default class ContextMenu extends Vue {
  // values: any = userformContextMenu;
  values: any = controlContextMenu;
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
.wrapper21 {
  display: grid;
  grid-template-columns: 10% 85% 5%;
}
.triangle-right {
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-left: 5px solid black;
  border-bottom: 5px solid transparent;
  padding-top: 2px;
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
ul {
  list-style-type: none;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
}

/* testing submenu */

.top-level-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.top-level-menu > li {
  position: absolute;
  float: left;
  height: 30px;
  width: 143px;
}

.top-level-menu li:hover > ul {
  /* On hover, display the next level's menu */
  display: inline;
}

/* Menu Link Styles */

.top-level-menu a /* Apply to all links inside the multi-level menu */ {
  font-size: 12px;
  color: black;
  text-decoration: none;
  padding: 0 0 0 10px;
  padding-left: 15px;

  /* Make the link cover the entire list item-container */
  display: block;
}
.top-level-menu a:hover {
  color: black;
}
.third-level-menu {
  position: absolute;
  top: 0;
  right: -100px;
  width: 110px;
  list-style: none;
  padding: 0;
  margin: 0;
  display: none;
  border: 1px solid black;
  background-color: white;
}

.third-level-menu > li {
  height: 20px;
  padding-top: 5px;
  /* margin: 1px; */
}
.third-level-menu > li:hover {
  background-color: rgb(155, 215, 255);
  border: 0.2px solid rgb(0, 153, 255);
}
.top-level-menu1 {
  list-style: none;
  padding: 0;
  margin: 0;
}

.top-level-menu1 > li {
  position: absolute;
  float: left;
  height: 30px;
  width: 143px;
}

.top-level-menu1 li:hover > ul {
  /* On hover, display the next level's menu */
  display: inline;
}

/* Menu Link Styles */

.top-level-menu1 a /* Apply to all links inside the multi-level menu */ {
  font-size: 12px;
  color: black;
  text-decoration: none;
  padding: 0 0 0 10px;
  padding-left: 15px;

  /* Make the link cover the entire list item-container */
  display: block;
}
.top-level-menu1 a:hover {
  color: black;
}
.third {
  padding-left: 5px;
}
.third > a {
  padding-left: 10px;
}
.icons{
  margin-left: 3px;
}
</style>