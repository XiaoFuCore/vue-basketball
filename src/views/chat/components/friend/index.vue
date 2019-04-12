<template>
    <div class="chat-list">
        <router-link to='/' class="chat-item" v-for='i in (1,100)' :key='i'>
            <div class="user-img">
                <img src="@/assets/tu1@3x.png">
            </div>
            <div class="name">科比{{i}}</div>
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
        align-items: center;
        border-bottom: 1px solid #e6e6e6; /*px*/

        .user-img {
            width: 84px;
            height: 84px;
            overflow: hidden;
            border-radius: 50%;
            img {
                .img;
            }
        }
        .name {
            color: #515151;
            font-size: 34px; /*px*/
            padding-left: 34px;
        }
    }
}
</style>
