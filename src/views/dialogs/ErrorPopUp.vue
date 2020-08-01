<template>
  <div>
    <div class="outer-error-div">
      <div class="header-error">
        <div>
          <span>Microsoft Visual Basic for Applications</span>
        </div>
        <div>
          <button class="ui-btn close">
            <svg viewBox="0 0 10 10">
              <polygon
                points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="body-error">
        <div class="blank-body-div"></div>
        <div class="body-center-error" v-if="overflow">
          <div class="left-right-gap"></div>
          <div>
            <img
              alt="Caution"
              src="../../assets/pop-up-caution.jpg"
              style="height:30px;width:30px;float:right"
            />
          </div>
          <div class="error-message">{{overflowMessage}}</div>
          <div class="left-right-gap"></div>
        </div>
        <div class="body-center-error" v-if="invalid">
          <div class="left-right-gap"></div>
          <div>
            <img
              alt="Invalid"
              src="../../assets/invalid1.jpg"
              style="height:30px;width:30px;float:right"
            />
          </div>
          <div class="error-message">{{invalidMessage}}</div>
          <div class="left-right-gap"></div>
        </div>
        <div class="blank-body-div"></div>
      </div>
      <div class="footer-error">
        <div></div>
        <button>OK</button>
        <button>Help</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      overflow: false,
      invalid: true,
      overflowMessage: 
      "Overflow",
    //   "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio reiciendis a unde sapiente quidem consectetur. Obcaecati molestiae natus distinctio vel rem quaerat, veritatis neque aperiam fuga magni necessitatibus mollitia repellat voluptate error ipsam quos blanditiis voluptas totam? Saepe, expedita in.",
      invalidMessage: 
      "Invalid property value",
    // "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio reiciendis a unde sapiente quidem consectetur. Obcaecati molestiae natus distinctio vel rem quaerat, veritatis neque aperiam fuga magni necessitatibus mollitia repellat voluptate error ipsam quos blanditiis voluptas totam? Saepe, expedita in.",
    //   "Could not set the DrawBuffer property. Invalid property value. Enter a value between 16000 and 104856"
    };
  },
};
</script>

<style>
.outer-error-div {
  border: 0.2px solid gray;
  min-width: 252px;
  width: fit-content;
  max-width: 415px;
  min-height: 168px;
  height: fit-content;
  box-shadow: 2px 2px lightgrey;
}
.header-error {
  display: grid;
  grid-template-columns: 87% 13%;
}
.error-body {
  display: grid;
  grid-template-columns: 1fr;
}
.body-center-error {
  display: grid;
  grid-template-columns: 20px 30px 4fr 20px;
}
.footer-error {
  display: grid;
  grid-template-columns: 1fr 85px 85px;
  background-color: rgb(238, 238, 238);
  height: 50px;
}
.footer-error > button {
  height: 25px;
  width: 75px;
  margin-top: 14px;
  box-shadow: 1px 1px gray;
}
.blank-body-div {
  height: 31px;
}
.left-right-gap {
  width: 20px;
}
span {
  font-size: 13px;
  padding-left: 7px;
  padding-top: 3px;
}
.error-message {
  padding: 6px;
  font-size: 13px;
}

/* close style */
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
  float: right;
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