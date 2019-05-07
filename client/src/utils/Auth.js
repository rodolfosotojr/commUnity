import axios from 'axios';

const checkAuth = {
    isAuth: false,
    authenticate(){
        axios.post("/auth/local/protected").then(res =>{
            console.log(res)
            if(res.status === 200)
            {
                this.isAuth = true;
            }
            else this.isAuth = false;
        })
    }

}

export default checkAuth;