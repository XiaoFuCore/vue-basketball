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
            <van-icon name="arrow" color='#C9C9C9' />
        </div>
        <!-- 列表 -->
        <div class="combat-list">
            <van-cell title="Gavin">
                <div slot="icon" class="title">开&nbsp;&nbsp;团&nbsp;&nbsp;人</div>
            </van-cell>
            <van-cell title="2018.3.20  19:00 - 21:00">
                <div slot="icon" class="title">开团时间</div>
            </van-cell>
            <van-cell title="前埔辛巴篮球场">
                <div slot="icon" class="title">场&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;馆</div>
                <van-icon slot="right-icon" name="location-o" color="#2C86EC" class="location-icon" />
            </van-cell>
            <van-cell title="今晚有没有一起打球的，地址在前埔...">
                <div slot="icon" class="title">开团描述</div>
            </van-cell>
        </div>
        <!-- 底部 -->
        <div class="combat-footer">
            <div class="footer-item left-sider">
                <div class="item">
                     <div class="sider-img">
                        <img src="@/assets/icon/share.png" >
                    </div>
                    <div class="name">群聊</div>
                </div>
                <div class="item">
                    <div class="sider-img">
                        <img src="@/assets/icon/share.png" >
                    </div>
                    <div class="name">分享</div>
                </div>
            </div>
            <div class="footer-item btn-box">
                 组团中
            </div>
        </div>
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
        .title {
            color: #8D8D8D;
            font-size:28px; /*px*/
            margin-right: 32px;
            width: 112px;;
        }
    }
    .combat-footer {
         .flex;
         height: 100px;
         position: fixed;
         left: 0;
         right: 0;
         bottom: 0;
        .footer-item {
            width: 50%;
            height: 100%;
            border-top: 1px solid#ECECEC;
            &.btn-box{
                background: #FF3123;
                line-height: 100px;
                text-align: center;
                font-weight:bold;
                color: #fff;
                font-size: 34px;
                border-top: 1px solid #FF3123;
            }
            &.left-sider {
                .flex;
                .item {
                   .flex;  
                    width: 50%;
                    height: 100%;
                    align-content: center;
                    justify-content: center;
                   .name {
                       font-size:28px;/*px*/
                       color: #8D8D8D;
                       margin-left: 20px;
                      
                   }
                }
               
            }
            .sider-img {
                width: 38px;
                height: 38px;
                overflow: hidden;
                border-radius: 50%;
                img {
                    .img;
                }
            }
        }
    }
}
</style>


<style lang="less">
.combat-list {
    .van-cell {
        color: #666;
        font-size: 32px;/*px*/
    }
}
</style>
