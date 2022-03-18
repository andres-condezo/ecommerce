import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

function HomeScreen() {
  return (
    <div>
      <h1>Latest products</h1>

      <Row>
        {products.map(prod => (
          <Col key={prod._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={prod} />
          </Col>
          )
        )}
      </Row>
    </div>
  )
}

export default HomeScreen
