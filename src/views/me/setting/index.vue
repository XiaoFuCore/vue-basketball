<template>
    <div class="container">
        <nav-bar title="设置"></nav-bar>
        <div>
            <van-cell title="账号ID" is-link value="12345645667" />
            <van-cell title="手机号" is-link value="17546573344" />
            <van-cell title="个人资料" is-link />
            <van-cell title="密码设置" is-link />
            <van-cell title="消息提醒" is-link>
                <div slot="right-icon" class="news">
                    <van-switch v-model="news" size="24px" active-color='#FF3122' />
                </div>
            </van-cell>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
          news:'',  
        }
    }
}
</script>

<style lang="less" scoped>
.news {
    padding-top: 20px; 
}
</style>

