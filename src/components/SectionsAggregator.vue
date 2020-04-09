<template>
<div class="app-body" id="app-body">
    <OnlineVideos/>
    <Books />
    <Slides/>
    <Links/>
            
</div>
    
</template>

<script>
import OnlineVideos from './OnlineVideos.vue'
import Books from './Books.vue'
import Slides from './Slides.vue'
import Links from './Links.vue'


export default {
    name: "SectionsAggregator",
    components:{
        OnlineVideos,
        Books,
        Slides,
        Links
    } 
    
}
</script>

<style scoped>

</style>

            