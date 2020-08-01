<template>
  <div>
      <div id="menu-bar">
          <ul class="main-menu">
              <li>
            View
            <ul>
              <li>Code</li>
              <li>object</li>
              <li class="separator"></li>
              <li>Objet Browser</li>
              <li class="separator"></li>
              <li>Immediate Window</li>
              <li>Locals Window</li>
              <li>Watch Window</li>
              <li>Call Stack</li>
              <li class="separator"></li>
              <li>Project Explorer</li>
              <li>Properties Window</li>
              <li class="separator"></li>
              <li>ToolBox</li>
              <li>Tab Order</li>
              <li>Microscoft Excel</li>
            </ul>
          </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
ul.main-menu li.separator  
{
    border-top: 1px solid #ddd; 
    margin-top: 5px;
    margin-bottom: 5px;
}
ul.main-menu
{
    list-style-type: none;
    margin: 0px 0px 10px 0px;
    padding: 0px;  
    z-index: 1000000;  
}
ul.main-menu > li
{
    margin: 0;
    display: inline;
    list-style-type: none;
    padding: 6px 4px 6px 6px;
    line-height: 28px;
    vertical-align: middle;
    cursor: default;
    outline: none;
    border-style: solid;
    border-width: 1px 1px 0 1px;
    border-color: transparent;
    z-index: 1000000;
}

ul.main-menu > li.active-menu
{
    background-color: #fff;
    border-color: #ccc;
    -webkit-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 1000000;
}

ul.main-menu ul li a
{
    color: #000;
    text-decoration: none;
    display: block;
    white-space: nowrap;
}
ul.main-menu li ul li a span
{
    font-size: 11px;
    color: #999;
    float:right;
    right: 10px;
    left: auto;
    position: absolute;
}

/* SUBMENU */
ul.main-menu > li  ul
{
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: none;
    border-width:1px;
    border-style: solid;
    border-color: #ccc;
    background-color: #fff;
    -webkit-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 1000000;
}
ul.main-menu li ul li
{
    display:list-item;
    margin: 0;
    line-height: 26px;
    padding-right: 40px;
    min-width: 100px;
    cursor: pointer;
    text-indent: 30px;
    white-space:nowrap;
    z-index: 1000000;
}
ul.main-menu li:hover
{
    background-color: whiteSmoke; /*#fef7cb;*/
}
ul.main-menu li.active-menu:hover
{
    background-color: #fff;
}
ul.main-menu li ul li.disabled, ul.main-menu li ul li.disabled:hover, ul.main-menu li ul li.disabled a
{
    color: #ddd;
    cursor:default;
    background-color: #fff;
}

ul.main-menu li.separator  
{
    border-top: 1px solid #ddd; 
    margin-top: 5px;
    margin-bottom: 5px;
}

.submenu 
{
    /* background-image: url(../images/menu-right-arrow.png); */
    background-repeat: no-repeat;
    background-position: right center;
}
</style>