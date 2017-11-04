import Mock from "mockjs";

let wechatCouponListMock = Mock.mock('wechatCouponList',{
	"data":{
		"list|2-10": [{
			"id": '@guid()',
			"title": '@cname()',
			"type": '@cname()',
			"status": '@cname()'
		}]
	}
})


export default {};
