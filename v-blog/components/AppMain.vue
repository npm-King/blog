<template>
  <div class="appMain">
    <div class="appMainWrap">
      <nuxt class="mainLeft" />
      <sideBar class="mainSide"></sideBar>
    </div>
  </div>
</template>
<script>
import sideBar from "@/components/sideBar";
export default {
  name: "AppMain",
  components: { sideBar },
};
</script>
<style lang="scss" scoped>
.appMain {
  background: #f5f5f5;
  min-width: 320px;
  .appMainWrap {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .mainLeft {
      margin: 15px 0;
      flex: 1;
      background: #fff;
      border-radius: 6px;
      @media screen and (max-width: 920px) {
        width: 100%;
        min-width: 320px;
      }
    }
    .mainSide {
      margin-left: 25px;
      margin: 15px 0;
      width: 320px;
      @media screen and (min-width: 920px) {
        width: 320px;
        margin-left: 25px;
      }
      @media screen and (max-width: 920px) {
        width: 100%;
        min-width: 320px;
        margin-top: 0;
      }
    }
  }
}
</style>