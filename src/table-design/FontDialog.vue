<template>
  <div>
    <div class="box grid-design">
      <input type="text" id="enter" class="font-input"/>
      <a href="#popup12">
        <button :style="{height: '17px',
    padding: '0px',
    paddingLeft: '1px',
    paddingRight: '2px',
    border: '1px solid white',
    borderRightColor: 'gray',
    borderBottomColor: 'gray',
    borderLeftColor: 'lightgray',
    borderTopColor: 'lightgray',
    outline: 'none',
    marginLeft: '-3px'}">...</button>
      </a>
    </div>
    <div id="popup12" class="overlay">
      <div class="font-div popup">
        <div class="font-header">
          <span class="span-style">Font</span>
          <!-- <button style="float:right">X</button> -->
          <a class="close" href="#">
            <!-- <button style="float:right;position:absolute">&times;</button> -->
            <button class="ui-btn close">
              <svg viewBox="0 0 10 10">
                <polygon
                  points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1"
                />
              </svg>
            </button>
          </a>
        </div>
        <hr style="margin:0px" />
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
                  <div
                    style="font-family:Cambria Math"
                    @click="fontValue('Cambria Math')"
                  >Cambria Math</div>
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
                  <div
                    style="font-family:Segoe Script"
                    @click="fontValue('Segoe Script')"
                  >Segoe Script</div>
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
                  <div
                    style="font-family:Sitka Banner"
                    @click="fontValue('Sitka Banner')"
                  >Sitka Banner</div>
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
                  <div
                    style="font-family:Trebuchet MS"
                    @click="fontValue('Trebuchet MS')"
                  >Trebuchet MS</div>
                  <div style="font-family:Verdana" @click="fontValue('Verdana')">Verdana</div>
                  <div style="font-family:Webdings" @click="fontValue('Webdings')">Webdings</div>
                  <div style="font-family:Wingdings" @click="fontValue('Wingdings')">Wingdings</div>
                </div>
              </div>
              <div>
                <div class="fieldset" style="height:70px;margin-top: 33px;">
                  <h1>
                    <span>Effects</span>
                  </h1>
                  <input
                    type="checkbox"
                    style="width:12px;margin-top: 0px;"
                    id="checkbox1"
                    name="StrikeOut"
                    value="StrikeOut"
                    @click="myFunction"
                  />
                  <label for="checkbox1">StrikeOut</label>
                  <br />
                  <input
                    type="checkbox"
                    id="checkbox2"
                    style="width:12px;margin-top: 0px;"
                    name="Underline"
                    value="Underline"
                    @click="myFunction"
                  />
                  <label for="checkbox2">Underline</label>
                </div>
              </div>
            </div>
            <div class="wrapper-2">
              <div class="wrapper-20">
                <div>
                  Font Style:
                  <br />
                  <input type="text" class="font-input-2" :value="this.fontStyle" />
                  <br />
                  <div class="font-second-frame">
                    <div v-if="this.font==='Arial'">
                      <div :style="{'font-family':font}" @click="styleValue('Regular')">Regular</div>
                      <div
                        :style="{'font-family':font,'font-style':'italic'}"
                        @click="styleValue('italic')"
                      >Italic</div>
                      <div
                        :style="{'font-family':font,'font-weight':'bold'}"
                        @click="styleValue('Bold')"
                      >Bold</div>
                      <div
                        :style="{'font-family':font,'font-weight':'bold','font-style':'italic'}"
                        @click="styleValue('Bold Italic')"
                      >Bold Italic</div>
                      <div
                        :style="{'font-family':font,'font-weight':'900'}"
                        @click="styleValue('Black')"
                      >Black</div>
                      <div
                        :style="{'font-family':font,'font-weight':'900','font-style':'Oblique'}"
                        @click="styleValue('Black Oblique')"
                      >Black Oblique</div>
                    </div>
                    <div v-if="this.font==='Bahnschrift'">
                      <div
                        :style="{'font-family':font,'font-weight':'lighter','font-stretch':'condensed'}"
                        @click="styleValue('Light Condensed')"
                      >Light Condensed</div>
                      <div
                        :style="{'font-family':font,'font-weight':'lighter','font-stretch':'semi-condensed'}"
                        @click="styleValue('Light SemiCondensed')"
                      >Light SemiCondensed</div>
                      <div
                        :style="{'font-family':font,'font-weight':'lighter'}"
                        @click="styleValue('Light')"
                      >Light</div>
                      <div
                        :style="{'font-family':font,'font-weight':'300','font-stretch':'condensed'}"
                        @click="styleValue('SemiLight Condensed')"
                      >SemiLight Condensed</div>
                      <div
                        :style="{'font-family':font,'font-weight':'300','font-stretch':'semi-condensed'}"
                        @click="styleValue('SemiLight SemiCondensed')"
                      >SemiLight SemiCondensed</div>
                      <div
                        :style="{'font-family':font,'font-weight':'300'}"
                        @click="styleValue('SemiLight')"
                      >SemiLight</div>
                      <div
                        :style="{'font-family':font,'font-stretch':'condensed'}"
                        @click="styleValue('Condensed')"
                      >Condensed</div>
                      <div
                        :style="{'font-family':font,'font-stretch':'semi-condensed'}"
                        @click="styleValue('SemiCondensed')"
                      >SemiCondensed</div>
                      <div :style="{'font-family':font}" @click="styleValue('Regular')">Regular</div>
                      <div
                        :style="{'font-family':font,'font-weight':'600','font-stretch':'condensed'}"
                        @click="styleValue('SemiBold Condensed')"
                      >SemiBold Condensed</div>
                      <div
                        :style="{'font-family':font,'font-weight':'600','font-stretch':'semi-condensed'}"
                        @click="styleValue('SemiBold SemiCondensed')"
                      >SemiBold SemiCondensed</div>
                      <div
                        :style="{'font-family':font,'font-weight':'600'}"
                        @click="styleValue('SemiBold')"
                      >SemiBold</div>
                      <div
                        :style="{'font-family':font,'font-weight':'bold','font-stretch':'condensed'}"
                        @click="styleValue('Bold Condensed')"
                      >Bold Condensed</div>
                      <div
                        :style="{'font-family':font,'font-weight':'bold','font-stretch':'semi-condensed'}"
                        @click="styleValue('Bold SemiCondensed')"
                      >Bold SemiCondensed</div>
                      <div
                        :style="{'font-family':font,'font-weight':'bold'}"
                        @click="styleValue('Bold')"
                      >Bold</div>
                    </div>
                    <div v-if="this.font==='Franklin Gothic'">
                      <div
                        :style="{'font-family':font,'font-stretch':'extra-condensed'}"
                        @click="styleValue('Medium')"
                      >Medium</div>
                      <div
                        :style="{'font-family':font,'font-stretch':'extra-condensed','font-style':'italic'}"
                        @click="styleValue('Medium Italic')"
                      >Medium Italic</div>
                      <div
                        :style="{'font-family':font,'font-weight':'bold'}"
                        @click="styleValue('Bold')"
                      >Bold</div>
                      <div
                        :style="{'font-family':font,'font-weight':'bold','font-style':'italic'}"
                        @click="styleValue('Italic Bold')"
                      >Italic Bold</div>
                    </div>
                    <div v-if="this.font==='Helvetica'">
                      <div
                        :style="{'font-family':font,'font-stretch':'ultra-condensed'}"
                        @click="styleValue('Narrow')"
                      >Narrow</div>
                      <div
                        :style="{'font-family':font,'font-stretch':'ultra-condensed','font-style':'italic'}"
                        @click="styleValue('Narrow Italic')"
                      >Narrow Italic</div>
                      <div
                        :style="{'font-family':font,'font-stretch':'ultra-condensed','font-weight':'bold'}"
                        @click="styleValue('Narrow Bold')"
                      >Narrow Bold</div>
                      <div
                        :style="{'font-family':font,'font-stretch':'ultra-condensed','font-style':'italic','font-weight':'bold'}"
                        @click="styleValue('Narrow Bold Italic')"
                      >Narrow Bold Italic</div>
                    </div>
                    <div v-if="this.font==='Segoe UI'">
                      <div
                        :style="{'font-family':font,'font-weight':'lighter'}"
                        @click="styleValue('Light')"
                      >Light</div>
                      <div
                        :style="{'font-family':font,'font-weight':'lighter','font-style':'italic'}"
                        @click="styleValue('Light Italic')"
                      >Light Italic</div>
                      <div
                        :style="{'font-family':font,'font-weight':'300'}"
                        @click="styleValue('Semilight')"
                      >Semilight</div>
                      <div
                        :style="{'font-family':font,'font-weight':'300','font-style':'italic'}"
                        @click="styleValue('Semilight Italic')"
                      >Semilight Italic</div>
                      <div :style="{'font-family':font}" @click="styleValue('Regular')">Regular</div>
                      <div
                        :style="{'font-family':font,'font-style':'italic'}"
                        @click="styleValue('Italic')"
                      >Italic</div>
                      <div
                        :style="{'font-family':font, 'font-weight':'600'}"
                        @click="styleValue('Semibold')"
                      >Semibold</div>
                      <div
                        :style="{'font-family':font, 'font-weight':'600','font-style':'italic'}"
                        @click="styleValue('Semibold Italic')"
                      >Semibold Italic</div>
                      <div
                        :style="{'font-family':font,'font-weight':'bold'}"
                        @click="styleValue('Bold')"
                      >Bold</div>
                      <div
                        :style="{'font-family':font,'font-weight':'bold','font-style':'italic'}"
                        @click="styleValue('Bold Italic')"
                      >Bold Italic</div>
                      <div
                        :style="{'font-family':font, 'font-weight':'900'}"
                        @click="styleValue('Black')"
                      >Black</div>
                      <div
                        :style="{'font-family':font, 'font-weight':'900','font-style':'italic'}"
                        @click="styleValue('Black Italic')"
                      >Black Italic</div>
                    </div>
                    <div v-if="this.font==='System'">
                      <div
                        :style="{'font-family':font,'font-weight':'bold'}"
                        @click="styleValue('Bold')"
                      >Bold</div>
                      <div
                        :style="{'font-family':font,'font-weight':'bold','font-style':'oblique'}"
                        @click="styleValue('Bold Oblique')"
                      >Bold Oblique</div>
                    </div>
                    <div v-if="this.testFont1.includes(this.font)">
                      <div :style="{'font-family':font}" @click="styleValue('Regular')">Regular</div>
                      <div
                        :style="{'font-family':font,'font-style':'italic'}"
                        @click="styleValue('Italic')"
                      >Italic</div>
                      <div
                        :style="{'font-family':font,'font-weight':'bold'}"
                        @click="styleValue('Bold')"
                      >Bold</div>
                      <div
                        :style="{'font-family':font,'font-weight':'bold','font-style':'italic'}"
                        @click="styleValue('Bold Italic')"
                      >Bold Italic</div>
                    </div>
                    <div v-if="this.testFont2.includes(this.font)">
                      <div :style="{'font-family':font}" @click="styleValue('Regular')">Regular</div>
                      <div
                        :style="{'font-family':font,'font-style':'oblique'}"
                        @click="styleValue('Oblique')"
                      >Oblique</div>
                      <div
                        :style="{'font-family':font,'font-weight':'bold'}"
                        @click="styleValue('Bold')"
                      >Bold</div>
                      <div
                        :style="{'font-family':font,'font-weight':'bold','font-style':'oblique'}"
                        @click="styleValue('Bold Oblique')"
                      >Bold Oblique</div>
                    </div>
                    <div v-if="this.testFont3.includes(this.font)">
                      <div
                        :style="{'font-family':font,'font-weight':'lighter'}"
                        @click="styleValue('Light')"
                      >Light</div>
                      <div
                        :style="{'font-family':font,'font-weight':'lighter','font-style':'italic'}"
                        @click="styleValue('Light Italic')"
                      >Light Italic</div>
                      <div :style="{'font-family':font}" @click="styleValue('Regular')">Regular</div>
                      <div
                        :style="{'font-family':font,'font-style':'italic'}"
                        @click="styleValue('Italic')"
                      >Italic</div>
                      <div
                        :style="{'font-family':font,'font-weight':'bold'}"
                        @click="styleValue('Bold')"
                      >Bold</div>
                      <div
                        :style="{'font-family':font,'font-weight':'bold','font-style':'italic'}"
                        @click="styleValue('Bold Italic')"
                      >Bold Italic</div>
                    </div>
                  </div>
                </div>
                <div>
                  Size:
                  <br />
                  <input type="text" class="font-input-3" :value="this.size" />
                  <br />
                  <div class="font-third-frame">
                    <div v-for="size11 in size1" :key="size11">
                      <div @click="sizeValue(`${size11}`)">{{size11}}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="wrapper-21">
                <div class="fieldset" style="width:192px">
                  <h1>
                    <span>Sample</span>
                  </h1>
                  <div
                    :style="{'font-family':`${this.font}`,'text-decoration':`${this.dataDecorator}`}"
                  >AaBbYyZz</div>
                </div>
              </div>
              <div class="wrapper22">
                Script:
                <select style="width:210px;">
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
              <div class="blank-div"></div>
              <div style="height:0px">
                <button
                  style="width:100%;border: 1px solid white;
    box-shadow: -1px -1px grey;"
                >OK</button>
              </div>
              <div>
                <button
                  style="width:100%;border: 1px solid white;
    box-shadow: -1px -1px grey;"
                >Cancel</button>
              </div>
              <div class="blank-div"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: 8,
      font: "Arial",
      fontStyle: "Regular",
      dataDecorator: "",
      //   hello:"40px",
      size1: [8, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72],
      testFont1: [
        "Cambria",
        "Comic Sans MS",
        "Consolas",
        "Constantia",
        "Courier New",
        "Georgia",
        "Palatino Linotype",
        "Sitka Banner",
        "Sitka Display",
        "Sitka Heading",
        "Sitka Small",
        "Sitka Subheading",
        "Sitka Text",
        "Solid Edge ANSI",
        "Solid Edge ISO",
        "Times New Roman",
        "Trebuchet MS",
        "Verdana",
      ],
      testFont2: [
        "Cambria Math",
        "Courier",
        "Fixedsys",
        "Gabriola",
        "HoloLens MDL2 Assets",
        "IGES 1001",
        "IGES 1002",
        "IGES 1003",
        "Impact",
        "Ink Free",
        "Lucida Console",
        "Lucida Sans Unicode",
        "Microsoft Sans Serif",
        "Modern",
        "MS Sans Serif",
        "MS Serif",
        "Roman",
        "SEGDT",
        "Segoe MDL2 Assets",
        "Segoe Print",
        "Segoe Script",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "SEMonotxt",
        "SERomand",
        "SERomans",
        "SESimplex",
        "SETxt",
        "Small Fonts",
        "Solid Edge ANSI1 Symbols",
        "Solid Edge ANSI2 Symbols",
        "Solid Edge ANSI3 Symbols",
        "Solid Edge ISO1 Symbols",
        "Solid Edge ISO2 Symbols",
        "Solid Edge ISO3 Symbols",
        "Solid Edge Stencil",
        "Script",
        "Symbol",
        "Tahoma",
        "Terminal",
        "Webdings",
        "Wingdings",
      ],
      testFont3: ["Calibri", "Candara", "Corbel"],
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
    },
    styleValue(data) {
      this.fontStyle = data;
      console.log(this.fontStyle);
    },
    myFunction() {
      const checkBox1 = document.getElementById("checkbox1");
      const checkBox2 = document.getElementById("checkbox2");

      if (checkBox1.checked === true && checkBox2.checked === true) {
        this.dataDecorator = "underline line-through";
      } else if (checkBox1.checked === true) {
        this.dataDecorator = "line-through";
      } else if (checkBox2.checked === true) {
        this.dataDecorator = "underline";
      } else {
        this.dataDecorator = "";
      }
    },
  },
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  /*   background: url(http://www.shukatsu-note.com/wp-content/uploads/2014/12/computer-564136_1280.jpg) no-repeat; */
  background-size: cover;
  height: 100vh;
}
.font-input{
  border: none;
  outline: none;
  height: 14px;
}
h1 {
  text-align: center;
  font-family: Tahoma, Arial, sans-serif;
  color: #06d85f;
  margin: 80px 0;
}

.span-style {
  position: absolute;
  left: 6px;
  top: 6px;
}

.box {
  display: grid;
  grid-template-columns: 90% 10%;
  background: rgba(255, 255, 255, 0.2);
  text-align: right;
}

.button {
  font-size: 1em;
  padding: 10px;
  color: #fff;
  border: 2px solid #06d85f;
  border-radius: 20px/50px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-out;
}
.button:hover {
  background: #06d85f;
}

.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
  z-index: 110;
}
.overlay:target {
  visibility: visible;
  opacity: 1;
}

.popup {
  margin: 70px auto;
  /* padding: 20px; */
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
  transition: all 5s ease-in-out;
}

.popup h2 {
  margin-top: 0;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
}
.popup .close {
  position: absolute;
  /* top: 20px; */
  right: 0px;
  transition: all 200ms;
  /* font-size: 30px; */
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.popup .close:hover {
  color: #06d85f;
}
.popup .content {
  max-height: 30%;
  overflow: auto;
}

@media screen and (max-width: 700px) {
  .box {
    width: 70%;
  }
  .popup {
    width: 70%;
  }
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: 1em;
  padding-left: 10px;
  padding-top: 20px;
}
.wrapper-1 {
  margin-left: 0px;
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
  grid-gap: 1em;
}
.wrapper-21 {
  grid-row: 2/3;
  margin-top: 33px;
}
.nested {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 12px 29px;
  margin-right: 10px;
}
.nested > button {
  height: 25px;
}
.font-div {
  height: 360px;
  width: 480px;
  border: 1px solid gray;
  background: rgb(238, 238, 238);
}
.font-header {
  background-color: rgb(255, 255, 255);
  height: 25px;
}
.font-body {
  /* background-color:rgb(173, 170, 170); */
  font-size: 12px;
}
.font-input-1 {
  height: 13px;
  width: 147px;
  border: 1px solid white;
  box-shadow: -1px -1px grey;
  margin-left: 1px;
  margin-bottom: 3px;
}
.font-input-2 {
  width: 127px;
  height: 13px;
  border: 1px solid white;
  box-shadow: -1px -1px grey;
  margin-left: 1px;
  margin-bottom: 3px;
}
.font-input-3 {
  width: 57px;
  height: 13px;
  border: 1px solid white;
  box-shadow: -1px -1px grey;
  margin-left: 1px;
  margin-bottom: 3px;
}
.font-first-frame {
  width: 150px;
  border: 1px solid white;
  box-shadow: -1px -1px grey;
  background: white;
  height: 88px;
  overflow-y: scroll;
  margin-left: 1px;
}
.font-second-frame {
  width: 130px;
  border: 1px solid white;
  box-shadow: -1px -1px grey;
  background: white;
  height: 88px;
  overflow-y: scroll;
  margin-left: 1px;
}
.font-third-frame {
  width: 60px;
  border: 1px solid white;
  box-shadow: -1px -1px grey;
  background: white;
  height: 88px;
  overflow-y: scroll;
  margin-left: 1px;
}

/* fieldSet */
.fieldset {
  border: 0.5px groove threedface;
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