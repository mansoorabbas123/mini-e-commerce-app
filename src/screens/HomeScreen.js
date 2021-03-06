import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, products, error } = productList

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <>
            <h1>Latest Products</h1>
            {
                loading ? (<Loader />)
                    : error ? (<Message variant="danger">{error}</Message>) :
                        (<Row>
                            {products.map(product =>
                                <Col sm={12} md={6} lg={4} xl={3} key={product.id}>
                                    <Product product={product} />
                                </Col>)}
                        </Row>)
            }
        </>
    )
}

export default HomeScreen
