<template>
  <div
    class="svgimage"
    v-html="require(`!html-loader!./../assets/${this.name}`)">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
  name: 'FdSvgImage'
})
export default class UseSvgImage extends Vue {
  @Prop({ type: String, required: true }) private name!: string;
}
</script>

<style lang="scss" scoped>
</style>
