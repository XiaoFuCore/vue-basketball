<template>
	<div class="combat-container">
		<div class="combat-head">
			<div class="loaction">
				<van-icon name="location-o" color='#2C86EC' size='20px' />
				<span class="position">思明区</span>
				<van-icon name="arrow-down"/>
			</div>
			<van-search v-model="value" class="search-area" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
				<div slot="action" @click="onSearch">
                    <van-icon name="add-o" color='#FF3122' size='24px' class="add" />
                </div>
			</van-search>
		</div>
        <div class="combat-filter">
            <div class="item">
                <span class="name">篮球 </span>
                <van-icon name="arrow-down" color='#A6A4A5' size='15px' />
            </div>
            <div class="item">
                <span class="name">全部</span>
                <van-icon name="arrow-down" color='#A6A4A5' size='15px' />
            </div>
            <div class="item">
                <span class="name">附近</span>
                <van-icon name="arrow-down" color='#A6A4A5' size='15px' />
            </div>
        </div>
	</div>
</template>

<style lang="less" scoped>
.flex(){
    display: flex;
    align-items: center;
}

.combat {
	&-head {
        .flex;
        height: 108px;
        padding-left: 20px;
        .loaction {
           .flex;
           .position {
               padding: 0 10px
           }
        }
        .search-area {
            flex: 1;
            .flex;
        }
        .add {
            padding-top: 20px;
        }
    }
    &-filter {
        height: 88px;
        .flex;
        .item {
            .flex;
            padding: 0 40px;
            position: relative;
            font-size: 24px; /*px*/
            color: #777;
            &:not(:last-child){
                 &::after{
                    content: '';
                    position: absolute;
                    height: 100%;
                    width: 1px;/*no*/
                    right: 0;
                    top: 0;
                    background: #ECECEC;
                    &::last-child{
                        width: 0; 
                    }
            }
            .name {
                padding-right: 10px;
            }

            }
           
        }
    }
}
</style>

<style lang="less">
.combat-container {

}
</style>


