import SummaryApi from "../common"
import  {toast} from 'react-toastify';


const addToCart = async (e, id) => {
    e?.stopPropagation()
    e?.preventDefault()

    const DataApi = await fetch(SummaryApi.addToCartProduct.url,
        {
            method: SummaryApi.addToCartProduct.method,
            credentials: 'include',
            headers: {
                'content-type': 'application/json'


            },
            body: JSON.stringify(
                {
                    productId: id
                })
        }
    )

    const DataResponse = await DataApi.json()
    if(DataResponse.success){
        toast.success(DataResponse.message)
    }
    if(DataResponse.error){
        toast.error(DataResponse.message)
    }
    return DataResponse

}

export default addToCart