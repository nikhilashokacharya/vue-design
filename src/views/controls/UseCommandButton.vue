<template>
  <div class="commanddiv">
    <div class="command-border" @click="toSelect">
      <a :class="isActive&&'span4'">
        <a :class="isActive&&'span3'">
          <a :class="isActive&&'span2'">
            <a :class="isActive&&'span1'">
              <button class="commandbutton"
              
              >CommandButton1</button>
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
    }
  }
};
</script>

<style scoped>
.commandbutton {
  width: 130px;
  height: 35px;
  border: none;
  box-shadow: 2px 2px gray;
  overflow: hidden;
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