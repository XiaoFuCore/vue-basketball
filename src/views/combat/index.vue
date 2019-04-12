<template>
    <div class="combat-container">
        <div class="combat-head">
            <div class="loaction">
                <van-icon name="location-o" color='#2C86EC' size='20px' />
                <span class="position">思明区</span>
                <van-icon name="arrow-down" />
            </div>
            <van-search v-model="value" class="search-area" placeholder="如辛巴篮球场" show-action shape="round" @search="onSearch">
                <div slot="action" @click="onSearch">
                    <van-icon name="add-o" color='#FF3122' size='24px' class="add" />
                </div>
            </van-search>
        </div>
        <!-- 过滤 -->
        <div class="combat-filter">
            <div class="item">
                <span class="name">篮球 </span>
                <van-icon name="arrow-down" color='#A6A4A5' size='15px' />
            </div>
            <div class="item">
                <span class="name">全部</span>
                <van-icon name="arrow-down" color='#A6A4A5' size='15px' />
            </div>
            <div class="item">
                <span class="name">附近</span>
                <van-icon name="arrow-down" color='#A6A4A5' size='15px' />
            </div>
        </div>
        <!-- 列表 -->
        <div class="combat-list">
            <vue-scroll>
                <div  class="scroll-list">
                    <div class="combat-item">
                            <router-link to="/combat_detail">
                            <div class="img-contaner">
                                <img src="@/assets/tu1@3x.png" alt>
                                <div class="title">前埔辛巴篮球场</div>
                            </div>
                            </router-link>
                        <!-- 拼团 -->
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
                            <div class="user-item">
                                <div class="user-img">
                                    <img src="@/assets/icon/add3x.png" style="max-width:60px;border-radius:100%;">
                                </div>
                            </div>

                        </div>
                        <!-- 文本区域 -->
                        <div class="combat-appoint">
                            <div class="title">以球会友</div>
                            <div class="desc">今晚有没有一起打球的，地址在前埔辛巴篮球场，我这有3个人，需要再找几个人一起。</div>
                            <div class="timer">活动时间：2019.3.20 19:00-21:00</div>
                            <div class="status">
                                <div class="tag-list">
                                    <van-tag plain color="#999999">报名中</van-tag>
                                    <van-tag plain color="#FF2E23">付费</van-tag>
                                    <van-tag plain color="#999999">已结束</van-tag>
                                    <van-tag plain color="#4BCE70">免费</van-tag>
                                </div>
                                <div class="person">6/8人</div>
                            </div>
                        </div>
                    </div>
                  
                    <div class="combat-item">
                        <router-link to="/combat_detail">
                        <div class="img-contaner">
                            <img src="@/assets/tu1@3x.png" alt>
                            <div class="title">前埔辛巴篮球场</div>
                        </div>
                        </router-link>
                        <!-- 拼团 -->
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
                            <div class="user-item">
                                <div class="user-img">
                                    <img src="@/assets/icon/add3x.png" style="max-width:60px;border-radius:100%;">
                                </div>
                            </div>

                        </div>
                        <!-- 文本区域 -->
                        <div class="combat-appoint">
                            <div class="title">以球会友</div>
                            <div class="desc">今晚有没有一起打球的，地址在前埔辛巴篮球场，我这有3个人，需要再找几个人一起。</div>
                            <div class="timer">活动时间：2019.3.20 19:00-21:00</div>
                            <div class="status">
                                <div class="tag-list">
                                    <van-tag plain color="#999999">报名中</van-tag>
                                    <van-tag plain color="#FF2E23">付费</van-tag>
                                    <van-tag plain color="#999999">已结束</van-tag>
                                    <van-tag plain color="#4BCE70">免费</van-tag>

                                </div>
                                <div class="person">6/8人</div>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </vue-scroll>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ""
        };
    },

    methods: {
        onSearch() {}
    }
};
</script>

<style lang="less" scoped>
.flex{
    display: flex;
    align-items: center;
}
.img {
    display: block;
    height: 100%;
    width: 100%;
}

.combat {
    &-head {
        .flex;
        height: 108px;
        padding-left: 20px;
        .loaction {
            .flex;
            .position {
                padding: 0 10px;
            }
        }
        .search-area {
            flex: 1;
            .flex;
        }
        .add {
            padding-top: 20px;
        }
    }
    &-filter {
        height: 88px;
        border-bottom: 1px solid #ececec; /*px*/
        .flex;
        .item {
            .flex;
            padding: 0 40px;
            position: relative;
            font-size: 24px; /*px*/
            color: #777;
            &:not(:last-child) {
                &::after {
                    content: "";
                    position: absolute;
                    height: 100%;
                    width: 1px; /*no*/
                    right: 0;
                    top: 0;
                    background: #ececec;
                    &::last-child {
                        width: 0;
                    }
                }
                .name {
                    padding-right: 10px;
                }
            }
        }
    }
    &-list {
        height: calc(100vh - 296px);
        .scroll-list {
            padding: 0 24px;
        }
        .img-contaner {
            height: 306px;
            border-radius: 21px;
            position: relative;
            img {
                .img;
            }
            .title {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                opacity: 0.6;
                height: 50px;
                color: #fff;
                background: #000;
                line-height: 50px;
                padding: 0 30px;
                font-size: 28px; /*px*/
                border-bottom-left-radius: 21px;
                border-bottom-right-radius: 21px;
            }
        }
    }
    &-item {
        padding-top: 20px;
        .user-list {
            padding: 20px 0;
            display: flex;
        }
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
    &-appoint {
        border-bottom: 1px solid #ececec; /*px*/
        padding-bottom: 20px;
        .title {
            font-size: 32px; /*px*/
            color: #444444;
            margin-bottom: 10px;
        }
        .desc {
            color: #666;
            font-size: 24px;
            margin-bottom: 10px;
        }
        .timer {
            color: #999;
            font-size: 24px;
            margin: 20px 0;
        }
        .status {
            .flex;
            align-items: center;
            justify-content: space-between;
            .person {
                font-size: 24px;
                color: #999;
            }
        }
    }
}
</style>

<style lang="less">
.combat-container {
    .van-search {
        padding: 20px 0;
        padding-left: 10px;
    }
}
</style>


