import tabBarList from '@/utils/tabBar.js'
import homeData from '@/api/home.js'
const AppModule = {
  namespaced: true,
  state: {
    tabList:tabBarList,
    homeData:homeData
  },
  mutations: {
   SET_TABBAR(state,data){
     state.tabList =data
   }
  },
  actions: {
    
  },
}

export default AppModule
