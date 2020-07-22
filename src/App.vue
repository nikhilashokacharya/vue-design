<template>
  <div id="app">
    <Modal />
    <hr>
    <TabOrderModal />
    <hr>
    <ColorPallate />
    <!-- <hr />
    <TestModal /> -->
    <!-- <Label />
    <hr />
    <textBox />TextBox
    <hr />
    <checkBox />
    <hr />
    <OptionButton />
    <hr />
    <ToggleButton />
    <hr />
    <ListBox />ListBox
    <hr />
    <CommandButton />
    <hr />
    <TabStrip />
    <hr />
    <MultiPage />
    <hr />
    <Frame />
    <hr />
    <SpinButton />
SpinButton
    <hr />
    <Picture />
Picture
    <hr />
    <ComboBox />
    <hr />
    <RefEdit />
    <hr />

    <TestRefEdit />
    <hr />
    <TestComboBox />
    <hr />
    <TestScroll1 /> -->
    <div style="padding-bottom:100px"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TextBox from "./components/TextBox.vue";
import CheckBox from "./components/CheckBox.vue";
import OptionButton from "./components/OptionButton.vue";
import ToggleButton from "./components/ToggleButton.vue";
import ListBox from "./components/ListBox.vue";
import TabStrip from "./components/TabStrip.vue";
import MultiPage from "./components/MultiPage.vue";
import Frame from "./components/Frame.vue";
import SpinButton from "./components/SpinButton.vue";
import Picture from "./components/Picture.vue";
import Label from "./components/Label.vue";
import CommandButton from "./components/CommandButton.vue";
import ScrollBars from "./components/ScrollBars.vue";
import ComboBox from "./components/ComboBox.vue";
import RefEdit from "./components/RefEdit.vue";
// import TestTab from "./components/TestTab.vue";
import TestRefEdit from "./components/TestRefEdit.vue";
import TestComboBox from "./components/TestComboBox.vue";
import TestScroll1 from "./components/TestScroll1.vue";
import ColorPallate from "./components/ColorPallate.vue";
import Modal from "./components/Modal.vue";
import TestModal from './components/TestModal.vue';
import TabOrderModal from './components/TabOrderModal.vue';



@Component({
  components: {
    TextBox,
    CheckBox,
    OptionButton,
    ToggleButton,
    ListBox,
    TabStrip,
    MultiPage,
    ScrollBars,
    Frame,
    SpinButton,
    Picture,
    Label,
    CommandButton,
    ComboBox,
    RefEdit,
    // TestTab,
    TestRefEdit,
    TestComboBox,
    TestScroll1,
    ColorPallate,
    Modal,
    TestModal,
    TabOrderModal
  }
})
export default class App extends Vue {}
</script>

<style>
</style>
