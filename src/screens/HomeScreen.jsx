import { Row, Col } from 'react-bootstrap';
import products from '../products';

function HomeScreen(){
  return(
    <div>
      <h1>Latest Products</h1>
    <Row>
    {products.map(product => (
      <Col sm={12} md={6} Lg={4} xL={3}>
        <h3>{product.name}</h3>
      </Col>
    ))}      
    </Row>
    </div>
    )
}

export default HomeScreen
