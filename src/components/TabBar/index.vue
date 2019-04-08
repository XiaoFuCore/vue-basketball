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
      active: 1,
      tabList: [
        {
          id: 1,
          active: "static/icon/home_selected@2x.png",
          normal: "static/icon/home@2x.png",
          url: "/basketball/combat",
          title: "约战"
        },
        {
          id: 2,
          active: "static/icon/share_selected@2x.png",
          normal: "static/icon/share@2x.png",
          url: "/basketball/combat",
          title: "聊天"
        },
        {
          id: 3,
          active: "static/icon/share_selected@2x.png",
          normal: "static/icon/share@2x.png",
          url: "/basketball/combat",
          title: "战队"
        },
        {
          id: 4,
          active: "static/icon/me_selected@2x.png",
          normal: "static/icon/me@2x.png",
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

