<template>
    <div class="container">
        <nav-bar rightText='验证码登录' url='login-code'></nav-bar>
        <div class="login-form">

            <div class="title">
                手机密码登录
            </div>

            <div class="phone-item">
                <div class="phone-area">
                    <span>+86</span>
                    <van-icon name="arrow-down" class="arrow-down" />
                </div>
                <van-field v-model="phone" placeholder="输入手机号码" />
            </div>

            <van-cell-group>
                <van-field v-model="value"  type="password" placeholder="输入密码" />
            </van-cell-group>

            <van-button size="large" class="login-btn" @click='login'>登录</van-button>

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
    },
    methods: {
        login(){
            this.$router.push('/basketball/combat')
        }
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

.login {
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
        line-height: 88px;
        color: #fff;
        border-radius: 44px;
        background: #2884F3;
        font-size: 32px; /*px*/
    }
}
</style>

<style lang="less">
.login {
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

