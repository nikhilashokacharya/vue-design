<template>
  <div>
    <div class="outer">
      <div>
        <i style="font-size:15px" class="fa">&#xf0c4;</i>
        <span>
          Cu<u>t</u>
        </span>
      </div>
      <div>
        <i style="font-size:15px" class="fa">&#xf0c5;</i>
        <span>
          <u>C</u>opy
        </span>
      </div>
      <div>
        <i style="font-size:15px" class="fa">&#xf0ea;</i>
        <span>
          <u>P</u>aste
        </span>
      </div>
      <div>
        <u>D</u>elete
      </div>
      <hr />
      <div>
        <i style="font-size:15px" class="fa">&#xf187;</i>
        <span>
          Prope<u>r</u>ties
        </span>
      </div>
      <div>
        View C<u>o</u>de
      </div>
      <hr />
      <div class="dropdown" @click="selectedAlign">
        <u>A</u>lign
        <ul class="align dopdown-content" v-if="selectAlign">
          <li><u>L</u>efts</li>
          <li><u>C</u>enters</li>
          <li><u>R</u>ights</li>
          <hr />
          <li><u>T</u>ops</li>
          <li><u>M</u>iddles</li>
          <li><u>B</u>ottoms</li>
          <hr />
          <li>to <u>G</u>rid</li>
        </ul>
      </div>
      <br />
      <div class="dropdown" @click="selectedMakeSameSize">
        <u>M</u>ake Same Size
        <div class="makeSameSize dopdown-content" v-if="selectMakeSameSize">
          <div><u>W</u>idth</div>
          <div><u>H</u>eight</div>
          <div><u>B</u>oth</div>
        </div>
      </div>
      <hr />
      <div>
        <u>G</u>roup
      </div>
      <div>
        Bring <u>F</u>orward
      </div>
      <div>
        Send Back<u>w</u>ard
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectAlign: false,
      selectMakeSameSize: false
    };
  },
  methods: {
    selectedAlign() {
      this.selectAlign = !this.selectAlign;
    },
    selectedMakeSameSize() {
      this.selectMakeSameSize = !this.selectMakeSameSize;
    }
  }
};
</script>

<style scoped>
.outer {
  border: 0.5px solid black;
  box-shadow: 1px 1px;
  width: 140px;
  height: auto;
  /* font-family: "Candara"; */
  font-size: 13px;
  /* position: absolute; */

}
.outer > div {
  margin-top: 3px;
  margin-bottom: 3px;
  margin-left: 5px;
  
}
.outer > div:hover {
  background-color: rgb(146, 184, 255);
  /* border: 1px solid rgb(69, 155, 253); */
}
.outer > div > span {
  margin-left: 5px;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  /* z-index: 1; */
}
.align {
  border: 0.5px solid black;
  box-shadow: 1px 1px;
  width: 140px;
  height: 200px;
  font-family: "Candara";
  font-size: 13px;
  margin-left: 140px;
  height: auto;
}
.makeSameSize {
  border: 0.5px solid black;
  box-shadow: 1px 1px;
  width: 140px;
  height: 200px;
  font-family: "Candara";
  font-size: 13px;
  margin-left: 140px;
  margin-top: 2px;
  height: auto;
}
</style>