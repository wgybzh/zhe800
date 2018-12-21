const defautState = {
    list:[],
    lista:[],
    page:20,
    flag:false
}
export default (state = defautState,action)=>{
    //console.log(action.type)
    // eslint-disable-next-line default-case
    switch(action.type){
        case "GET_LICKCAR_FULFILLED":
            let getState = JSON.parse(JSON.stringify(state))
            getState.list = action.payload
            return getState;
        case "GET_LOAD_FULFILLED" :
            let getListaState = JSON.parse(JSON.stringify(state))
           getListaState.lista=[...getListaState.lista,...action.payload]
           getListaState.page+=20
           return getListaState;
        case "FLAG_ACTION":
            let flagState = JSON.parse(JSON.stringify(state))
           if(action.value===1){
            flagState.flag = true
           }else{
            flagState.flag = false
           }
           return flagState
    }
    return state
}