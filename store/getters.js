const getters = {
  avatarUrl: state => state.userInfo.avatarUrl,
  nickName: state => state.userInfo.nickName,
  city:state=>state.userInfo.city,
  country:state=>state.userInfo.country,
  language:state=>state.userInfo.language,
  tabList:state => state.app.tabList,
  homeData:state => state.app.homeData
}
export default getters
