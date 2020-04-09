<template>
    <div id="Home" class="Home">
        
            <!-- App Header section starts here-->
            <AppHeader />
            <!-- App Header section ends here-->

            <!-- App Nav Bar section starts here-->
            <AppNavBar />
            <!-- App Nav Bar section ends here-->
            <router-view></router-view>
            
            

            <AppFooter />   
                   
        
    </div>         
    
</template>

<script lang="ts">
import AppHeader from "./AppHeader.vue"
import AppNavBar from "./AppNavBar.vue"
import AppFooter from "./AppFooter.vue"

export default {
    name: "Home",
    components: {
        AppHeader,
        AppFooter,
        AppNavBar,    
        
    }
  
}

</script>

<style scoped>
/* Styles for Books, Videos */



</style>