import React, { Fragment, useState } from 'react'
import "./Shipping.css";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../../actions/cartAction";
import MetaData from "../layout/MetaData";
import { useAlert } from "react-alert";
import CheckoutSteps from "./CheckoutSteps.js";
import { useNavigate } from 'react-router-dom';


const Shipping = () => {

   const dispatch = useDispatch();
   const alert = useAlert();
   const navigate= useNavigate();

   const { shippingInfo } = useSelector((state) => state.cart);

   const [address, setAddress] = useState(shippingInfo.address);
   const [hostelName, setHostelName] = useState(shippingInfo.hostelName);
   const [roomNo, setRoomNo] = useState(shippingInfo.roomNo);
   const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

   const shippingSubmit = (e) => {
      e.preventDefault();

    if (phoneNo.length < 10 || phoneNo.length > 10) {
      alert.error("Phone Number should be 10 digits Long");
      return;
    }
    dispatch(
      saveShippingInfo({ address, hostelName, roomNo, phoneNo })
    );
    navigate("/order/confirm");
    };


   return (
      <Fragment>
         <MetaData title="Shipping Details" />
        
         <CheckoutSteps activeStep={0} />
        
         <div className='shippingContainer'>
            <div className='shippingBox'>
               <h2 className="shippingHeading">Shipping Details</h2>

               <form className="shippingForm"
                  encType="multipart/form-data"
                  onSubmit={shippingSubmit}
               >
                  <div>
                     <input
                        type="text"
                        placeholder="Address"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                     />
                  </div>


                  <div>
                     <input
                        type="text"
                        placeholder="Hostel Name"
                        required
                        value={hostelName}
                        onChange={(e) => setHostelName(e.target.value)}
                     />
                  </div>


                  <div>
                     <input
                        type="number"
                        placeholder="Room Number"
                        required
                        value={roomNo}
                        onChange={(e) => setRoomNo(e.target.value)}
                     />
                  </div>

                  <div>
                     <input
                        type="number"
                        placeholder="Phone Number"
                        required
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}
                        size="10"
                     />
                  </div>
                  <input
                     type="submit"
                     value="Continue"
                     className="shippingBtn"
                  />

               </form>

            </div>

         </div>

      </Fragment>
   )
}

export default Shipping