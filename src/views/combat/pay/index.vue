<template>
    <div class="container">
        <nav-bar title="支付"></nav-bar>
        <!-- 上传图片 -->

        <div class="upload-itme">
            <div class="upload-img">
                <img src="@/assets/tu1@3x.png" alt="">
            </div>
        </div>

        <!-- 列表 -->
        <div class="release-list">
            <van-cell title="开团人" value="Gavin" />
            <van-cell title="开团时间" value="2018.3.2019:00 - 21:00" />
            <van-cell title="场馆" value="前埔辛巴篮球场" />

        </div>

        <!-- 底部 -->
        <div class="footer">
            <div class="desc">请确认以上信息</div>
            <div class="footer-main">
                <div class="price">￥20</div>
                <div class="pay-btn">支付</div>
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
    .footer {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        font-size: 34px; /*px*/
        text-align: center;
        font-weight: bold;
        .desc {
            color: #909090;
            font-size:24px;/*px*/
            margin-bottom: 46px;
        }
        .footer-main {
            height: 100px;
            line-height: 100px;
            border-top: 1px solid #ECECEC;/*px*/
            .flex;
            .price {
                flex: 1;
                color: #8D8D8D;
            }
            .pay-btn {
                flex: 2;
                color: #fff;
                background: #ff3123;
            }
        }
    }

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
</style>
