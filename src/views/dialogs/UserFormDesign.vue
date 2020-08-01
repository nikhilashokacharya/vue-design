<template>
  <div>
    <div class="outer-userform-window">
      <div class="outer-userform-header">
        <div>
          <img src="../../assets/userform/OuterWindow.png" style="width:10px;height:10px" />
        </div>
        <div>
          <span>Book1 - UserForm1 (UserForm)</span>
        </div>
        <div>
          <div class="closeButton">
            <div class="ui-titlecontrols">
              <button class="ui-btn minimize">
                <svg x="0px" y="0px" viewBox="0 0 10.2 1">
                  <rect x="0" y="50%" width="10.2" height="1" />
                </svg>
              </button>
              <button class="ui-btn maximize">
                <svg viewBox="0 0 10 10">
                  <path d="M0,0v10h10V0H0z M9,9H1V1h8V9z" />
                </svg>
              </button>
              <button class="ui-btn close" @click="closeWindow(userForm)">
                <svg viewBox="0 0 10 10">
                  <polygon
                    points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="outer-userform-body">
        <div class="inner-userform-window">
          <div class="inner-userform-header">
            <div>
              <span>UserForm1</span>
            </div>
            <div>
              <button class="ui-btn close" @click="closeWindow(userForm)">
                <svg viewBox="0 0 10 10">
                  <polygon
                    points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1"
                  />
                </svg>
              </button>
            </div>
          </div>
          <!-- <div class="inner-userform-body"> -->
          <div class="inner-window-content"></div>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class UserFormDesign extends Vue {
//     innerWindowContainer = {
//     backgroundSize: " 9px 10px",
//     backgroundImage:
//       "radial-gradient(circle, rgb(0, 0, 0) 0.5px, rgba(0, 0, 0, 0) 0.2px)"
//   };
}
</script>

<style scoped>
.outer-userform-window {
  outline: 1px solid lightslategray;
  outline-style: auto;
  position: absolute;
  border: 5px solid rgb(180, 211, 252);
  width: 800px;
  height: 400px;
  border-radius: 5px;
}
.outer-userform-header {
  display: grid;
  grid-template-columns: 12px 9fr 1fr;
  width: 800px;
  height: 23px;
  background-color: rgb(180, 211, 252);
}
.outer-userform-body {
    z-index: 99;
    overflow: auto;
    height: calc(100% - 24px);
}
.inner-userform-window {
  outline: 1px solid lightslategray;
  outline-style: auto;
  position: relative;
  margin: 5px;
  border: 5px solid rgb(180, 211, 252);
  width: 400px;
  height: 200px;
  border-radius: 5px;
}
.inner-userform-header {
  display: grid;
  grid-template-columns: 9fr 1fr;
  width: 100%;;
  height: 23px;
  background-color: rgb(180, 211, 252);
}
.inner-window-content {
  width: 100%;
  height: calc(100% - 23px);
  position: absolute;
  left: 0px;
  /* top: 37px; */
  background-color: #e3e3e357;
  background-size: 9px 10px;
  background-image: radial-gradient(circle, rgb(0, 0, 0) 0.5px, rgba(0, 0, 0, 0) 0.2px);
}

.ui-btn {
  margin: 2px;
  background: #7e7ea666;
  border: 1px solid #7e7ea666;
  height: 18px;
  border-radius: 2px;
}
.ui-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}
.ui-btn.close {
  background: #c42a37;
}
.ui-btn svg path,
.ui-btn svg rect,
.ui-btn svg polygon {
  fill: white;
}
.ui-btn svg {
  width: 10px;
  height: 10px;
  stroke: white;
  stroke-width: 2px;
}
.closeButton {
  /* right: 10px; */
  position: relative;
  /* top: 5px; */
}
.ui-titlecontrols {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>