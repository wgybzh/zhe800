import fetchJsonp from "fetch-jsonp"


export const dealList_action = (id) =>({
   
    type:"DEALLIST",
    payload:new Promise(resolve=>{
            if(id){
                let url =""
                if(id==="tj"){
                     url = "https://m.api.zhe800.com/list/deals/v2?user_id=&user_type=1&user_role=1&limit=20&offset=0"
                }else{
                     url = "https://m.api.zhe800.com/list/deals/v2?user_id=&user_type=1&user_role=1&limit=20&offset=0&url_name="+id
                }
                fetchJsonp(url)
                .then(res=>res.json())
                .then((data)=>{
                    data.objects.map((item)=>{
                        if(item.deal){
                            item.deal.Intprice= Math.floor(item.deal.price/100)
                            item.deal.Floprice= Math.floor(item.deal.price%100)
                            item.deal.Listprice= item.deal.list_price/100
                            
                        }
                       data.id = id;
                    })
                   resolve(data)
                })
    
            }
       
     })
   
})

export const homeNav_action = () =>({
    type:"HOMENAV",
    payload:new Promise(resolve=>{
        let url = "https://m.zhe800.com/mz/brand/index/tag_new?tagid=all&title=&subtag=true"
        fetchJsonp(url)
        .then(res=>res.json())
        .then((data)=>{
           resolve(data.brandTag[0].categories)
        })
    })
   
})

export const moreHomeList_action = (id,page) =>({
   
    type:"MOREDEALLIST",
    payload:new Promise(resolve=>{
            if(id){
                let url =""
                if(id==="tj"){
                     url = "https://m.api.zhe800.com/list/deals/v2?user_id=&user_type=1&user_role=1&limit=20&offset="+page
                }else{
                     url = "https://m.api.zhe800.com/list/deals/v2?user_id=&user_type=1&user_role=1&limit=20&offset="+page+"&url_name="+id
                }
                fetchJsonp(url)
                .then(res=>res.json())
                .then((data)=>{
                    data.objects.map((item)=>{
                        if(item.deal){
                            item.deal.Intprice= Math.floor(item.deal.price/100)
                            item.deal.Floprice= Math.floor(item.deal.price%100)
                            item.deal.Listprice= item.deal.list_price/100
                            
                        }
                    })
                    
                   resolve(data)
                })
    
            }
       
     })
   
})

export const flag_action = (val)=>({
    type:"FLAG_TOGGLE",
    value:val
})
