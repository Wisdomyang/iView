<template>
  	<div id="app">
    		<!--<transition :name="routerTrans">
      			<router-view class="child-view"></router-view>
    		</transition>-->
    		<div class="layout">
    			<div class="layout-header">
            <div class="layout-logo">123</div>
            <div class="layout-login">
                <img src="./assets/images/logo.png" alt="logo" />
            </div>
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

<style lang="scss" scoped>
#app{
	height:100%;
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
	.layout-header{
		width: 100%;
		height: 60px;
		display: table-cell;
	}
	.layout-logo{
		background-color: #2d8cf0;
		width: 220px;
		float: left;
		height: 60px;
	}
	.layout-login{
		width: auto;
		/*float: left;*/
		height: 60px;
	}
}
</style>
