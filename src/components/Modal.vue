<template>
  <div>
    <div id="app"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="modal fade" id="myModal">
            <div class="modal-dialog modal-sm">
              <div class="modal-content">
                <div class="modal-header">
                  <h1>Title</h1>
                </div>
                <div class="modal-body">This is body</div>
                <div class="modal-footer">
                  <input class="btn btn-default" value="Close" />
                </div>
              </div>
            </div>
          </div>
          <a href="#" data-toggle="modal" data-target="#myModal">Open Modal</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

</style>