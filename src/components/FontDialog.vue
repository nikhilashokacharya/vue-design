<template>
  <div class="font-div">
    <div class="font-header">
      Font
      <button style="float:right">X</button>
    </div>
    <hr style="margin:3px" />
    <div class="font-body">
      <div class="wrapper">
        <div class="wrapper-1">
          <div>
            Font:
            <br />
            <input type="text" class="font-input-1" :value="this.font" />
            <br />
            <div class="font-first-frame">
              <div style="font-family:Arial" @click="fontValue('Arial')">Arial</div>
              <div style="font-family:Bahnschrift" @click="fontValue('Bahnschrift')">Bahnschrift</div>
              <div style="font-family:Calibri" @click="fontValue('Calibri')">Calibri</div>
              <div style="font-family:Cambria" @click="fontValue('Cambria')">Cambria</div>
              <div style="font-family:Cambria Math" @click="fontValue('Cambria Math')">Cambria Math</div>
              <div style="font-family:Candara" @click="fontValue('Candara')">Candara</div>
              <div
                style="font-family:Comic Sans MS"
                @click="fontValue('Comic Sans MS')"
              >Comic Sans MS</div>
              <div style="font-family:Consolas" @click="fontValue('Consolas')">Consolas</div>
              <div style="font-family:Constantia" @click="fontValue('Constantia')">Constantia</div>
              <div style="font-family:Corbel" @click="fontValue('Corbel')">Corbel</div>
              <div style="font-family:Courier" @click="fontValue('Courier')">Courier</div>
              <div style="font-family:Courier New" @click="fontValue('Courier New')">Courier New</div>
              <div style="font-family:Fixedsys" @click="fontValue('Fixedsys')">Fixedsys</div>
              <div
                style="font-family:Franklin Gothic"
                @click="fontValue('Franklin Gothic')"
              >Franklin Gothic</div>
              <div style="font-family:Gabriola" @click="fontValue('Gabriola')">Gabriola</div>
              <div style="font-family:Georgia" @click="fontValue('Georgia')">Georgia</div>
              <div style="font-family:Helvetica" @click="fontValue('Helvetica')">Helvetica</div>
              <div
                style="font-family:HoloLens MDL2 Assets"
                @click="fontValue('HoloLens MDL2 Assets')"
              >HoloLens MDL2 Assets</div>
              <div style="font-family:IGES 1001" @click="fontValue('IGES 1001')">IGES 1001</div>
              <div style="font-family:IGES 1002" @click="fontValue('IGES 1002')">IGES 1002</div>
              <div style="font-family:IGES 1003" @click="fontValue('IGES 1003')">IGES 1003</div>
              <div style="font-family:Impact" @click="fontValue('Impact')">Impact</div>
              <div style="font-family:Ink Free" @click="fontValue('Ink Free')">Ink Free</div>
              <div
                style="font-family:Lucida Console"
                @click="fontValue('Lucida Console')"
              >Lucida Console</div>
              <div
                style="font-family:Lucida Sans Unicode"
                @click="fontValue('Lucida Sans Unicode')"
              >Lucida Sans Unicode</div>
              <div
                style="font-family:Microsoft Sans Serif"
                @click="fontValue('Microsoft Sans Serif')"
              >Microsoft Sans Serif</div>
              <div style="font-family:Modern" @click="fontValue('Modern')">Modern</div>
              <div
                style="font-family:MS Sans Serif"
                @click="fontValue('MS Sans Serif')"
              >MS Sans Serif</div>
              <div style="font-family:MS Serif" @click="fontValue('MS Serif')">MS Serif</div>
              <div
                style="font-family:Palatino Linotype"
                @click="fontValue('Palatino Linotype')"
              >Palatino Linotype</div>
              <div style="font-family:Roman" @click="fontValue('Roman')">Roman</div>
              <div style="font-family:Script" @click="fontValue('Script')">Script</div>
              <div style="font-family:SEGDT" @click="fontValue('SEGDT')">SEGDT</div>
              <div
                style="font-family:Segoe MDL2 Assets"
                @click="fontValue('Segoe MDL2 Assets')"
              >Segoe MDL2 Assets</div>
              <div style="font-family:Segoe Print" @click="fontValue('Segoe Print')">Segoe Print</div>
              <div style="font-family:Segoe Script" @click="fontValue('Segoe Script')">Segoe Script</div>
              <div style="font-family:Segoe UI" @click="fontValue('Segoe UI')">Segoe UI</div>
              <div
                style="font-family:Segoe UI Emoji"
                @click="fontValue('Segoe UI Emoji')"
              >Segoe UI Emoji</div>
              <div
                style="font-family:Segoe UI Symbol"
                @click="fontValue('Segoe UI Symbol')"
              >Segoe UI Symbol</div>
              <div style="font-family:SEMonotxt" @click="fontValue('SEMonotxt')">SEMonotxt</div>
              <div style="font-family:SERomand" @click="fontValue('SERomand')">SERomand</div>
              <div style="font-family:SERomans" @click="fontValue('SERomans')">SERomans</div>
              <div style="font-family:SESimplex" @click="fontValue('SESimplex')">SESimplex</div>
              <div style="font-family:SETxt" @click="fontValue('SETxt')">SETxt</div>
              <div style="font-family:Sitka Banner" @click="fontValue('Sitka Banner')">Sitka Banner</div>
              <div
                style="font-family:Sitka Display"
                @click="fontValue('Sitka Display')"
              >Sitka Display</div>
              <div
                style="font-family:Sitka Heading"
                @click="fontValue('Sitka Heading')"
              >Sitka Heading</div>
              <div style="font-family:Sitka Small" @click="fontValue('Sitka Small')">Sitka Small</div>
              <div
                style="font-family:Sitka Subheading"
                @click="fontValue('Sitka Subheading')"
              >Sitka Subheading</div>
              <div style="font-family:Sitka Text" @click="fontValue('Sitka Text')">Sitka Text</div>
              <div style="font-family:Small Fonts" @click="fontValue('Small Fonts')">Small Fonts</div>
              <div
                style="font-family:Solid Edge ANSI"
                @click="fontValue('Solid Edge ANSI')"
              >Solid Edge ANSI</div>
              <div
                style="font-family:Solid Edge ANSI1 Symbols"
                @click="fontValue('Solid Edge ANSI1 Symbols')"
              >Solid Edge ANSI1 Symbols</div>
              <div
                style="font-family:Solid Edge ANSI2 Symbols"
                @click="fontValue('Solid Edge ANSI2 Symbols')"
              >Solid Edge ANSI2 Symbols</div>
              <div
                style="font-family:Solid Edge ANSI3 Symbols"
                @click="fontValue('Solid Edge ANSI3 Symbols')"
              >Solid Edge ANSI3 Symbols</div>
              <div
                style="font-family:Solid Edge ISO"
                @click="fontValue('Solid Edge ISO')"
              >Solid Edge ISO</div>
              <div
                style="font-family:Solid Edge ISO1 Symbols"
                @click="fontValue('Solid Edge ISO1 Symbols')"
              >Solid Edge ISO1 Symbols</div>
              <div
                style="font-family:Solid Edge ISO2 Symbols"
                @click="fontValue('Solid Edge ISO2 Symbols')"
              >Solid Edge ISO2 Symbols</div>
              <div
                style="font-family:Solid Edge ISO3 Symbols"
                @click="fontValue('Solid Edge ISO3 Symbols')"
              >Solid Edge ISO3 Symbols</div>
              <div
                style="font-family:Solid Edge Stencil"
                @click="fontValue('Solid Edge Stencil')"
              >Solid Edge Stencil</div>
              <div style="font-family:Symbol" @click="fontValue('Symbol')">Symbol</div>
              <div style="font-family:System" @click="fontValue('System')">System</div>
              <div style="font-family:Tahoma" @click="fontValue('Tahoma')">Tahoma</div>
              <div style="font-family:Terminal" @click="fontValue('Terminal')">Terminal</div>
              <div
                style="font-family:Times New Roman"
                @click="fontValue('Times New Roman')"
              >Times New Roman</div>
              <div style="font-family:Trebuchet MS" @click="fontValue('Trebuchet MS')">Trebuchet MS</div>
              <div style="font-family:Verdana" @click="fontValue('Verdana')">Verdana</div>
              <div style="font-family:Webdings" @click="fontValue('Webdings')">Webdings</div>
              <div style="font-family:Wingdings" @click="fontValue('Wingdings')">Wingdings</div>
            </div>
          </div>
          <div>
            <div class="fieldset" style="height:90px">
              <h1>
                <span>Effects</span>
              </h1>
              <input type="checkbox" id="decoration" name="StrinkeOut" value="StrinkeOut" />
              <label for="decoration">StrinkeOut</label>
              <br />
              <input type="checkbox" name="Underline" value="Underline" />
              <label for="decoration">Underline</label>
            </div>
          </div>
        </div>
        <div class="wrapper-2">
          <div class="wrapper-20">
            <div>
              Font Style:
              <br />
              <input type="text" class="font-input-2" />
              <br />
              <div class="font-second-frame">
                <div v-if="this.font==='Arial'">
                  <div>Regular</div>
                  <div>Italic</div>
                  <div>Bold</div>
                  <div>Bold Italic</div>
                  <div>Black</div>
                  <div>Black Oblique</div>
                </div>
                <div
                  v-else-if="this.font==='Cambria'||'Comic Sans MS'||'Consolas'||'Constantia'||'Courier New'||'Georgia'||'Palatino Linotype'||'Sitka Banner'||'Sitka Display'||'Sitka Heading'||'Sitka Small'||'Sitka Subheading'||'Sitka Text'||'Solid Edge ANSI'||'Solid Edge ISO'||'Times New Roman'||'Trebuchet MS'||'Verdana'"
                >
                  <div>Regular</div>
                  <div>Italic</div>
                  <div>Bold</div>
                  <div>Bold Italic</div>
                </div>
                <div v-else-if="this.font==='Webdings'">
                  <div>Regular</div>
                  <div>Oblique</div>
                  <div>Bold</div>
                  <div>Bold Oblique</div>
                </div>
              </div>
            </div>
            <div>
              Size:
              <br />
              <input type="text" class="font-input-3" :value="this.size" />
              <br />
              <div class="font-third-frame">
                <div @click="sizeValue('8')">8</div>
                <div @click="sizeValue('9')">9</div>
                <div @click="sizeValue('10')">10</div>
                <div @click="sizeValue('11')">11</div>
                <div @click="sizeValue('12')">12</div>
                <div @click="sizeValue('14')">14</div>
                <div @click="sizeValue('16')">16</div>
                <div @click="sizeValue('18')">18</div>
                <div @click="sizeValue('20')">20</div>
                <div @click="sizeValue('22')">22</div>
                <div @click="sizeValue('24')">24</div>
                <div @click="sizeValue('26')">26</div>
                <div @click="sizeValue('36')">36</div>
                <div @click="sizeValue('48')">48</div>
                <div @click="sizeValue('72')">72</div>
              </div>
            </div>
          </div>
          <div class="wrapper-21">
            <div class="fieldset">
              <h1>
                <span>Sample</span>
              </h1>AaBbYyZz
            </div>
          </div>
          <div class="wrapper22">
            Script:
            <select style="width:200px;">
              <option value="western">Western</option>
              <option value="greek">Greek</option>
              <option value="turkish">Turkish</option>
              <option value="baltic">Baltic</option>
              <option value="centralEuropean">CentralEuropean</option>
              <option value="cyrillic">Cyrillic</option>
              <option value="vietnamese">Vietnamese</option>
            </select>
          </div>
        </div>

        <div class="nested">
          <!-- <div></div> -->
          <div></div>
          <div style="height:0px">
            <button style="width:100%">OK</button>
          </div>
          <div>
            <button style="width:100%">Cancel</button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  data() {
    return {
      size: 8,
      font: "Arial"
    };
  },
  methods: {
    sizeValue(data) {
      this.size = data;
      console.log(this.size);
    },
    fontValue(data) {
      this.font = data;
      console.log(this.font);
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: 1em;
}
.wrapper-1 {
  margin-left: 10px;
  grid-template-columns: 1fr;
  font-style: bold;
}
.wrapper2 {
  grid-template-columns: 1fr 1fr;
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
}

.wrapper-3 {
  margin-right: 10px;
}
.wrapper-20 {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 2em;
}
.wrapper-21 {
  grid-row: 2/3;
}
.nested {
  display: grid;
  grid-template-columns: 1fr;
  margin-right: 10px;
}
.nested > button {
  height: 25px;
}
.font-div {
  height: 360px;
  width: 460px;
  border: 1px solid gray;
  background: rgb(238, 238, 238);
}
.font-header {
  background-color: rgb(255, 255, 255);
}
.font-body {
  /* background-color:rgb(173, 170, 170); */
  font-size: 12px;
}
.font-input-1 {
  height: 20px;
  width: 150px;
}
.font-input-2 {
  height: 20px;
  width: 110px;
}
.font-input-3 {
  height: 20px;
  width: 60px;
}
.font-first-frame {
  width: 150px;
  border: 1px solid gray;
  background: white;
  height: 152px;
  overflow-y: scroll;
}
.font-second-frame {
  width: 110px;
  height: 152px;
  border: 1px solid gray;
  background: white;
  overflow-y: scroll;
}
.font-third-frame {
  height: 152px;
  width: 60px;
  border: 1px solid gray;
  background: white;
  overflow-y: scroll;
}

/* fieldSet */
.fieldset {
  border: 2px groove threedface;
  border-top: none;
  padding: 0.5em;
  margin: 1em 2px;
}
.fieldset > h1 {
  font: 1em normal;
  margin: -1em -0.5em 0;
  grid-column: 2/4;
}
.fieldset > h1 > span {
  float: left;
  color: black;
}
.fieldset > h1:before {
  border-top: 2px groove threedface;
  content: " ";
  float: left;
  margin: 0.5em 2px 0 -1px;
  width: 0.75em;
}
.fieldset > h1:after {
  border-top: 2px groove threedface;
  content: " ";
  display: block;
  height: 1.5em;
  left: 2px;
  margin: 0 1px 0 0;
  overflow: hidden;
  position: relative;
  top: 0.5em;
}
</style>