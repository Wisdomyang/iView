const wechatcouponlist = resolve =>{
	require.ensure(['../pages/coupon/wechatcoupon/wechatcouponlist'], () => {
    resolve(require('../pages/coupon/wechatcoupon/wechatcouponlist'))
  })  
}

export const routes=[
	{
	    path: '/', 
	    name: 'wechatcouponlist',
	    component: wechatcouponlist,
	    meta: {
	      path: 'wechatcouponlist'
	    }
	},
	{
      path: '*', 
      redirect: '/' 
    }
]
