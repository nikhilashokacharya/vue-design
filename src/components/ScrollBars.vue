<template>
  <div id="wrapper">
    <div
      style="background:#212121;color:white;height:300px;width:600px;padding:8px;font-size:22px;overflow-y:scroll;"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Nullam ac tortor vitae purus faucibus ornare. Risus quis varius quam quisque id diam vel quam. In egestas erat imperdiet sed euismod nisi porta. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Mattis pellentesque id nibh tortor id. Ullamcorper a lacus vestibulum sed arcu non. Lectus mauris ultrices eros in cursus turpis. Ipsum dolor sit amet consectetur adipiscing elit duis tristique.
      Ultricies mi eget mauris pharetra et ultrices. Id aliquet risus feugiat in. Quam vulputate dignissim suspendisse in est. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Sed arcu non odio euismod lacinia. Sed blandit libero volutpat sed cras ornare arcu dui. Ultrices tincidunt arcu non sodales neque sodales. Arcu dictum varius duis at consectetur lorem donec massa sapien. Vitae purus faucibus ornare suspendisse sed. Morbi tristique senectus et netus et malesuada fames. Adipiscing diam donec adipiscing tristique. Euismod lacinia at quis risus sed. Pulvinar sapien et ligula ullamcorper malesuada proin libero.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>  
::-webkit-scrollbar {
  width: 16px;
  border: 5px solid white;
}

::-webkit-scrollbar-thumb {
  background-color: #b0b0b0;
  background-clip: padding-box;
  border: 0.05em solid #eeeeee;
}

::-webkit-scrollbar-track {
  background-color: #bbbbbb;
}
/* Buttons */
::-webkit-scrollbar-button:single-button {
  background-color: #bbbbbb;
  display: block;
  border-style: solid;
  height: 13px;
  width: 16px;
}
/* Up */
::-webkit-scrollbar-button:single-button:vertical:decrement {
  border-width: 0 8px 8px 8px;
  border-color: transparent transparent #555555 transparent;
}

::-webkit-scrollbar-button:single-button:vertical:decrement:hover {
  border-color: transparent transparent #777777 transparent;
}
/* Down */
::-webkit-scrollbar-button:single-button:vertical:increment {
  border-width: 8px 8px 0 8px;
  border-color: #555555 transparent transparent transparent;
}

::-webkit-scrollbar-button:vertical:single-button:increment:hover {
  border-color: #777777 transparent transparent transparent;
}
</style>