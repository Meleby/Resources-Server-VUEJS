<template>
<div id="fixing">
<div class="card container wrapper">
    <h5 class="card-header container-fluid ">1. Online Videos</h5>
    <div id="all-books-div">
                <div class="card-body form-row">
                    <div class="card col-md-2">
                      <iframe 
                            src="https://www.youtube.com/embed/pQN-pnXPaVg"
                            height="190"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        ></iframe>
                        <div class="card-body">                          
                          <p class="card-text">HTML Full Course - Build a Website Tutorial.</p>
                          <a href="https://www.youtube.com/watch?v=pQN-pnXPaVg" class="btn btn-success">Watch From Source</a>
                      </div>
                    </div>

                    <div class="card  col-md-2">
                      <iframe 
                            src="https://www.youtube.com/embed/1Rs2ND1ryYc"
                            height="190"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        ></iframe>
                        <div class="card-body">
                         
                          <p class="card-text">CSS Tutorial - Zero to Hero (Complete Course)</p>
                          <a href="https://www.youtube.com/watch?v=1Rs2ND1ryYc" class="btn btn-success">Watch From Source</a>
                      </div>
                    </div>

                    <div class="card  col-md-2">
                      <iframe 
                            src="https://www.youtube.com/embed/9cKsq14Kfsw"
                            height="190"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        ></iframe>
                        <div class="card-body">
                         
                          <p class="card-text">Responsive Bootstrap Website Start To Finish with Bootstrap 4, HTML5 & CSS3</p>
                          <a href="https://www.youtube.com/watch?v=9cKsq14Kfsw" class="btn btn-success">Watch From Source</a>
                      </div>
                    </div>

                    <div class="card col-md-2">
                       <iframe 
                            src="https://www.youtube.com/embed/PkZNo7MFNFg"
                            height="190"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        ></iframe>
                       <div class="card-body">
                         
                          <p class="card-text">Learn JavaScript - Full Course for Beginners</p>
                          <a href="https://www.youtube.com/watch?v=PkZNo7MFNFg" class="btn btn-success">Watch From Source</a>
                      </div>
                    </div>                                 
                </div>

                <div class="card-body form-row card-body2">
                    <div class="card  col-md-2">
                       <iframe 
                            src="https://www.youtube.com/embed/RLtyhwFtXQA"
                            height="190"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        ></iframe>
                        <div class="card-body">
                         
                          <p class="card-text">Nodejs : Learn Node.js - Full Tutorial for Beginners</p>
                          <a href="https://www.youtube.com/watch?v=RLtyhwFtXQA" class="btn btn-success">Watch From Source</a>
                      </div>
                    </div>

                    <div class="card  col-md-2">
                       <iframe 
                            src="https://www.youtube.com/embed/G8uL0lFFoN0"
                            height="190"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                        <div class="card-body">
                         
                          <p class="card-text">Express.js & Node.js Course for Beginners - Full Tutorial</p>
                          <a href="https://www.youtube.com/watch?v=G8uL0lFFoN0" class="btn btn-success">Watch From Source</a>
                      </div>
                    </div>

                    <div class="card  col-md-2">
                      <iframe 
                            src="https://www.youtube.com/embed/kt3cEjjkCZA"
                            height="190"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                        <div class="card-body">
                         
                          <p class="card-text">Pug Template Engine - Full Tutorial for Beginners</p>
                          <a href="https://www.youtube.com/watch?v=kt3cEjjkCZA" class="btn btn-success">Watch From Source</a>
                      </div>
                    </div>

                    <div class="card col-md-2">
                       <iframe 
                            src="https://www.youtube.com/embed/CyTWPr_WwdI"
                            height="190"
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        ></iframe>
                        <div class="card-body">
                         
                          <p class="card-text">MongoDB Tutorial - CRUD app from scratch using Node.js</p>
                          <a href="https://www.youtube.com/watch?v=CyTWPr_WwdI" class="btn btn-success">Watch From Source</a>
                      </div>
                    </div>

                                 
                </div>

       <a href="#" class="more">More Videos...</a>  
    </div>            
                   
</div>



 </div>   
</template>

<script>
export default {
    name: "Videos"
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
  height: 56px;
  font-weight: normal;
  font-size: 0.85rem;

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
  padding-top: 0px;
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