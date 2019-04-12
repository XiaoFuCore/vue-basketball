<template>
    <div class="container">
        <nav-bar title="团员评价"></nav-bar>
        <div class="team-notice">
            评价的目的在于提升自己薄弱的模块，切勿作假。
        </div>
        <div class="team-site">
            <div class="team-name">场地</div>
            <div> <van-rate v-model="form.shoot" color="#FF3123" size="20" void-color="#CCCCCC" readonly/></div>
        </div>
        <div class="team-main">
            <vue-scroll>
                <div class="team-list">
                    <div class="team-item" v-for="i in (1,10)" :key='i'>
                        <div class="team-name">麦迪{{i}}</div>
                        <div class="star-item">
                            <span class="ability">投篮能力</span>
                            <div> <van-rate v-model="form.shoot" color="#FF3123" size="20" void-color="#CCCCCC" readonly/></div>
                        </div>
                        <div class="star-item">
                            <span class="ability">投篮能力</span>
                            <div> <van-rate v-model="form.shoot" color="#FF3123" size="20" void-color="#CCCCCC" readonly/></div>
                        </div>
                        <div class="star-item">
                            <span class="ability">投篮能力</span>
                            <div> <van-rate v-model="form.shoot" color="#FF3123" size="20" void-color="#CCCCCC" readonly/></div>
                        </div>
                        <div class="star-item">
                            <span class="ability">投篮能力</span>
                            <div> <van-rate v-model="form.shoot" color="#FF3123" size="20" void-color="#CCCCCC" readonly/></div>
                        </div>
                        <div class="star-item">
                            <span class="ability">投篮能力</span>
                            <div> <van-rate v-model="form.shoot" color="#FF3123" size="20" void-color="#CCCCCC" readonly/></div>
                        </div>
                    </div>
                </div>
            </vue-scroll>    
        </div>
        <div class="team-btn">
            提交
        </div>

    </div>
</template>

<script>
export default {
	data() {
		return {
			form: {
				shoot: '3'
			}
		}
	}
}
</script>

<style lang="less" scoped>
.team {
    &-notice {
        height: 88px;
        line-height: 88px;
        color: #CBCBCB;
        padding-left: 38px;
        background: #FAFAFA;
    }
    &-site {
        display: flex;
        height: 80px;
        line-height: 80px;
        align-items: center;
        padding: 0 30px 0 38px;
        justify-content: space-between;
    }
    &-name {
        font-size:34px; /*px*/
        font-weight:500;
        color: #333;
    }
    &-main {
        height: calc(100% - 268px);
    }
    &-item {
        padding-left: 38px;
        padding-bottom: 30px;  
        border-bottom: 1px solid #ECECEC;/*px*/
        .team-name {
            margin: 25px 0;
        }
       .star-item {
           display: flex;
           align-items: center;
           margin-bottom: 20px;
           .ability {
               font-size:28px; /*px*/
               color: #333333;
               padding-left: 30px;
               padding-right: 24px;
           }
       } 
    }
    &-btn{
        height: 100px;
        line-height: 100px;
        font-size:34px;/*px*/
        background: #FF3123;
        text-align: center;
        font-weight:bold;
        color: #fff;
    }
}
</style>

