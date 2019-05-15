import React from "react";
import auth  from "../../utils/Auth";
import { Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => 
        ( 
            auth() ? <Component {...props} /> : <Redirect to="/" />
        )} />  
)

export default PrivateRoute;
