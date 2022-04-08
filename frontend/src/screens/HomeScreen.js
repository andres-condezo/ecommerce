import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'
import axios from 'axios'
//import { useState } from 'react'

function HomeScreen() {
  const [products, setProducts] = useState([])

  useEffect(() => {

    async function fecthProducts() {
      const { data } = await axios.get('/api/products/${id}')
      setProducts(data)
    }

    fecthProducts()

  }, [])

  return (
    <div>
        <h1>Lastest Products</h1>
        <Row>
            {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    {/*<h3>{product.name}</h3>*/}
                    <Product product={product} />
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomeScreen