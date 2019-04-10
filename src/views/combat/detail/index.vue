<template>
    <div class="container">
        <nav-bar title="我的约战"></nav-bar>
        <van-swipe @change="onChange">
            <van-swipe-item class="swipe-item">
                <img src="@/assets/tu1@3x.png" alt="">
            </van-swipe-item>
            <van-swipe-item class="swipe-item">
                <img src="@/assets/tu2@3x.png" alt="">
            </van-swipe-item>
            <van-swipe-item class="swipe-item">
                <img src="@/assets/tu3@3x.png" alt="">
            </van-swipe-item>
            <van-swipe-item class="swipe-item">
                <img src="@/assets/tu4@3x.png" alt="">
            </van-swipe-item>
        </van-swipe>
        <!-- 拼团 -->
        <div class="group-item">
            <div class="user-list">
                <div class="user-item">
                    <div class="user-img">
                        <img src="@/assets/tu1@3x.png" style="max-width:60px;border-radius:100%;">
                    </div>
                    <p class="start">发起人</p>
                </div>
                <van-icon name="plus" size='20px' class="add-icon" />
                <div class="user-item">
                    <div class="user-img">
                        <img src="@/assets/tu1@3x.png" style="max-width:60px;border-radius:100%;">
                    </div>
                </div>
                <div class="user-item">
                    <div class="user-img">
                        <img src="@/assets/tu1@3x.png" style="max-width:60px;border-radius:100%;">
                    </div>
                </div>
                <div class="user-item">
                    <div class="user-img">
                        <img src="@/assets/tu1@3x.png" style="max-width:60px;border-radius:100%;">
                    </div>
                </div>
                <div class="user-item">
                    <div class="user-img">
                        <img src="@/assets/tu1@3x.png" style="max-width:60px;border-radius:100%;">
                    </div>
                </div>
                <div class="user-item">
                    <div class="user-img">
                        <img src="@/assets/tu1@3x.png" style="max-width:60px;border-radius:100%;">
                    </div>
                </div>
            </div>
            <van-icon name="arrow" />
        </div>
        <!-- 列表 -->
        <div class="combat-list">
            <van-cell title="Gavin">
                <div slot="icon">开团人</div>
            </van-cell>
            <van-cell title="2018.3.20  19:00 - 21:00">
                <div slot="icon">开团时间</div>
            </van-cell>
            <van-cell title="前埔辛巴篮球场">
                <div slot="icon">场馆</div>
                <van-icon slot="right-icon" name="location-o" class="location-icon" />
            </van-cell>
            <van-cell title="今晚有没有一起打球的，地址在前埔...">
                <div slot="icon">开团描述</div>
            </van-cell>
        </div>
        <!-- 底部 -->
        <van-goods-action>
            <van-goods-action-mini-btn icon="chat-o" text="群聊" />
            <van-goods-action-mini-btn icon="cart-o" text="分享"  />
            <van-goods-action-big-btn text="组团中"  />
           
        </van-goods-action>
    </div>
</template>

<script>
export default {
    data() {
        return {
            current: 0
        };
    },
    methods: {
        onChange(index) {
            this.current = index;
        }
    }
};
</script>

<style lang="less" scoped>
.flex() {
    display: flex;
    align-items: center;
}
.img {
    display: block;
    height: 100%;
    width: 100%;
}
.container {
    .swipe-item {
        width: 100%;
        height: 306px;
        overflow: hidden;
        img {
            .img;
        }
    }
    .user-list {
        padding: 20px 0;
        display: flex;
        .user-item {
            &:not(:first-child) {
                margin-right: 15px;
            }
            .user-img {
                width: 60px;
                height: 60px;
                overflow: hidden;
                border-radius: 50%;
                img {
                    .img;
                }
            }
        }
        .add-icon {
            padding-top: 10px;
            margin-right: 10px;
        }
        .start {
            font-size: 20px; /*px*/
            color: #777777;
            margin: 10px 0;
        }
    }
    .group-item {
        .flex;
        padding: 0 25px;
        justify-content: space-between;
        border-bottom: 10px solid #f8f8f8; /*no*/
    }
    .combat-list {
        .location-icon {
            line-height: 108px;
        }
    }
}
</style>

