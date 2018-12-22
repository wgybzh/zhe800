import fetchJsonp from "fetch-jsonp"


export const getData_action = () =>({
   type:"GET_DATA",
   payload:new Promise(resolve=>{
       let url="https://m.api.zhe800.com/list/detail?ids=53790663,53543701,53796651,52763010,53781692,53448277,53829844,53469801,53919039,53074516,54014127,53861368,53799920,54053697,53204017,54055759,53234006,53949438,53200512,53783207&client_type=3&channel=undefined";
       fetchJsonp(url).then(res=>res.json())
       .then(data=>{
           resolve(data)
       })
   })
})
export const getMoreData_action = (val) =>({
    type:"GET_MORE_DATA",
    payload:new Promise(resolve=>{
        let url="https://m.api.zhe800.com/list/deals/v2?user_id=85480025&user_type=1&user_role=4&limit="+val+"&offset=20&visit_bit=null&cookie_id=&client_type=3&image_type=si1&url_name=wireless1008&min_price=&max_price=&order=&shop_type=";
        fetchJsonp(url).then(res=>res.json())
        .then(data=>{
            resolve(data.objects)
        })
    })
 })
 //吸顶
 export const toTop_action = (val) =>({
    type:"TO_TOP",
    value:val
 })