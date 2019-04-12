<template>
    <div class="container">
        <nav-bar title="开团名"></nav-bar>
        <div class="team-main">
            <vue-scroll>
                <div class="team-list">
                     <div class="team-item" v-for="i in (1,10)" :key='i'>
                        <div class="left-sider">
                            <div class="user-img">
                                <img src="@/assets/icon/share.png">
                            </div>
                            <div class="user-detail">
                                <div class="name">甲{{i}}</div>
                                <van-rate v-model="form.shoot" color="#FF3123" size="15" void-color="#CCCCCC" readonly/>
                            </div>
                        </div>
                        <div class="right-sider">
                            <van-tag color='#FF3123' plain>帮我评价</van-tag>
                        </div>
                    </div>
                    <div class="team-item" v-for="i in (1,100)" :key='i'>
                        <div class="left-sider">
                            <div class="user-img">
                                <img src="@/assets/icon/share.png">
                            </div>
                            <div class="user-detail">
                                <div class="name">甲{{i}}</div>
                                <van-rate v-model="form.shoot" color="#FF3123" size="15" void-color="#CCCCCC" readonly/>
                            </div>
                        </div>
                        <div class="right-sider">已评</div>
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
			form: {
				shoot: '3'
			}
		}
	}
}
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
.team {
    &-main {
        height: calc(100% - 108px);
    }
    &-list {
    }
    &-item {
        .flex;
        padding: 34px 20px 34px 32px;
        justify-content: space-between;
        border-bottom: 1px solid #D9D9D9;/*px*/
        .left-sider {
            .flex;
            .user-img {
                width: 83px;
                height: 83px;
                overflow: hidden;
                border-radius: 50%;
                img {
                    .img
                }
            }
            .user-detail {
                margin-left: 34px;
                .name {
                    color: #333333;
                    font-size:28px;
                    margin-bottom: 10px;
                }
            }
        }
        .right-sider {
            font-size:20px;
            font-weight:500;
            color: #CCCCCC;
            
        }
    }
}
</style>

