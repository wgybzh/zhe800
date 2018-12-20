import fetchJsonp from "fetch-jsonp"


export const dealList_action = () =>({
    type:"DEALLIST",
    payload:new Promise(resolve=>{
        let url = "https://m.api.zhe800.com/list/deals/v2?user_id=&user_type=1&user_role=1&limit=20&offset=0"
        fetchJsonp(url)
        .then(res=>res.json())
        .then((data)=>{
           resolve(data)
        })
    })
   
})