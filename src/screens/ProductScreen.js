import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const ProductScreen = ({ match, history }) => {

    const productId = match.params.id
    const productDetails = useSelector(state => state.productDetails)
    const { loading, productDetail, error } = productDetails
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()

    const addToCardHandler = () => history.push(`/cart/${productId}?qty=${qty}`)

    useEffect(() => {

        dispatch(fetchProductDetails(productId))

    }, [dispatch])

    return (
        <>
            <Link to='/' className="btn btn-light my-3">Go Back</Link>
            {loading ? (<Loader />) : error ? (<Message variant="danger">Error</Message>) : (

                <Row>
                    <Col md={6}>
                        <Image src={productDetail.image} alt={productDetail.title} fluid />
                    </Col>
                    <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="py-3">
                                <h3>{productDetail.title}</h3>
                            </ListGroup.Item >
                            <ListGroup.Item className="py-3">
                                Price: ${`${productDetail.price}`}
                            </ListGroup.Item>
                            <ListGroup.Item className="py-3">
                                <p>{productDetail.description}</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price</Col>
                                        <Col> ${`${productDetail.price}`}</Col>
                                    </Row>

                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col>
                                            <Form.Control
                                                as="select"
                                                value={qty}
                                                onChange={(e) => setQty(e.target.value)}>
                                                {[1, 2, 3, 4].map((el, id) => <option key={id}>{el}</option>)}
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item className="text-center">
                                    <Button
                                        className="btn-block" type="button"
                                        variant="info"
                                        onClick={addToCardHandler}
                                    >
                                        ADD TO CART
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            )
            }

        </>
    )
}

export default ProductScreen
