<template>
  	<div class="wechatCardList">
  		<Row style="height: 60px;">
  			<Col span="24" class="wechatCardList-header">H5渠道优惠券</Col>
  		</Row>
		<Row class="content">
			<Row style="margin: 30px 0 30px;">
	  			<Col span="24">
	  				<Col :xs="{span: 6}" :sm="{span: 6}" :md="{span: 4}" :lg="{span: 3}">
	  					<Select v-model="selectType">
	  						<Option :value="1" :key="1">全部</Option>
					        <Option :value="2" :key="2">待审核</Option>
					        <Option :value="3" :key="3">审核失败</Option>
					        <Option :value="4" :key="4">通过审核</Option>
					        <Option :value="5" :key="5">卡券被商户删除</Option>
					        <Option :value="6" :key="6">在公众平台投放过的卡券</Option>
					    </Select>
	  				</Col>
	  				<Col :xs="{span: 18}" :sm="{span: 18}" :md="{span: 20}" :lg="{span: 20}" style="padding-left: 60px;">
	  					<Button type="error">清空条件</Button>
	  					<Button type="primary" icon="ios-search">搜索</Button>
	  				</Col>
	  			</Col>
	  		</Row>
			<Row>
	  			<Table border :columns="wechatCouponListColumns" :data="wechatCouponListData"></Table>
	  		</Row>
	  		<Row style="margin-top: 20px;">
	  			<Page :total="pageTotal" show-total show-elevator  show-sizer style="float: right;padding-right: 3px;"></Page>
	  		</Row>
		</Row>
  		
  	</div>
</template>

<script>
import {data} from "./wechatcouponservice";
import {ajax} from "../../../assets/js/ajax"
export default {
  name: 'wechatCardList',
  data(){
  	return {
  		selectType: 1,
  		wechatCouponListColumns: [{
  			title: '卡券类型',
  			key: 'type',
  			align: 'center'
  		},{
  			title: '卡券标题',
  			key: 'title',
  			align: 'center'
  		},{
  			title: '状态',
  			key: 'status',
  			align: 'center'
  		},{
  			title: '卡券ID',
  			key: 'id',
  			align: 'center'
  		},{
  			title: '操作',
  			key: 'opearte',
  			align: 'center'
  		}],
  		wechatCouponListData: [],
  		pageTotal: 0
  	}
  },
  methods: {
  	getWechatCouponList(){
  		let self = this;
  		ajax.get('wechatCouponList').then(res => {
  			self.wechatCouponListData = res.data.list;
  			for (let item of self.wechatCouponListData) {
  				item.opearte = "使用范围";
  			}
  			self.pageTotal = self.wechatCouponListData.length;
  		})
  	}
  },
  mounted(){
  	this.getWechatCouponList();
  }
}
</script>

<style lang="scss" scoped>
.wechatCardList{
	.wechatCardList-header{
		font-size: 26px;
		color: #1c2438;
	}
	.content{
		width: 100%;
		background-color: #fff;
		padding: 8px;
	}
}
</style>
