const BackendDomain="http://localhost:5000/api"

const SummaryApi= {
    Register: {
        url: `${BackendDomain}/register`,
        method: "post"
    },
    Login: {
        url: `${BackendDomain}/login`,
        method: "post"
    },
    UserDetails: {
        url: `${BackendDomain}/user-details`,
        method: "get"
    },
    userLogout: {
        url: `${BackendDomain}/userLogout`,
        method: "get"
    },
    allUsers: {
        url: `${BackendDomain}/allUsers`,
        method: "get"
    },
    updateUser: {
        url: `${BackendDomain}/updateUser`,
        method: "post"
    },
    uploadProduct: {
        url: `${BackendDomain}/AddProduct`,
        method: "post"
    },
    getProducts: {
        url: `${BackendDomain}/listProducts`,
        method: "get"
    },
    editProduct: {
        url: `${BackendDomain}/editProduct`,
        method: "post"
    },
    getCategoryProduct: {
        url: `${BackendDomain}/categoryProduct`,
        method: "get"
    },
    getOneProduct: {
        url: `${BackendDomain}/OneProduct`,
        method: "post"
    },
     getProductDetails: {
        url: `${BackendDomain}/productDetails`,
        method: "post"
    },
    addToCartProduct: {
        url: `${BackendDomain}/addToCart`,
        method: "post"
    },
    CountAddToCart: {
        url: `${BackendDomain}/countAddToCart`,
        method: "get"
    },
    viewProductsCart: {
        url: `${BackendDomain}/viewProducts`,
        method: "get"
    },
    updateCart: {
        url: `${BackendDomain}/updateCart`,
        method: "post"
    },
    DeleteCart: {
        url: `${BackendDomain}/DeleteCart`,
        method: "post"
    },
    searchProduct: {
        url: `${BackendDomain}/search`,
        method: "get"
    },
    filterProduct: {
        url: `${BackendDomain}/filterProduct`,
        method: "post"
    },
    payment: {
        url: `${BackendDomain}/checkout`,
        method: "post"
    }




    
    
    
    
    
    


    
}

export default SummaryApi

