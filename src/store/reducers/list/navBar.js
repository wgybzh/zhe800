
const defaultState = {
        navList:[],
        list:[],
        morelist:[]
} 
export default (state = defaultState,action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case "GET_DATA_FULFILLED":
            let navState = JSON.parse(JSON.stringify(state));
            navState.navList = action.payload
            return navState
        case "GET_List_FULFILLED":
            let list = JSON.parse(JSON.stringify(state));
                list.list=action.payload
            return list

       // case "INSHOP_DATA_FULFILLED":  进入购物页面

    }
    return state
}

