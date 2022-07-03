import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Paypal from "../../Component/Paypal/Paypal";
import {PaymentStyle} from '../../Style/Payment/PaymentStyle'
import { PaypalInitiate } from "../../Redux/Action/ActionPayment";
import Header from "../Header/Header";
import Footer from "../Sidebar/Footer";
const PaymentTransfers = () => {
  const { id } = useParams();
  const { allFilmAdult } = useSelector((state) => state.adult);
  const { refreshTokens } = useSelector((state) => state.auth);
  const { paypal } = useSelector((state) => state.payment);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const [film, setFilm] = useState([]);
  useEffect(() => {
    if (id) {
      allFilmAdult.forEach((product) => {
        if (product._id == id) {
          setFilm(product);
          setTotal(product?.price);
        }
      });
    }
  }, [id]);
  const tranSuccess = async (payment) => {
    dispatch(
      PaypalInitiate({
        refreshTokens,
        mode_of_payment: "62135813bf17f53843c4d7b0",
        id_payment: payment.payerID,
        filmId: film._id,
        price: total,
      })
    );
  };
  useEffect(() => {
    if (paypal.status === 200) {
      window.location.href = "/home";
    }
  }, [paypal]);
  return (
    <React.Fragment>
    <PaymentStyle/>
    <Header />
    <div className="payment  d-flex justify-content-center flex-column align-items-center">
    
      <h2 className="mb-5">Payment methods</h2>
      <div className="d-flex  justify-content-between">
      {total > 0 && (
        <button >
          <Paypal total={total} tranSuccess={tranSuccess} />
        </button>
      )}

      <button className='mode-payment mx-5'>Stripe</button>
      <button className='mode-payment'> An Binh</button>
       </div>
    </div>
    <Footer />
    </React.Fragment>
  );
};

export default PaymentTransfers;
