//https://m.api.zhe800.com/list/detail?channel=5&client_type=3&vtype=branddetail&ids=53577660%2C53577680%2C53577675%2C53577658%2C53577682%2C53577690%2C53577702%2C53577696%2C53577715%2C53577681%2C53577663%2C53577669%2C53577705%2C53577717%2C53577686%2C53577695%2C53577733%2C53577724%2C53577723%2C53577726%2C53577719&callback=getBrandDetailIds0
import fetchJsonp from "fetch-jsonp"
export const get_car_action = (dispatch)=>{
    let url = "https://m.api.zhe800.com/list/detail?channel=5&client_type=3&vtype=branddetail&ids=53577660%2C53577680%2C53577675%2C53577658%2C53577682%2C53577690%2C53577702%2C53577696%2C53577715%2C53577681%2C53577663%2C53577669%2C53577705%2C53577717%2C53577686%2C53577695%2C53577733%2C53577724%2C53577723%2C53577726%2C53577719"
    dispatch({
        type:"GET_LICKCAR",
        payload:new Promise(resolve=>{
            fetchJsonp(url)
            .then(res=>res.json())
            .then((data)=>{
               // console.log(data)
                resolve(data)
            })
        })
    })
}

//https://m.api.zhe800.com/list/deals/v2?user_id=85480025&user_type=1&user_role=4&limit=20&offset=20&visit_bit=null&cookie_id=&client_type=3&image_type=si1&url_name=wireless3943&min_price=&max_price=&order=&shop_type=&callback=m_datacenter_api



//https://m.api.zhe800.com/list/deals/v2?user_id=85480025&user_type=1&user_role=4&limit=20&offset=60&visit_bit=null&cookie_id=&client_type=3&image_type=si1&url_name=wireless3943&min_price=&max_price=&order=&shop_type=&callback=m_datacenter_api
//https://m.api.zhe800.com/list/deals/v2?user_id=85480025&user_type=1&user_role=4&limit=20&offset=20&visit_bit=null&cookie_id=&client_type=3&image_type=si1&url_name=wireless3943&min_price=&max_price=&order=&shop_type=&callback=m_datacenter_api
export const get_load_action = (dispatch,val)=>{
    let url = "https://m.api.zhe800.com/list/deals/v2?user_id=85480025&user_type=1&user_role=4&limit=20&offset="+val+"&visit_bit=null&cookie_id=&client_type=3&image_type=si1&url_name=wireless3943&min_price=&max_price=&order=&shop_type="
    dispatch({
        type:"GET_LOAD",
        payload:new Promise(resolve=>{
            fetchJsonp(url)
            .then(res=>res.json())
            .then((data)=>{
                //console.log(data.objects)
               resolve(data.objects)
            })
        })
    })
}
export const flag_action = (val)=>({
    type:"FLAG_ACTION",
    value:val
})