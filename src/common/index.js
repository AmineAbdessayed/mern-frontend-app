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
    }
    


    
}

export default SummaryApi

