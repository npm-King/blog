<template>
    <div>
        <activeList :articleList="list" />
    </div>
</template>
<script>
import activeList from '@/components/activeList'
export default {
    name:'tcode',
    data(){
        return {
            list:null
        }
    },
    components:{
        activeList
    },
    mounted(){
        // this.$axios.get("/activelist").then(res=>{
        //     console.log("res",res)
        //     this.list = res.data;
        // })
    }
}
</script>