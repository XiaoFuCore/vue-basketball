<template>
  <div class="me-container">
    <div class="user-info">
      <div>
        <div class="detail">
          <span class="name">用户名</span>
          <img src="@/assets/me/nan@3x.png" >
        </div>
        <div class="no">ID 256442</div>
      </div>
      <div class="user-img">
        <img src="@/assets/me/user@3x.png">
      </div>
    </div>
    <div class="me-list">
      <router-link to='/setting'>
        <van-cell icon='friends-o' title="我的战队" is-link  />
      </router-link>
      <router-link to='/setting'>
        <van-cell icon='records' title="约战记录" is-link  />
      </router-link>
      <router-link to='/ability'>
        <van-cell icon='fire-o' title="我的能力" is-link  />
      </router-link>
      <router-link to='/setting'>
        <van-cell icon='setting-o' title="设置" is-link  />
      </router-link>
    </div>
  </div>
</template>
<style lang="less" scoped>
.user-info {
  display: flex;
  padding: 80px 40px 0;
  color: #353535;
  align-items: center;
  justify-content: space-between;
  .detail {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    img {
		max-width: 48px;
    }
    .name {
      font-size: 48px;/*px*/
    }
    .no {
      font-size: 32px;/*px*/
    }
  }
  .user-img {
	img {
		max-width: 120px;
		border-radius: 100%;
	}
  }
}

.me-list {
  margin-top: 40px;
}

</style>
<style lang="less">
.me-container {
  .me-list {
    .van-cell__left-icon {
      line-height: 116px;
      font-size: 48px;/*px*/
    }

    .van-cell__right-icon {
      line-height: 116px;
    }

    .van-cell {
      height: 116px;
      font-size: 34px;/*px*/
      color: #333;
      line-height: 116px;
      padding: 0 40px;
    }
  }
}

</style>
