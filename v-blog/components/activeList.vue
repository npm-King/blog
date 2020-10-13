<template>
    <div>
        <div v-for="(item,index) in articleList" :key="index">
            <div>{{item.title}}</div>
            <div>{{item.abstract}}</div>
            <div>
                <div>
                    <img :src="item.url" alt="" />
                </div>
                <div>
                    <div>
                        <span>{{item.date}}</span>
                    </div>
                    <div>
                        <!-- <svg-icon icon-class="classify" /> -->
                        <span>{{item.classify}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'activeList',
    props:['articleList']
}
</script>
<style lang="scss" scoped>
    
</style>