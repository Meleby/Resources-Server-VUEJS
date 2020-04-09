<template>
    <div id="app-header" class="container-fluid fixed-top">
        <center>
            <h1 class="app-header-heading">
                Online Resources Server Application
            </h1>
        </center>
        
    </div>
</template>

<script>
export default {
    name: "AppHeader"
    
}
</script>

<style scoped>
#app-header{
    background-color: purple;
    color: white;
    height: 60px;
    text-align: center;

    
}
.app-header-heading{
    font-size: 2.5rem;
    line-height: 1.5;
    
}
body{
    padding-top: 70px;
}

</style>