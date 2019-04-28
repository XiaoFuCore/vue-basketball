<template>
  <div class="chat-container">
    <div class="chat-tab">
      <div class="tab-item" :class="{active:isChat}" @click="isChat=true">聊天</div>
      <div class="tab-item frend" :class="{active:!isChat}" @click="isChat=false">好友</div>
    </div>
    <div class="chat-list">
      <vue-scroll ref='scrollBox'>
        <chat-list v-if='isChat'></chat-list>
        <chat-friend v-else></chat-friend>
      </vue-scroll>
    </div>
  </div>
</template>
<script>
import { ChatList, ChatFriend } from './components'
export default {
  components: {
    ChatList,
    ChatFriend
  },
  data() {
    return {
      isChat: true,
    }
  },
  mounted() {
    this.scrollToBottom();
  },
  methods: {
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
.chat {
  &-container {
    height: 100%;
  }

  &-tab {
    display: flex;
    height: 108px;
    line-height: 108px;
    justify-content: center;
    border-bottom: 1px solid #EEEEEE;

    /*px*/
    .tab-item {
      color: #333333;
      font-size: 32px;

      /*px*/
      &.frend {
        margin-left: 62px;
      }

      &.active {
        color: #000;
        font-size: 34px;
        /*px*/
      }
    }
  }

  &-list {
    height: calc(100% - 208px);
  }
}

</style>
