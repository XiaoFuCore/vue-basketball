<template>
	<div class="container">
		<nav-bar title="我的能力" border/>
		<!-- 能力-星级 -->
		<div class="ability-area">
			<div class="user-info">
				<img src="@/assets/me/user@3x.png">
				<div class="score">
					99
					<small class="sign">分</small>
				</div>
			</div>
			<div class="star-list">
				<div class="star-itme">
					<div class="title">日期能力</div>
					<van-rate v-model="form.shoot" color="#FF3123" readonly/>
				</div>
				<div class="star-itme">
					<div class="title">篮板能力</div>
					<van-rate v-model="form.rebound" color="#FF3123" readonly/>
				</div>
				<div class="star-itme">
					<div class="title">防守能力</div>
					<van-rate v-model="form.defensive" color="#FF3123" readonly/>
				</div>
				<div class="star-itme">
					<div class="title">突破能力</div>
					<van-rate v-model="form.break" color="#FF3123" readonly/>
				</div>
				<div class="star-itme">
					<div class="title">控球能力</div>
					<van-rate v-model="form.ball" color="#FF3123" readonly/>
				</div>
			</div>
		</div>
		<!-- 能力综合图 -->
		<div class="ability-chart">
			<div class="ability-title">能力综合图</div>
			<div>
				<ve-radar :data="chartData" :settings="chartSettings"></ve-radar>
			</div>
		</div>
		<!-- 我的比赛-->
		<div class="ability-list">
			<div class="ability-title">我的比赛</div>
			<div class="game-list">
				<div class="item">
					<div style="display:flex;align-items:center;">
						<div class="user-icon">
							<img src="@/assets/me/user@3x.png">
						</div>
						<div class="star">
							<div class="name">开团名</div>
							<van-rate v-model="form.ball" color="#FF3123" readonly/>
						</div>
					</div>
					<div class="right-area">
						<span class="time">03-30 20:29</span>
						<van-icon name="arrow" class="arrow-icon"/>
					</div>
				</div>
			</div>
			<div class="game-list">
				<div class="item">
					<div style="display:flex;align-items:center;">
						<div class="user-icon">
							<img src="@/assets/me/user.jpg">
						</div>
						<div class="star">
							<div>开团名</div>
							<van-rate v-model="form.ball" color="#FF3123" readonly/>
						</div>
					</div>
					<div class="right-area">
						<span class="time">03-30 20:29</span>
						<van-icon name="arrow"/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
        this.chartSettings = {
            // metrics: ['篮板']
        }
		return {
            
			form: {
				shoot: '3',
				rebound: '4',
				defensive: '2',
				break: '3',
				ball: '1'
			},
			chartData: {
				columns: ['日期', '篮板', '控球', '突破', '防守', '投篮'],
				rows: [
					{
						日期: '',
						篮板: 1393,
						控球: 1093,
						突破: 0.32,
						防守: 232,
						投篮: 2323
					}
				]
			}
		}
	}
}
</script>

<style lang="less" scoped>
.ability {
	&-title {
		color: #403e36;
		font-size: 36px; /*px*/
		padding-left: 30px;
	}
	&-area {
		display: flex;
		padding: 40px;
		align-items: center;
		justify-content: space-between;
		.user-info {
			width: 148px;
			height: 148px;
			border-radius: 50%;
			overflow: hidden;
			border: 1px solid #f7f7f7; /*no*/
			img {
				display: block;
				height: 100%;
				width: 100%;
			}
		}
		.score {
			text-align: center;
			color: #333;
			font-size: 32px; /*px*/
			.sign {
				font-size: 24px; /*px*/
			}
		}
		.star-list {
			display: flex;
			flex-direction: column;
		}
		.star-itme {
			display: flex;
			align-items: center;
			color: #7f7f7f;
			.title {
				margin-right: 10px;
			}
		}
	}
	&-chart {
	}
	&-list {
		.ability-title {
			margin: 30px 0;
		}
		.game-list {
			padding: 0 30px;
			border-bottom: 1px solid #d9d9d9; /*no*/
			.item {
				display: flex;
				padding: 30px 0;
				align-items: center;
				justify-content: space-between;
				.user-icon {
					width: 84px;
					height: 84px;
					border-radius: 50%;
					overflow: hidden;
					img {
						display: block;
						height: 100%;
						width: 100%;
					}
                }
                .star {
                    margin-left: 20px;
                }
				.right-area {
					font-size: 20px;/*px*/
					color: #ccc;
					display: flex;
					align-items: center;
				}
				.name {
					margin-bottom: 10px;
					color: #333333;
					font-size: 28px;
					margin-right: 20px;
				}
				.time {
					font-size: 20px;
					color: #ccc;
				}
			}
		}
	}
}
</style>

