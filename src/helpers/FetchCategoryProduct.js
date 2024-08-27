import SummaryApi from "../common"

const FetchCategoryProduct=async(category)=>{

    const dataApi=await fetch(SummaryApi.getOneProduct.url,{
        method:SummaryApi.getOneProduct.method,
        headers: {
            'content-type':"application/json"
        },
        body: JSON.stringify({
            category:category
        })
    })

    const dataResponse=await dataApi.json()

    return dataResponse

}
export default FetchCategoryProduct