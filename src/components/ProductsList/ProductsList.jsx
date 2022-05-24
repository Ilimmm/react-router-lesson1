import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const ProductsList = ({getProducts,products, deleteProduct}) => {
  const [selectedProduct, setSelectedProduct] = useState("")
  const [hover, setHover] = useState("")
    
  useEffect(()=> {
    getProducts()
  }, [])
  // console.log(deleteProduct)
    return (
        <div className="container d-flex justify-content-between">
            {products.map((item)=> (<Card
            key={item.id}
            onClick={()=> setSelectedProduct(item.id)} onMouseEnter = {()=> setHover(item.id)} onMouseLeave = {()=> setHover ("")} style={{ width: '18rem', border: selectedProduct === item.id ? "1px solid black" : "", backgroundColor: hover === item.id ? "grey" : "white" }}>
  <Card.Img variant="top" src={item.image} />
  <Card.Body>
    <Card.Title>{item.title}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Bye</Button>
    <Button onClick={()=> deleteProduct(item.id)} variant="primary">Delete</Button>
  </Card.Body>
</Card>))}
        </div>
    );
};

export default ProductsList;