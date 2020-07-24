<template>
  <div class="rename-div-1">
        <div class="remane-header-div">
            Rename
            <button style="float:right">X</button>
        </div>
        <hr style="margin: 1px;">
        <br>
        <div class="wrapper">
            <span>
                Caption:
            </span>
            <div>
                <input type="text">

            </div>
            <span>
                Accelerator Key:
            </span>
            <div>
                <input type="text" style="width:10%">

            </div>
            <span>
                Control Tip Text:
            </span>
            <div>
                <input type="text">

            </div>
            <div>

            </div>
            <div>
                <input type="Button" value="OK" style="width:60px; box-shadow: 1px 1px; border: 0.5px solid gray ;">
                <input type="Button" value="Cancel" style="width:60px; box-shadow: 1px 1px; border: 0.5px solid gray ;">
                <!-- <button style="width: 50px;">
                    OK
                </button><button>
                    Cancel
                </button> -->

            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper {
        display: grid;
        grid-template-columns: 50% 50%;
        /* grid-gap: 1em; */
        grid-row-gap: 1em;
    }

    .rename-div-1 {
        border: 1px solid gray;
        height: 180px;
        width: 270px;
        background-color: rgb(238, 238, 238);
    }

    .remane-header-div {
        height: 20px;
        background-color: white;
        font-size: 13px;
    /* postion: absolute; */
    padding-left: 5px;
    }

    .wrapper>span {
        font-size: 12px;
        font-family: courier;
        padding-left: 5px;
    }

    .wrapper>div>input {
        width: 120px;
        border: none;
        box-shadow: -1px -1px;
    }
</style>