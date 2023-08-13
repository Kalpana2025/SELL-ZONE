import React, { Fragment } from 'react'
import { Navigate,  Outlet} from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({isAdmin}) => {
   const { loading, isAuthenticated, user } = useSelector((state) => state.user);

   if(isAuthenticated === false){
      return <Navigate to = {"/login"} />
       }

       if( isAdmin === true && user.role !== "admin"){
         return <Navigate to = {"/login"} />
       }
return (
   <Fragment>
   {!loading && <Outlet />}
   </Fragment>
  )
};

export default ProtectedRoute;