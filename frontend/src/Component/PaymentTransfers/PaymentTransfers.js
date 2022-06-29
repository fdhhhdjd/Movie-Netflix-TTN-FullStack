import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Paypal from "../../Component/Paypal/Paypal";
import { PaypalInitiate } from "../../Redux/Action/ActionPayment";
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
      {total > 0 && (
        <button>
          <Paypal total={total} tranSuccess={tranSuccess} />
        </button>
      )}

      <button>Stripe</button>
      <button>An Binh</button>
    </React.Fragment>
  );
};

export default PaymentTransfers;
