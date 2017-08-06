// import permission_default from 'src/global/permission_default'

const getters = {
  	userIn: state => {
		      	return state.user.userInfo
	}, //用户所有信息
	// 员工信息
	staffIn:state => {
		return state.staff.staffManagment
	},
	personIn:state => {
		return state.person.personInfo
	},
	goodsIn:state=>{
		return state.goods.goodslist
	},
	vipIn:state => {
		return state.vip.vipData
	}
};
export default getters