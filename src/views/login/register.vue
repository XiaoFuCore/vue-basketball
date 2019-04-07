<template>
    <div class="resgiter-container">
        <nav-bar>
            <template slot='right'>
              <router-link to="/login">
                登录
              </router-link>
            </template>
        </nav-bar>
        <div class="resgiter-form">
            <div class="title">新账号注册</div>
            <div class="form-main">
                <md-field>
               
                <div class="phone-item">
                    
                    <md-field-item
                        :content="selectorValue"
                        @click="showSelector"
                        arrow='arrow-down'
                        solid
                    />
                    
                     <md-selector
                        v-model="isSelectorShow"
                        default-value="2"
                        :data="data[0]"
                        max-height="320px"
                        @choose="onSelectorChoose"
                    ></md-selector>

                  
                    <md-input-item
                       
                        placeholder="输入手机号码"
                    ></md-input-item>
                  
                </div>

                 <div class="phone-item">
                    <md-input-item
                     
                        placeholder="输入验证码"
                    ></md-input-item>
                    <div class="code">
                        获取验证码
                    </div>
                 </div>

                 <md-input-item
                       
                        placeholder="输入密码"
                    ></md-input-item>

                </md-field>

                 <md-button type="disabled" plain round>注册</md-button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
     data() {
    return {
      isSelectorShow: false,
      data: [
            [
            {
                value: '1',
                text: '+86',
            },
            {
                value: '2',
                text: '+86',
            },
            {
                value: '3',
                text: '+84',
            },
            {
                value: '4',
                text: '+83',
            },
          
            ],
        ],
        selectorValue: '+86',
        }
    },
    methods: {
        showSelector() {
        this.isSelectorShow = true
        },
        onSelectorChoose({text}) {
        this.selectorValue = text
        },
    },
}
</script>


<style lang="stylus" scoped>
.resgiter
    &-container
    &-form
        color #C2C2C2
        .title
            color #333
            font-size 56px /*px*/
            text-align center
            font-weight bold
            margin 100px 0
            font-family PingFang-SC-Bold
        .form-main 
            padding 0 90px
        .phone-item
            display flex
            align-items center
</style>

<style lang="stylus">
.resgiter-form
  .md-field
    padding 0
    padding-bottom 40px
</style>

