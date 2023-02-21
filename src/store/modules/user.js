export default {
    namesqaced:true,
    state:()=>{
        
        return{
            userinfo:{
                to:'杨基豪',
                namee:'张三'
            }
        }
    },
    mutations:{
        updatename(state,na) {
            
            state.userinfo.namee=na
        },


    },
    actions:{
        updatenames({commit},jj){
            setTimeout(() => {
                commit('updatename',jj)
            }, 2000);
        }
    }
}