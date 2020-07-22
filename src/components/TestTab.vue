<template>
  <div>
    <header>
      <h1>Tabs</h1>
      <nav>
        <ul>
          <li>
            Tab1
          </li>
          <li id="selected">
            Tab2
          </li>
        </ul>
      </nav>
    </header>

    <section id="content">
      <p>
        <!-- Big lovely oodles of content -->
      </p>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
nav li {
  display: inline;
  border: solid;
  border-width: 1px 1px 0 1px;
  margin: 0 5px 0 0;
}
nav li a {
  padding: 0 10px;
}
#content {
  border: 1px solid;
}
#selected {
  padding-bottom: 1px;
  background: white;
}
</style>