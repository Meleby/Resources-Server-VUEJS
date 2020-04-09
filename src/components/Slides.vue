<template>
<div id="fixing">
<div class="card container wrapper">
    <h5 class="card-header container-fluid ">3. Slides</h5>
    <div id="all-books-div">
                <div class="card-body form-row">
                    <div class="card col-md-2">
                      <img
                            src="../assets/images/02-slides/01-understanding-html5.jpg"
                            height="190"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        >
                          <div class="card-body">
                         
                          <p class="card-text">Understanding HTML5</p>
                          <a href="#" class="btn btn-success">Read More >></a>
                      </div>
                    </div>

                    <div class="card  col-md-2">
                     <img
                            src="../assets/images/02-slides/02-understanding-css3.jpg"
                            height="190"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        >  
                          <div class="card-body">
                          
                          <p class="card-text">Understanding CSS3</p>
                          <a href="#" class="btn btn-success">Read More >></a>
                      </div>
                    </div>

                    <div class="card  col-md-2">
                      <img
                            src="../assets/images/02-slides/03-understanding-javascript-2020.jpg"
                            height="190"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        >
                          <div class="card-body">
                          
                          <p class="card-text">Understanding Javascript</p>
                          <a href="#" class="btn btn-success">Read More >></a>
                      </div>
                    </div>

                    <div class="card col-md-2">
                      <img
                            src="../assets/images/02-slides/04-demystifying-nodejs.jpg"
                            height="190"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        >
                        <div class="card-body">
                          
                          <p class="card-text">Demystifying NodeJS</p>
                          <a href="#" class="btn btn-success">Read More >></a>
                      </div>
                    </div>                                 
                </div>

                <div class="card-body form-row card-body2">
                    <div class="card  col-md-2">
                      <img
                            src="../assets/images/02-slides/05-mongodb-for-database.jpg"
                            height="190"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        >
                          <div class="card-body">
                          
                          <p class="card-text">MongoDB for Database</p>
                          <a href="#" class="btn btn-success">Read More >></a>
                      </div>
                    </div>

                    <div class="card  col-md-2">
                      <img
                            src="../assets/images/02-slides/06-understanding vuejs (2020).jpg"
                            height="190"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        >
                          <div class="card-body">
                          
                          <p class="card-text">Understanding VueJS</p>
                          <a href="#" class="btn btn-success">Read More >></a>
                      </div>
                    </div>

                    <div class="card  col-md-2">
                      <img
                            src="../assets/images/02-slides/07-simplifying-reactjs.jpg"
                            height="190"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        >
                          <div class="card-body">
                          
                          <p class="card-text">Simplifying ReactJS</p>
                          <a href="#" class="btn btn-success">Read More >></a>
                      </div>
                    </div>

                    <div class="card col-md-2">
                      <img
                            src="../assets/images/02-slides/08-intrduction-to-angular.jpg"
                            height="190"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        >
                          <div class="card-body">
                          
                          <p class="card-text">Introduction To Angular</p>
                          <a href="#" class="btn btn-success">Read More >></a>
                      </div>
                    </div>

                                 
                </div>

       <a href="#" class="more">More Slides...</a>  
    </div>            
                   
</div>



 </div>   
</template>

<script>
export default {
    name: "Slides"
}
</script>

<style scoped>
#fixing{
  padding-top: 48px;
}

.card-body{
  text-align: center;
  padding: 0.8rem 0.7rem;
 
}
.card-text{
    height: 35px;
    font-weight: bold;
    font-size: 0.85rem;
    margin: 5px;
}
.more{
  margin-left: 12px;
  margin-bottom: 10px;
}
.form-row{  
  margin-left: 0px;
  margin-right: 0px;
  padding-right: 0px;
  padding-left: 0px;
 }

#all-books-div{
  border-radius: 5px;
  background-color: rgba(0,0,0,.008);;
}


.card-header{
  border: none;
  height: 50px;
  background-color: white;
  padding: .75rem 0.85rem;
}
.card{
  background-color: white;
  
}
.wrapper{
 border: none;
 margin-top: 8px;
 max-width: 1000px;
}
.container{
    padding: 0px;
}
body{
  font-size: 0.89rem;
  font-weight: 300;
}
.col-md-2{
  margin: 0px 12px;
  max-width: 23%;
  flex: 1 0 16.666667%;
  padding-left: 0px;
  padding-right: 0px;
  
}

 .form-row>[class*=col-] {
    padding-right: 0px;
    padding-left: 0px;
}

</style>