<template>
  <div class="chat-container">
    <div class="chat-nav">
      <van-icon name="arrow-left" size='20px' @click='toBack' />
      <div class="title">科比</div>
      <van-icon name="ellipsis" size='25px' color='#434343' />
    </div>
    <div class="chat-list">
      <vue-scroll ref='scrollBox'>
        <div class="timer">
          5:40
        </div>
        <div class="chat-item " v-for='i in (1,100)'>
          <div class="user-icon">
            <img src="@/assets/tu1@3x.png">
          </div>
          <div class="chat-box left-trigel">{{i}}今天我们准备去哪打球呢？</div>
        </div>
        <div class="chat-item row-reverse ">
          <div class="user-icon">
            <img src="@/assets/tu1@3x.png">
          </div>
          <div class="chat-box right-trigel">
            先去吃个饭，然后去辛巴篮 球场打。
          </div>
        </div>
        <div class="chat-item">
          <div class="user-icon">
            <img src="@/assets/tu1@3x.png">
          </div>
          <div class="chat-box left-trigel">
            恩...这样不错，对了那天打球 的照片发你{{$config.imgUrl}}
          </div>
        </div>
      </vue-scroll>
    </div>
    <div class="chat-footer">
      <div class="chat-img">
        <img src="@/assets/icon/btn_yuyin@3x.png">
      </div>
      <div class="input-box">
        <van-field v-model="value" placeholder="输入您的消息" />
      </div>
      <div class="btn-list">
        <div class="chat-img icon-btn">
          <img src="@/assets/icon/btn_biaoqing@3x.png">
        </div>
        <div class="chat-img">
          <img src="@/assets/icon/btn_tupian@3x.png">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '',
    }
  },
  mounted() {
    this.scrollToBottom();
  },
  methods: {
    toBack() {
      this.$router.go(-1);
    },
    scrollToBottom() {
      let top = document.querySelector('.__view').scrollHeight;
      if (top) {
        this.$nextTick(() => {
          this.$refs.scrollBox.scrollTo({
              y: top
            },
            'easeInQuad'
          );
        })
      }
    }
  }
}

</script>
<style lang="less" scoped>
.flex {
  display: flex;
  align-items: center;
}

.img {
  display: block;
  height: 100%;
  width: 100%;
}

.chat {
  &-container {
    height: 100%;
  }

  &-nav {
    display: flex;
    height: 108px;
    line-height: 108px;
    padding: 0 25px;
    align-items: center;
    border-bottom: 1px solid #eeeeee;

    /*px*/
    .title {
      flex: 1;
      color: #333;
      text-align: center;
      font-size: 34px;
      /*px*/
    }
  }

  &-list {
    height: calc(100% - 218px);
    background: #f8f8f8;

    .timer {
      color: #999999;
      font-size: 28px;
      /*px*/
      padding: 50px 0;
      text-align: center;
    }
  }

  &-item {
    display: flex;
    align-items: center;
    padding: 0 30px;
    margin-bottom: 50px;

    .user-icon {
      width: 84px;
      height: 84px;
      overflow: hidden;
      border-radius: 50%;

      img {
        .img;
      }
    }

    .chat-box {
      max-width: 450px;
      color: #333;
      font-size: 32px;
      /*px*/
      font-weight: 500;
      padding: 25px;
      margin-left: 40px;
      background: #fff;
      z-index: 2;
      border-radius: 8px;
      /*px*/
      position: relative;

      &.left-trigel,
      &.right-trigel {
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          width: 0;
          height: 0;
          border-top: 8px solid transparent;
          /*no*/
          // border-right: 8px solid #fff;/*no*/
          border-bottom: 8px solid transparent;
          /*no*/
          transform: translateY(-50%);
          z-index: 1;
        }
      }

      &.left-trigel {
        &::before {
          left: -14px;
          border-right: 8px solid #fff;
          /*no*/
        }
      }

      &.right-trigel {
        &::before {
          right: -14px;
          border-left: 8px solid #fff;
          /*no*/
        }
      }
    }

    &.row-reverse {
      flex-direction: row-reverse;
      margin-left: 0;

      .chat-box {
        margin-left: 0;
        margin-right: 40px;
      }
    }
  }

  &-footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    padding: 0 30px;
    align-items: center;
    height: 110px;

    .chat-img {
      width: 40px;
      height: 40px;
      overflow: hidden;

      img {
        .img;
      }
    }

    .input-box {
      flex: 1;
    }

    .btn-list {
      display: flex;
      align-items: center;

      .icon-btn {
        margin-right: 30px;
      }
    }
  }
}

</style>
