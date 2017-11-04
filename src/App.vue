<template>
  	<div id="app">
		<div class="layout">
            <div class="layout-logo">
            	<img src="./assets/images/logo.png" alt="logo" />
            </div>
            <div class="layout-login">
            	<div>	
            		<p>wangshenghuo</p>
            	</div>
            </div>
		</div>
  	
  		<div class="layoutMenu">
  			<div class="menu">
  				<Menu active-name="1-1" theme="dark" width="auto" :open-names="['1']">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            	卡券管理
                        </template>
                        <MenuItem name="1-1">卡券管理</MenuItem>
                        <MenuItem name="1-2">微信优惠券</MenuItem>
                        <!--<MenuItem name="1-3"></MenuItem>-->
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            	渠道管理
                        </template>
                        <MenuItem name="2-1">渠道管理-商务</MenuItem>
                        <MenuItem name="2-2">渠道管理-运营</MenuItem>
                        <MenuItem name="2-3">渠道订单管理</MenuItem>
                    </Submenu>
                </Menu>
  			</div>
  			<div class="routerView">
  				<transition :name="routerTrans">
	      			<router-view class="child-view"></router-view>
	    		</transition>
  			</div>
  			
  		</div>
  	</div>
</template>

<script>
export default {
  name: 'app',
  data(){
  	return {
      routerTrans:'slide-right'
  	}
  },
}
</script>

<style type="text/css">
body,html{
	width: 100%;
	height: 100%;
}
</style>

<style lang="scss" scoped>
#app{
	height:100%;
	position: relative;
}
.child-view {
  width:100%;
  transition: all .2s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(50px, 0);
  transform: translate(50px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-50px, 0);
  transform: translate(-50px, 0);
}

.layout{
	position: fixed;
	width: 100%;
	z-index: 1;
	top: 0;
	left: 0;
	box-shadow: 0 8px 5px #dedede;
	.layout-logo{
		background-color: #2d8cf0;
		width: 220px;
		height: 60px;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 3;
		text-align: center;
		line-height: 80px;
	}
	.layout-login{
		margin-left: 220px;  /*左边固定宽度右边自适应宽度*/
		width: auto;
		height: 60px;
		background-color: #f8f8f9;
		div{
			float: right;
			
		}
	}
	
}
.layoutMenu{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	.menu{
		width: 220px;
		height: 100%;
		background-color: #495060;
		position: fixed;
		z-index: 2;
		top: 60px;
		left: 0;
		/*padding-top: 60px;*/
	}
	.routerView{
		background-color: #e9eaec;
		width: auto;
		margin-left: 220px;
		padding: 30px;
		min-height: 100%;
		padding: 90px 30px 30px;
	}
}

</style>
