<template>
<div id="fixing">
<div class="card container wrapper">
    <h5 class="card-header container-fluid ">2. Books</h5>
    <div id="all-books-div">
                <div class="card-body form-row">
                    <div class="card col-md-2">
                       <img
                            src="../assets/images/04-books/01-practical-html5-projects.jpg"
                            height="190"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        >
                      <div class="card-body">
                         
                          <p class="card-text">Practical HTML5 Projects</p>
                          <a href="#" class="btn btn-success">Read More >></a>
                      </div>
                    </div>

                    <div class="card  col-md-2">
                      <img
                            src="../assets/images/04-books/02-professional-css3.jpg"
                            height="190"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        >
                        <div class="card-body">
                          
                          <p class="card-text">Professional CSS3</p>
                          <a href="#" class="btn btn-success">Read More >></a>
                      </div>
                    </div>

                    <div class="card  col-md-2">
                      <img
                            src="../assets/images/04-books/03-learning-javascript.jpg"
                            height="190"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        >
                        <div class="card-body">
                          
                          <p class="card-text">Learning Javascript</p>
                          <a href="#" class="btn btn-success">Read More >></a>
                      </div>
                    </div>

                    <div class="card  col-md-2">
                      <img
                            src="../assets/images/04-books/06-the-vue-handbook.jpg"
                            height="190"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        >
                          <div class="card-body">
                          
                          <p class="card-text">The Vue HandBook</p>
                          <a href="#" class="btn btn-success">Read More >></a>
                      </div>                               
                </div>

                <div class="card-body form-row card-body2">
                    <div class="card  col-md-2">
                      <img
                            src="../assets/images/04-books/04-beginning-nodejs.jpg"
                            height="190px"
                            width="229px"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        >
                        <div class="card-body">
                          
                          <p class="card-text">Beginning NodeJS</p>
                          <a href="#" class="btn btn-success">Read More >></a>
                      </div>
                    </div>

                    <div class="card  col-md-2">
                      <img
                            src="../assets/images/04-books/05-mastering-mongoDB.jpg"
                            height="190"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        ><div class="card-body">
                          
                          <p class="card-text">Mastering MongoDB</p>
                          <a href="#" class="btn btn-success">Read More >></a>
                      </div>
                    </div>

                    
                    </div>

                    

                                 
                </div>

       <a href="#" class="more">More Books...</a>  
    </div>            
                   
</div>



 </div>   
</template>

<script>
export default {
    name: "Books"
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
  margin: 0px 9px;
 
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