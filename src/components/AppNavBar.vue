<template>
<div id="nav">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">  
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
       </button>

   <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#Books">Books</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#Slides">Slides</a>
      </li>    
      <li class="nav-item">
        <a class="nav-link" href="#Links">Cheatsheets</a>
      </li>       
    </ul>    
   </div>
</nav>
</div>
</template>

<script>
export default {
    name: "AppNavBar"
    
}
</script>

<style scoped>
#nav{
  z-index: 100;
  position: fixed;
  
  width: 100%;
  padding-top: 0px;
  
}
.mr-auto{
  margin-left: 106px;
}


</style>