<template>
    <div class="container">
        <nav-bar title="篮球"></nav-bar>
        <!-- 列表 -->
        <div class="release-list">
            <van-cell is-link title="科科">
                <div slot="icon" class="title">团&nbsp;&nbsp;队&nbsp;&nbsp;名</div>
            </van-cell>
            <van-cell is-link title="前埔辛巴篮球场">
                <div slot="icon" class="title">选择地点</div>
            </van-cell>
            <van-cell is-link title="2018.3.20  19:00 - 21:00" @click="showDate=true">
                <div slot="icon" class="title">开团时间</div>
            </van-cell>
            <van-cell is-link title="8人">
                <div slot="icon" class="title">参团人数</div>
            </van-cell>
            <van-cell is-link title="每人20元">
                <div slot="icon" class="title">场地费用</div>
            </van-cell>
            <van-cell is-link title="男生">
                <div slot="icon" class="title">要&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;求</div>
            </van-cell>

            <van-cell is-link title="今晚有没有一起打球的，地址在前埔...">
                <div slot="icon" class="title">开团描述</div>
            </van-cell>
        </div>
        <!-- 上传图片 -->
        <div class="upload-box">
            <div class="upload-itme">
                <div class="title">上传图片</div>
                <div class="upload-img">
                    <img src="@/assets/tu1@3x.png" alt="">
                </div>
            </div>

        </div>
        <!-- 底部 -->
        <div class="release-btn" @click="show=true">
            发布
        </div>

        <!-- 发布弹窗 -->
        <div class="release-popup">
            <van-popup v-model="show">
                <div class="re-site-list" v-for='i in (1,10)' :key='i'>
                    <div class="site-item" @click="show=false">
                        <img src="@/assets/tu1@3x.png" :alt="i">
                    </div>

                </div>
            </van-popup>
        </div>
        <!-- 时间选择 -->
        <div class="release-date">
             <van-popup v-model="showDate">
                <van-datetime-picker 
                v-model="currentDate" 
                type="datetime" 
                :min-date="minDate" 
                :max-date="maxDate"
                @cancel='cancelDate' 
                @confirm='selecDate' 
                 />
             </van-popup>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            current: 0,
            show: false,
            showDate:false,
            minHour: 10,
            maxHour: 20,
            minDate: new Date(),
            maxDate: new Date(2019, 10, 1),
            currentDate: new Date()
        };
    },
    methods: {
        onChange(index) {
            this.current = index;
        },
        cancelDate(){
            this.showDate = false;
        },
        selecDate(){
             this.showDate = false;
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
    .release-list {
        .location-icon {
            line-height: 108px;
        }
        .title {
            color: #8d8d8d;
            font-size: 28px; /*px*/
            margin-right: 32px;
            width: 112px;
        }
    }
    .release-btn {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100px;
        line-height: 100px;
        font-size: 34px; /*px*/
        background: #ff3123;
        text-align: center;
        font-weight: bold;
        color: #fff;
    }
    .upload-box {
        padding: 0 32px;
        .upload-itme {
            border-top: 1px solid #ececec;
            .title {
                color: #8d8d8d;
                font-size: 28px; /*px*/
                font-weight: 500;
                padding: 30px 0;
            }
            .upload-img {
                width: 100%;
                height: 306px;
                overflow: hidden;
                img {
                    .img;
                }
            }
        }
    }
    //弹窗
    .re-site-list {
        padding: 24px;
        .site-item {
            width: 100%;
            height: 306px;
            overflow: hidden;
            border-radius: 21px;
            margin-bottom: 24px;
            img {
                .img;
            }
        }
    }
}
</style>


<style lang="less">
.release-list {
    .van-cell {
        color: #666;
        font-size: 32px; /*px*/
        font-weight: 500;
        height: 94px;
        line-height: 94px;
    }
}
.release-popup {
    .van-popup {
        top: 0;
        width: 100%;
        background-color: transparent;
        transform: translate3d(-50%, 0, 0);
    }
}
.release-date {
    .van-popup {
        top: auto;
        bottom: 0;
        width: 100%;
        background-color: transparent;
        transform: translate3d(-50%, 0, 0);
    } 
}
</style>
