import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
    return (
        <>
            <Card className="my-3 p-3 rounded">
                <Link to={`/Product/${product.id}`}>
                    <Card.Img src={product.image} variant="top" />
                </Link>
                <Card.Body>
                    <Link to={`/Product/${product.id}`} style={{ color: 'black', textDecoration: "none" }}>
                        <Card.Title as="div">
                            <strong>{product.title}</strong>
                        </Card.Title>
                    </Link>
                    <Card.Text as="h3" className="py-2">
                        {' '}
                        Rs {product.price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Product
