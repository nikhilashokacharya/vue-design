<template>
  <div>
      <!-- <ul class="top-level-menu1">
    <li> -->
        <!-- <ul class="top-level-menu">
            <li><a href="#">Align</a>
            <ul class="third-level-menu">
                    <li><a href="#">Lefts</a></li>
                    <li><a href="#">Centers</a></li>
                    <li><a href="#">Rights</a></li>
                    <hr>
                    <li><a href="#">Tops</a></li>
                    <li><a href="#">Middles</a></li>
                    <li><a href="#">Bottoms</a></li>
                    <hr>
                    <li><a href="#">To Grids</a></li>
                </ul></li>
            </ul> -->
             <ul class="top-level-menu1">
            <li>
                <a href="#">Make Same Size</a>
                <ul class="third-level-menu">
                    <li><a href="#">Width</a></li>
                    <li><a href="#">Height</a></li>
                    <li><a href="#">Both</a></li>
                </ul>
            </li>
             </ul>
    <!-- </li>
    </ul> -->
  </div>
</template>

<script>
export default {

}
</script>

<style>
/* Menu Styles */

.third-level-menu
{
    position: absolute;
    top: 0;
    right: -150px;
    width: 150px;
    list-style: none;
    padding: 0;
    margin: 0;
    display: none;
    border: 1px solid black;
}

.third-level-menu > li
{
    height: 30px;
}
.third-level-menu > li:hover { background: blue; }

.top-level-menu1
{
    list-style: none;
    padding: 0;
    margin: 0;
}

.top-level-menu1 > li
{
    position: absolute;
    float: left;
    height: 30px;
    width: 150px;
    /* background: #999999; */
}
.top-level-menu1 > li:hover { background:blue }

.top-level-menu1 li:hover > ul
{
    /* On hover, display the next level's menu */
    display: inline;
}


/* Menu Link Styles */

.top-level-menu1 a /* Apply to all links inside the multi-level menu */
{
    font-size:  14px ;
    font-family: 'Arial';
    color: black;
    text-decoration: none;
    padding: 0 0 0 10px;
    
    /* Make the link cover the entire list item-container */
    display: block;
    line-height: 30px;
}
.top-level-menu1 a:hover { color: black }
</style>