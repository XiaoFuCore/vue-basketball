<template>
    <div class="chat-list">
        <router-link to="/chat_singel" class="chat-item" v-for='i in (1,100)' :key='i'>
            <div class="main">
                <div class="user-img">
                    <img src="@/assets/tu1@3x.png">
                </div>
                <div class="detail">
                    <div class="name">科比{{i}}</div>
                    <div class="news">我马上到</div>
                </div>
            </div>
            <div class="timer">11:53 AM</div>
        </router-link>
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
.chat {
    &-item {
        display: flex;
        padding: 32px;
        // height: 148px;
        justify-content: space-between;
        border-bottom: 1px solid #e6e6e6; /*px*/
        .main {
            display: flex;
            .user-img {
                width: 84px;
                height: 84px;
                overflow: hidden;
                border-radius: 50%;
                img {
                    .img;
                }
            }
            .detail {
                display: flex;
                margin-left: 36px;
                flex-direction: column;
                justify-content: space-between;
                .name {
                    color: #515151;
                    font-size: 34px; /*px*/
                }
                .news {
                    color: #848484;
                    font-size: 26px; /*px*/
                }
            }
        }
        .timer {
            color: #a3a3a3;
            font-size: 24px; /*px*/
        }
    }
}
</style>
