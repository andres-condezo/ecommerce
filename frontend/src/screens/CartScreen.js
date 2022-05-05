import React, { useEffect } from "react";
import { Link, useParams, useSearchParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import { Message } from '../components/Message';
import { addToCart } from '../actions/cartActions';

function CartScreen({history}) {
  const [ searchParams, setSearchParams ] = useSearchParams();
  const { productId } = useParams();
  // const qty = searchParams.get('qty');
  const location = useLocation();
  const qty = location.state ? Number(location.state) : 1;

  console.log('qty:', qty);
  console.log('qty,id =>', qty,productId);


  return (
    <div>
      Cart
    </div>
    )
}

export default CartScreen
