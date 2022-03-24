import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import products from '../products'
import Rating from '../components/Rating'
import axios  from 'axios'

function ProductScreen() {
  const params = useParams()
  const [product, setProduct] = useState([])

  useEffect(() => {
    
    async function fetchProduct() {
      const { data } = await axios.get(`/api/products/${params.id}`)
      setProduct(data)
    }

    fetchProduct()
  }, [])

  return (
    <Row>
      <Link to='/' className='btn btn-light my-3'>Go Back</Link>

      <Col md={6}>
        <Image src={product.image} alt={product.name} fluid />
      </Col>

      <Col md={3}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h3>{product.name}</h3>
          </ListGroup.Item>

          <ListGroup.Item>
            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
          </ListGroup.Item>

          <ListGroup.Item>
            Price: ${product.price}
          </ListGroup.Item>

          <ListGroup.Item>
            Description {product.description}
          </ListGroup.Item>
        </ListGroup>
      </Col>

      <Col md={3}>
        <Card>
          <ListGroup variante='flush'>
            <ListGroup.Item>
              <Row>
                <Col>Price</Col>
                <Col>{product.price}</Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>Status</Col>
                <Col>{product.countInStock > 0 ? 'In Stock': 'Out of Stock'}</Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={product.countInStock === 0}>
                  Add to Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default ProductScreen
