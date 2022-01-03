import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { Col, Button, Row, ListGroup, Card, Image, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Message from '../components/Message'

const CartScreen = ({ match, location, history }) => {

    const dispatch = useDispatch()
    const { cartItems } = useSelector(state => state.cart)
    const productId = match.params.id
    const qty = location.search ? location.search.split('=')[1] : 1

    useEffect(() => {

        if (productId) {
            dispatch(addToCart(productId, qty))
        }

    }, [dispatch, productId, qty])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }
    return (

        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (<Message> cart is empty <Link to='/'>Go Back</Link> </Message>) : (
                    <ListGroup variant="flush">
                        {cartItems.map(item => {
                            return <ListGroup.Item className="mt-4" key={item.product}>
                                <Row>
                                    <Col>
                                        <Image src={item.image} fluid rounded />
                                    </Col>
                                    <Col>
                                        <Link to={`/Product/${item.product}`}>{item.title}</Link>
                                    </Col>
                                    <Col>
                                        Price {item.price}
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            as="select"
                                            value={item.qty}
                                            onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                            {
                                                [0, 1, 3, 4].map(num =>
                                                    <option key={num + 1}>{num + 1}</option>
                                                )
                                            }

                                        </Form.Control>
                                    </Col>
                                    <Col>
                                        <Button onClick={() => removeFromCartHandler(item.product)} variant="info">
                                            <i className="fas fa-trash"></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        })}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <Card style={{ width: '18rem' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item className="p-3">
                            <h2>
                                Subtotal
                                ({cartItems.reduce((acc, cur) => acc + Number(cur.qty), 0)})
                                items
                            </h2>
                            Rs {(cartItems.reduce((acc, cur) => Number(acc + cur.qty) * cur.price, 0)).toFixed(2)}
                        </ListGroup.Item>
                        <ListGroup.Item className="text-center">
                            <Button
                                type="button"
                                className="btn-block"
                                variant="info"
                                disabled
                                onClick={checkoutHandler}
                            >
                                Procceed To Checkout
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>

    )
}

export default CartScreen
