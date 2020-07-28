<template>
  <div id="app">
    <UseCheckBox />
    <hr />
    <UseComboBox />
    <hr />
    <UseCommandButton />
    <hr />
    <UseFrame />
    <hr />
    <UseLabel />
    <hr />
    <UseListBox />
    <hr />
    <UseMultiPage />
    <hr />
    <UseOptionButton />
    <hr />
    <UsePicture />
    <hr />
    <UseRefEdit />
    <hr />
    <UseScroll />
    <hr />
    <UseSpinButton />
    <hr />
    <UseTabStrip />
    <hr />
    <UseTextBox />
    <hr />
    <UseToggleButton />
    <hr />
    <hr />
    <ControlContextMenu />
    <hr />
    <UserformContextMenu />
    <hr>
    <TestControlContextMenu />

    <div style="padding-bottom:100px"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UseCheckBox from "./views/controls/UseCheckBox.vue";
import UseComboBox from "./views/controls/UseComboBox.vue";
import UseCommandButton from "./views/controls/UseCommandButton.vue";
import UseFrame from "./views/controls/UseFrame.vue";
import UseLabel from "./views/controls/UseLabel.vue";

import UseListBox from "./views/controls/UseListBox.vue";
import UseMultiPage from "./views/controls/UseMultiPage.vue";
import UseOptionButton from "./views/controls/UseOptionButton.vue";
import UsePicture from "./views/controls/UsePicture.vue";
import UseRefEdit from "./views/controls/UseRefEdit.vue";

import UseScroll from "./views/controls/UseScroll.vue";
import UseSpinButton from "./views/controls/UseSpinButton.vue";
import UseTabStrip from "./views/controls/UseTabStrip.vue";
import UseTextBox from "./views/controls/UseTextBox.vue";
import UseToggleButton from "./views/controls/UseToggleButton.vue";

import ControlContextMenu from "./views/contextMenu/ControlContextMenu.vue";
import UserformContextMenu from "./views/contextMenu/UserformContextMenu.vue";

import TestControlContextMenu from "./views/test/TestControlContextMenu.vue";

@Component({
  components: {
    UseCheckBox,
    UseComboBox,
    UseCommandButton,
    UseFrame,
    UseLabel,
    UseListBox,
    UseMultiPage,
    UseOptionButton,
    UsePicture,
    UseRefEdit,
    UseScroll,
    UseSpinButton,
    UseTabStrip,
    UseTextBox,
    UseToggleButton,
    ControlContextMenu,
    UserformContextMenu,
    TestControlContextMenu
  }
})
export default class App extends Vue {}
</script>

<style>
</style>
