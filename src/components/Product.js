import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
    return (
        <>
            <Card className="my-3 p-3 rounded">
                <Link to={`/Product/${product.id}`}>
                    <div style={{ 'width': '200px' }}>
                        <Card.Img src={product.image} style={{ "width": "100%" }} variant="top" />
                    </div>
                </Link>
                <Card.Body>
                    <Link to={`/Product/${product.id}`} style={{ color: 'black', textDecoration: "none" }}>
                        <Card.Title as="div">
                            <strong>{product.title}</strong>
                        </Card.Title>
                    </Link>
                    <Card.Text as="h3" className="py-2">
                        {' '}
                        $ {product.price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Product
