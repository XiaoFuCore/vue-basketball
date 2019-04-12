<template>
	<div>
		<div class="record-nav">
			<van-icon name="arrow-left"/>
			<div class="filter">
				篮球
				<van-icon name="arrow-down"/>
			</div>
		</div>
		<div class="record-main">
			<div class="record-header">
				<div class="first">约战团</div>
				<div class="second">时间</div>
				<div class="third">评分</div>
			</div>
			<div class="record-list">
				<vue-scroll>
					<div class="scroll-list">
						<div class="record-item" v-for="i in (1,100)" :key="i">
							<div class="first name">团名字符限制 {{i}} </div>
							<div class="second time">03/30 20:40</div>
							<div class="third">
								<van-rate v-model="form.shoot" color="#FF3123" size="15" void-color="#CCCCCC" readonly/>
							</div>
						</div>
						
					</div>
				</vue-scroll>
			</div>
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
.record {
	&-nav {
		.flex;
		height: 108px;
		padding-left: 24px;
		.filter {
			flex: 1;
			text-align: center;
		}
	}
	&-header {
		.flex;
		height: 88px;
		padding-left: 40px;
		font-size: 24px; /*px*/
		color: #777;
		background: #fafafa;
	}
	&-main {
		.first {
			width: 40%;
		}
		.second {
			width: 30%;
		}
		.three {
			width: 30%;
		}
	}
	&-list {
		height: calc(100vh - 197px);
	}
	&-item {
		.flex;
		height: 80px;
		padding-left: 40px;
		border-bottom: 1px solid #ececec;
		.name {
			font-size: 34px; /*px*/
			color: #333333;
			font-weight: 500;
		}
		.time {
			color: #cccccc;
			font-size: 24px;
		}
	}
}
</style>
