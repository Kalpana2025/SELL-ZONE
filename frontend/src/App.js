import "./App.css";
import { useEffect,useState } from "react";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js"
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js"
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword  from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import axios from "axios";
import Payment from "./component/Cart/Payment.js"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Order/MyOrders.js";
import OrderDetails from "./component/Order/OrderDetails.js";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews";
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About.js";
import NotFound from "./component/layout/Not Found/NotFound.js";

function App() {
  const { isAuthenticated, user } = useSelector(state => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");
  const [isLoading,setIsLoading] = useState("");

// async function getStripeApiKey() {
// const { data } = await axios.get("/api/v1/stripeapikey");

//     setStripeApiKey(data.stripeApiKey);
//   }

async function getStripeApiKey() {
  try {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
    setIsLoading(false); // Set loading to false when the key is fetched
  } catch (error) {
    console.error("Error fetching Stripe API key:", error);
    setIsLoading(false); // Set loading to false even if there is an error
  }
}

if (isLoading){
 <div>Loading...</div>
}
  

  useEffect(() => {

    WebFont.load({
      google: {
        families: ["Roboto", "Poppins", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
   

    getStripeApiKey();
  }, []);

  // window.addEventListener("contextmenu", (e) => e.preventDefault());
  
  return (
    <Router>

      <Header />

      {isAuthenticated && <UserOptions user={user} />}

      <Elements stripe={loadStripe(stripeApiKey)}>
        <Routes>
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}> 
        <Route path="/process/payment" exact element={<Payment/>}/>
        </Route>
        </Routes>
      </Elements>
      
      
       <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/product/:id" exact element={<ProductDetails />} />
        <Route path={"/products"} exact element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/search" exact element={<Search />} />

        <Route path="/contact" exact element={<Contact />} />

        <Route path="/about" exact element={<About />} />

        {/* <Route path="/about" exact element={<About />} /> */}
 
        <Route path="/login" exact element={<LoginSignUp />} />
        <Route path="/password/forgot" exact element={<ForgotPassword/>}/>
        <Route path="/password/reset/:token" exact element={<ResetPassword/>}/>

        <Route element={<ProtectedRoute  isAuthenticated={isAuthenticated} />}>
        <Route path="/account" exact element={<Profile />}/> 
        </Route>
        <Route element={<ProtectedRoute  isAuthenticated={isAuthenticated} />}>
        <Route path="/me/update" exact element={<UpdateProfile/>}/> 
        <Route path="/password/update" exact element={<UpdatePassword/>}/> 
        <Route path="/shipping" exact element={<Shipping />}/>
        <Route path="/success" exact element={<OrderSuccess />}/>
        <Route path="/orders" exact element={<MyOrders />}/>
        <Route path="/order/confirm" exact element={<ConfirmOrder/>}/>
        <Route path="/order/:id" exact element={<OrderDetails />} />

        <Route 
        isAdmin={true}
         path="/admin/dashboard" 
         exact
          element={< Dashboard />}
          />

        <Route 
        isAdmin={true}
         path="/admin/products" 
         exact
          element={< ProductList />}
          />

        <Route 
        isAdmin={true}
         path="/admin/product" 
         exact
          element={<NewProduct />}
          />

        <Route 
        isAdmin={true}
         path="/admin/product/:id" 
         exact
          element={<UpdateProduct />}
          />

        <Route 
        isAdmin={true}
        path="/admin/orders" 
        exact
        element={<OrderList />}
        />

        <Route 
        isAdmin={true}
        path="/admin/order/:id" 
        exact
        element={<ProcessOrder />}
          />

        <Route 
        isAdmin={true}
        path="/admin/users" 
        exact
        element={<UsersList />}
          />
          
        <Route 
        isAdmin={true}
         path="/admin/user/:id" 
         exact
          element={<UpdateUser />}
          />

        <Route 
        isAdmin={true}
        path="/admin/reviews" 
        exact
        element={<ProductReviews />}
          />
         
        </Route>
        <Route path="/cart" exact element={<Cart />} />

        <Route
          element={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        />
        </Routes> 
        
        <Footer />
    </Router>
  );
};

export default App;
