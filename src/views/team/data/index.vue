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
		<div class="team-header">
			<div class="item">姓名</div>
			<div class="item">综合</div>
			<div class="item">投篮</div>
			<div class="item">篮板</div>
			<div class="item">防守</div>
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
}
</style>
