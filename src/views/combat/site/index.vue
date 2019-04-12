<template>
    <div class="container">
        <nav-bar title="选择场地" rightText='全部'></nav-bar>
        <div class="site-head">
            <div class="loaction">
                <van-icon name="location-o" color='#2C86EC' size='20px' />
                <span class="position">思明区</span>
                <van-icon name="arrow-down" />
            </div>
            <van-search v-model="value" class="search-area" placeholder="请输入店名/地址快速查找" shape="round" @search="onSearch" />
        </div>
        <!-- 筛选区域 -->
        <div class="site-filter">
            <div class="filter-item">
                <span>附近</span>
                <van-icon name="arrow-down" />
            </div>
            <div class="filter-item">
                <span>智能排序</span>
                <van-icon name="arrow-down" />
            </div>
        </div>
        <!-- 列表区域 -->
        <div class="site-main">
            <vue-scroll>

                <div class="site-item" v-for='i in (1,20)' :key='i'>
                    <div class="main">
                        <div class="site-img">
                            <img src="@/assets/tu1@3x.png">
                        </div>
                        <div class="site-info">
                            <div class="name">CFRM训练馆</div>
                            <div class="distance">0.{{i}}3km</div>
                        </div>
                    </div>
                    <div class="sider">80/小时</div>
                </div>

            </vue-scroll>
        </div>
    </div>
</template>


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
.site {
    &-head {
        .flex;
        height: 90px;
        padding: 0 20px;
        border-bottom: 1px solid #ececec; /*px*/
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
    }
    &-filter {
        .flex;
        height: 88px;
        line-height: 88px;
        border-bottom: 1px solid #ececec; /*px*/
        .filter-item {
            width: 50%;
            font-size: 24px;
            color: #777;
            text-align: center;
        }
    }
    &-main {
        height: calc(100% - 186px);
    }
    &-item {
        .flex;
        height: 176px;
        padding: 15px 24px;
        border-bottom: 1px solid #ececec; /*px*/
        .main {
            display: flex;
            flex: 1;
            .site-img {
                width: 146px;
                height: 146px;
                overflow: hidden;
                border-radius: 8px;
                img {
                    .img;
                }
            }
            .site-info {
                display: flex;
                margin-left: 25px;
                flex-direction: column;
                justify-content: space-between;
                .name {
                    color: #333333;
                    font-size: 34px; /*px*/
                }
                .distance {
                    color: #909090;
                    font-size: 24px; /*px*/
                    text-align: center;
                }
            }
        }
        .sider {
            color: #f34747;
            font-size: 32px; /*px*/
        }
    }
}
</style>

<style lang="less">
.container {
    .van-search {
        padding: 0;
        color:#D0D0D0;
        font-size: 23px; /*px*/
        padding-left: 10px;
        .van-cell {
            height: 64px;
            line-height: 64px;
            padding: 0;
            .van-icon-search {
                padding-top: 1px; /*no*/
            }
            .van-field__control {
                height: 64px;
                line-height: 64px;
                font-size:23px;
               
            }
        }
    }
}
</style>

