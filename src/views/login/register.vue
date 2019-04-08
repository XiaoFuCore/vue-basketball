<template>
    <div class="container">
        <nav-bar rightText='登录' url='login'></nav-bar>
        <div class="register-form">

            <div class="title">
                新账号注册
            </div>

            <div class="phone-item">
                <div class="phone-area">
                    <span>+86</span>
                    <van-icon name="arrow-down" class="arrow-down" />
                </div>
                <van-field v-model="phone" placeholder="请输入手机号" />
            </div>

            <van-cell-group>

                <van-field v-model="sms" class="sms" center clearable placeholder="输入验证码">
                    <van-button slot="button" size="small">发送验证码</van-button>
                </van-field>

                <van-field v-model="value" placeholder="输入密码" />
            </van-cell-group>

            <van-button size="large" class="register-btn">注册</van-button>

        </div>
        <div class="pact">
            登录注册，表示您同意
            <span class="primary">
                用户协议
            </span>与
            <span class="primary">
                隐私条款
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sms: ""
        };
    }
};
</script>

<style lang="less" scoped>
.primary {
    color: #12befe;
}
.container {
    .pact {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 35px;
        text-align: center;
        font-size:18px;
        color: #909090;
    }
}

.register {
    &-form {
        padding: 0 100px;
        .title {
            font-weight: bold;
            text-align: center;
            color: #333333;
            padding: 100px 0;
            font-size: 56px; /*px*/
        }
        .phone-item {
            display: flex;
            align-items: center;
            .phone-area {
                display: flex;
                align-items: center;
                font-size: 32px; /*px*/
                color: #c2c2c2;
                .arrow-down {
                    margin-left: 10px;
                }
            }
        }
    }
    &-btn {
        margin-top: 100px;
        height: 88px;
        color: #fff;
        border-radius: 44px;
        background: #e5e5e5;
        font-size: 40px; /*px*/
    }
}
</style>

<style lang="less">
.register {
    &-form {
        .phone-item {
            .van-field__control {
                padding-left: 10px;
            }
        }
        .sms {
            .van-button--default {
                border: 0;
                font-size: 28px; /*px*/
                color: #12befe;
            }
        }
    }
}
</style>

