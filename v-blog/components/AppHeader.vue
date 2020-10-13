<template>
  <div class="header">
    <div class="logo">
      <a href="/" title="cc-zero">cc-zero</a>
    </div>
    <nav class="nav">
      <nuxt-link
        v-for="(item, index) in routes_arr"
        :class="{ active: item.active }"
        @click.native="routeActive"
        :key="index"
        :to="`/${item.path}`"
        tag="span"
        >{{ item.mata }}</nuxt-link
      >
    </nav>
  </div>
</template>
<script>
export default {
  name: "AppHeader",
  data() {
    return {
      routes_arr: [
        {
          path: "tcode",
          mata: "代码",
          active: true,
        },
        {
          path: "notes",
          mata: "杂记",
          active: false,
        },
        {
          path: "classify",
          mata: "分类",
          active: false,
        },
        {
          path: "timeline",
          mata: "时间轴",
          active: false,
        },
        {
          path: "about",
          mata: "关于我",
          active: false,
        },
      ],
    };
  },
  created() {
    this.routes_arr.forEach((element, index) => {
      if (element.path === this.$route.path.split("/")[1]) {
        this.routes_arr[index].active = true;
      } else {
        this.routes_arr[index].active = false;
      }
    });
  },
  methods: {
    routeActive() {
      this.routes_arr.forEach((element, index) => {
        if (element.path === this.$route.path.split("/")[1]) {
          this.routes_arr[index].active = true;
        } else {
          this.routes_arr[index].active = false;
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  height: 60px;
  display: flex;
  align-items: center;
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
  .logo {
    width: 110px;
    a {
      height: 60px;
      color: #666;
      text-decoration: none;
      cursor: pointer;
      font-size: 2em;
      font-style: oblique;
      font-weight: bold;
    }
  }
  .nav {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    span {
      padding: 0 15px;
      width: 80px;
      list-style: none;
      cursor: pointer;
      font-size: 13px;
      color: #666;
      display: flex;
      justify-content: center;
      &:hover {
        color: #000;
        font-weight: 700;
      }
    }
    span.active {
      color: #000;
      font-weight: 700;
    }
  }
}
</style>