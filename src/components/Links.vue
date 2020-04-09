<template>
<div id="fixing">
<div class="card container wrapper">
    <h5 class="card-header container-fluid ">4. Cheatsheets</h5>
    <div id="all-books-div">
                <div class="card-body form-row">
                    <div class="card col-md-2">
                     <img
                            src="../assets/images/03-cheatsheets/01-HTML5-Cheat-Sheet.jpg"
                            height="190"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        >
                          <div class="card-body">
                          
                          <p class="card-text">HTML5 Cheatsheet</p>
                          <a href="#" class="btn btn-success">Show More >></a>
                      </div>
                    </div>

                    <div class="card  col-md-2">
                     <img
                            src="../assets/images/03-cheatsheets/02-css-cheat-sheet.jpg"
                            height="190"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        > 
                          <div class="card-body">
                          
                          <p class="card-text">CSS Cheatsheet</p>
                          <a href="#" class="btn btn-success">Show More >></a>
                      </div>
                    </div>

                    <div class="card  col-md-2">
                     <img
                            src="../assets/images/03-cheatsheets/03-javascript-cheat-sheet.jpg"
                            height="190"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        >
                          <div class="card-body">
                          
                          <p class="card-text">Javascript Cheatsheet</p>
                          <a href="#" class="btn btn-success">Show More >></a>
                      </div>
                    </div>

                    <div class="card col-md-2">
                     <img
                            src="../assets/images/03-cheatsheets/04-nodejs-cheat-sheet.jpg"
                            height="190"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        >
                          <div class="card-body">
                          
                          <p class="card-text">NodeJS Cheatsheet</p>
                          <a href="#" class="btn btn-success">Show More >></a>
                      </div>
                    </div>                                 
                </div>

                <div class="card-body form-row card-body2">
                    <div class="card  col-md-2">
                    <img
                            src="../assets/images/03-cheatsheets/05-mongodb-cheat-sheet.jpg"
                            height="190"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        >
                          <div class="card-body">
                          
                          <p class="card-text">MongoDB Cheatsheet</p>
                          <a href="#" class="btn btn-success">Show More >></a>
                      </div>
                    </div>

                    <div class="card  col-md-2">
                     <img
                            src="../assets/images/03-cheatsheets/06-vue-essentials-cheat-sheet.jpg"
                            height="190"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        >
                          <div class="card-body">
                          
                          <p class="card-text">Vue Essentials Cheatsheet</p>
                          <a href="#" class="btn btn-success">Show More >></a>
                      </div>
                    </div>

                    <div class="card  col-md-2">
                     <img
                            src="../assets/images/03-cheatsheets/07-reactjs-cheat-sheet.jpg"
                            height="190"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        >
                          <div class="card-body">
                          
                          <p class="card-text">ReactJS Cheatsheet</p>
                          <a href="#" class="btn btn-success">Show More >></a>
                      </div>
                    </div>

                    <div class="card col-md-2">
                    <img
                            src="../assets/images/03-cheatsheets/08-angular7-cheat-sheet.jpg"
                            height="190"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        >
                          <div class="card-body">
                          
                          <p class="card-text">Angular7 Cheatsheet</p>
                          <a href="#" class="btn btn-success">Show More >></a>
                      </div>
                    </div>

                                 
                </div>

       <a href="#" class="more">More Cheatsheets...</a>  
    </div>            
                   
</div>



 </div>   
</template>

<script>
export default {
    name: "Links"
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
.card-body2{
  padding-top: 0px;
}
 .form-row>[class*=col-] {
    padding-right: 0px;
    padding-left: 0px;
}

</style>