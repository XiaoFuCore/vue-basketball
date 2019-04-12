<template>
	<div class="container">
		<nav-bar title="团内数据"></nav-bar>
		<div class="team-header">
			<div class="item">姓名</div>
			<div class="item">综合</div>
			<div class="item">投篮</div>
			<div class="item">篮板</div>
			<div class="item">防守</div>
		</div>
		<div class="team-list">
			<vue-scroll>
				<div class="team-item" v-for="i in (1,100)" :key='i'>
					<div class="item">麦迪{{i}}</div>
					<div class="item">A</div>
					<div class="item">B</div>
					<div class="item">C</div>
					<div class="item">D</div>
				</div>
			</vue-scroll>
		</div>
	</div>
</template>

<style lang="less" scoped>
.flex {
    display: flex;
    align-items: center;
}
.team {
    &-header {
        .flex;
        height: 88px;
        font-size: 24px; /*px*/
        color: #777;
        background: #fafafa;
        .item {
            flex: 1;
            text-align: center;
        }
    }
    &-list {
        height: calc(100vh - 197px);
        .team-item {
            .flex;
            color: #333333;
            font-size: 34px; /*px*/
            height: 80px;
            border-bottom: 1px solid #ececec; /*no*/
            .item {
                flex: 1;
                text-align: center;
            }
        }
    }
}
</style>
