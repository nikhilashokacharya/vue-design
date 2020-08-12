<template>
  <div class="outer-scroll">
    <div class="inner-scroll"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.outer-scroll {
  border: none;
  height: 100px;
  width: 120px;
  overflow-y: scroll;
}

.inner-scroll {
  width: fit-content;
  height: calc(100% + 100px);
}

::-webkit-scrollbar {
  width: 20px;
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
::-webkit-scrollbar-button:single-button:vertical:decrement {
  background-image: url("../../assets/controls pictures/triangle-up-img.png");
  background-size: 10px;
  background-position: center;
  background-repeat: no-repeat;
  /* border-color: lightgrey; */
}

/* Down */
::-webkit-scrollbar-button:single-button:vertical:increment {
  background-image: url("../../assets/controls pictures/triangle-down-img.png");
  background-size: 10px;
  background-position: center;
  background-repeat: no-repeat;
  /* border-color: lightgrey; */
}

::-webkit-scrollbar-track-piece {
  background: rgb(238, 238, 238);
}

::-webkit-scrollbar-thumb {
  background: #eee;
  border: 1px solid lightgray;
  border-right-color: gray;
  border-bottom-color: gray;
}
</style>