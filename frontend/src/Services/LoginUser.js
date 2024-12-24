const LoginUser = async ({email,password})=>{
    //api call -- to some url
    //using the response 
    let userData = {
        email:email,
        password:password,
        role:"staff",
        valid:true
    }
    return userData;
}

export default LoginUser