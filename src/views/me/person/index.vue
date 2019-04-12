<template>
    <div class="container">
        <nav-bar title="个人资料"></nav-bar>
        <div class="person-list">
            <div class="person-item">
                <div class="title">会员头像</div>
                <div class="right-sider">
                    <div class="user-icon">
                        <img src="@/assets/tu1@3x.png" alt="">
                    </div>
                    <van-icon name="arrow" size='20px' color='#C9C9C9' />
                </div>
            </div>
            <div class="person-item">
                <div class="title">会员昵称</div>
                <div class="right-sider">
                    <div class="title">昵称</div>
                    <van-icon name="arrow" size='20px' color='#C9C9C9' />
                </div>
            </div>
            <div class="person-item">
                <div class="title">所在地区</div>
                <div class="right-sider">
                    <div class="title">请输入地区</div>
                    <van-icon name="arrow" size='20px' color='#C9C9C9' />
                </div>
            </div>
            <div class="person-item">
                <div class="title">会员性别</div>
                <div class="right-sider">
                    <div class="title">男</div>
                    <van-icon name="arrow" size='20px' color='#C9C9C9' />
                </div>
            </div>
            <div class="person-item">
                <div class="title">会员年龄</div>
                <div class="right-sider">
                    <div class="title">26</div>
                    <van-icon name="arrow" size='20px' color='#C9C9C9' />
                </div>
            </div>
            <div class="person-item">
                <div class="title">会员身高</div>
                <div class="right-sider">
                    <div class="title">180</div>
                    <van-icon name="arrow" size='20px' color='#C9C9C9' />
                </div>
            </div>
            <div class="person-item">
                <div class="title">会员体重</div>
                <div class="right-sider">
                    <div class="title">76</div>
                    <van-icon name="arrow" size='20px' color='#C9C9C9' />
                </div>
            </div>
            <div class="person-item">
                <div class="title">篮球位置</div>
            </div>
            <div class="person-checkbox">
                <van-checkbox-group v-model="result">
                    <van-checkbox v-for="item in list" checked-color='#FF3123' :key="item" :name="item">
                        {{ item }}
                        <img slot="icon" slot-scope="props" class="check-img"  :src="props.checked ? icon.active : icon.normal">
                    </van-checkbox>
                </van-checkbox-group>
            </div>

        </div>
        <div class="person-btn">
            提交
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: ["控球后卫", "得分后卫", "小前锋", "大前锋", "中锋"],
            result: ["中锋", "小前锋"],
            icon:{
                active:'/static/check.png',
                normal:'/static/check@selected.png',
            }
                
            
        };
    }
};
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
.person {
    &-list {
    }
    &-item {
        .flex;
        height: 116px;
        line-height: 116px;
        padding: 0 40px;
        justify-content: space-between;
        .user-icon {
            width: 84px;
            height: 84px;
            overflow: hidden;
            border-radius: 50%;
            img {
                .img;
            }
        }
        .right-sider {
            display: flex;
            align-items: center;
            .title {
                color: #333;
            }
        }
        .title {
            color: #7f7f7f;
            font-size: 34px; /*px*/
            font-weight: 500;
        }
    }
    &-btn {
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
    &-checkbox {
        padding: 0 60px;
        display: flex;
        font-size: 28px;
        color: #333;
        .check-img {
            max-width: 40px;
        }
    }
}
</style>

<style lang="less">
.person-checkbox {
    .van-checkbox-group {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .van-checkbox {
            display: flex;
            width: 33.33%;
            margin-bottom: 30px;
        }
    }
}
</style>


