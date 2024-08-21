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
}

export default SummaryApi

