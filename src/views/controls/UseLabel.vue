<template>
  <div class="labeldiv">
    <div class="label-border" @click="toSelect">
      <a :class="isActive&&'span4'">
        <a :class="isActive&&'span3'">
          <a :class="isActive&&'span2'">
            <a :class="isActive&&'span1'">
              <input class="label" value="Label1" />
            </a>
          </a>
        </a>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toSelect() {
      this.isActive = true;
    },
  },
};
</script>
<style scoped>
.labeldiv {
  position: relative;
  /* height: 400px; */
}
.label {
  position: inherit;
  /* top:0px; */
  border: none;
  width: 130px;
  background-color: rgb(238, 238, 238);
  height: 30px;
  text-align: left;
}
.label-border {
  border: none;
  width: 130px;
  background-color: rgb(238, 238, 238);
  height: 30px;
}
.span1 {
  outline: dotted 1.5px black;
  outline-offset: 3px;
  width: auto;
}
.span2 {
  outline: dotted 1.5px black;
  outline-offset: 4px;
  width: auto;
}
.span3 {
  outline: dotted 1.5px black;
  outline-offset: 4px;
  width: auto;
}
.span4 {
  outline: dotted 1.5px black;
  outline-offset: 5px;
  width: auto;
}
</style>