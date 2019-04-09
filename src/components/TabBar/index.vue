<template>
  <div class="tabbar-container">
    <van-tabbar v-model="active" active-color="#FF3122" @change="toggleTab">
      <van-tabbar-item v-for="item in tabList" :key="item.id" :to="item.url">
        <div class="tab-img">
          <img :src="active==item.id ? item.active : item.normal">
        </div>
        <span style="line-height: .4rem;  font-size: .26rem;">{{item.title}}</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>  

<script>
export default {
  data() {
    return {
      active: 0,
      tabList: [
        {
          id: 0,
          active: "/static/tabbar/combat@selected3x.png",
          normal: "/static/tabbar/combat@3x.png",
          url: "/basketball/combat",
          title: "约战"
        },
        {
          id: 1,
          active: "/static/tabbar/chat@selected3x.png",
          normal: "/static/tabbar/chat@3x.png",
          url: "/basketball/chat",
          title: "聊天"
        },
        {
          id: 2,
          active: "/static/tabbar/team@selected3x.png",
          normal: "/static/tabbar/team@3x.png",
          url: "/basketball/team",
          title: "战队"
        },
        {
          id: 3,
          active: "/static/tabbar/me@selected3x.png",
          normal: "/static/tabbar/me@3x.png",
          url: "/basketball/me",
          title: "我的"
        }
      ]
    };
  },
  methods: {
      toggleTab(){

      }
  }
};
</script>


<style lang="less" scoped>
.tabbar {
  &-container {
    .tab-img {
      width: 44px;
      height: 44px;
      overflow: hidden;
      margin-bottom: 5px;
      img {
        display: block;
        height: 100%;
        width: 100%;
      }
    }
    .tab-itme {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
    }
  }
}
</style>

<style lang="less">
.tabbar {
  &-container {
    .van-tabbar {
      height: 100px;
    }
  }
}
</style>

