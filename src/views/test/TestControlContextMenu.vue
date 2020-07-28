<template>
  <div>
        <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">Services</span> <span class="caret"></span></a>
            <ul class="dropdown-menu">
                <li><a href="#">Service A</a></li>
                <li><a href="#">Service B</a></li>
                <li class="dropdown-submenu">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <span class="nav-label">Service C</span><span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Service C1</a></li>
                        <li><a href="#">Service C2</a></li>
                        <li><a href="#">Service C3</a></li>
                        <li><a href="#">Service C4</a></li>
                        <li><a href="#">Service C5</a></li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.outerborder {
  border: 0.5px solid black;
  height: 200px;
  width: 150px;
}
/* Menu */

.menu {
    position: absolute;
    width: 200px;
    padding: 2px;
    margin: 0;
    border: 1px solid #bbb;
    background: #eee;
    background: linear-gradient(to bottom, #fff 0%, #e5e5e5 100px, #e5e5e5 100%);
    z-index: 100;
    border-radius: 3px;
    box-shadow: 1px 1px 4px rgba(0,0,0,.2);
    opacity: 0;
    transform: translate(0, 15px) scale(.95);
    transition: transform 0.1s ease-out, opacity 0.1s ease-out;
    pointer-events: none;
}

.menu-item {
    display: block;
    position: relative;
    margin: 0;
    padding: 0;
    white-space: nowrap;
}

.menu-btn { 
    display: block;
    color: #444;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    cursor: pointer;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 8px;
    border-radius: 3px;
}

button.menu-btn {
    background: none;
    line-height: normal;
    overflow: visible;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    width: 100%;
    text-align: left;
}

a.menu-btn {
    outline: 0 none;
    text-decoration: none;
}

.menu-text {
    margin-left: 25px;
}

.menu-btn .fa {
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
}

.menu-item:hover > .menu-btn { 
    color: #fff; 
    outline: none; 
    background-color: #2E3940;
    background: linear-gradient(to bottom, #5D6D79, #2E3940);
    border: 1px solid #2E3940;
}

.menu-item-disabled {
    opacity: .5;
    pointer-events: none;
}

.menu-item-disabled .menu-btn {
    cursor: default;
}

.menu-separator {
    display:block;
    margin: 7px 5px;
    height:1px;
    border-bottom: 1px solid #fff;
    background-color: #aaa;
}

.menu-item-submenu::after {
    content: "";
    position: absolute;
    right: 6px;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
}

.menu-item-submenu:hover::after {
    border-left-color: #fff;
}

.menu .menu {
    top: 4px;
    left: 99%;
}

.menu-show,
.menu-item:hover > .menu {
    opacity: 1;
    transform: translate(0, 0) scale(1);
    pointer-events: auto;
}

.menu-item:hover > .menu {
    transition-delay: 300ms;
}

</style>