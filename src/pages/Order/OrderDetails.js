import React from 'react'
import { Layout } from 'antd'
import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { orderItems } from '../../components/Data/OrderData'
import './OrderDetails.css'
import OrderItems from '../../components/OrderDetails/OrderItems'
import { Input } from 'antd'
import { CloseOutlined, LeftCircleOutlined } from '@ant-design/icons'
import SignupForm from '../Homepage/SignupForm'
import PaymentForm from './PaymentForm'
import Numpad from './Numpad/Numpad'
import {
    Bills,
    Devider,
    OrderCard,
    OrderCart,
    OrderContainer,
    OrderDetails,
    OrderImg,
    OrderTotal,
    OrderWrapper,
    PaymentContainer,
    PaymentWrapper,
} from './OrderStyle'
const { Content, Sider } = Layout

const Order = () => {
    const [collapsed, setCollapsed] = useState(true)
    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={() => setCollapsed(collapsed)}
                >
                    <div
                        style={{
                            height: '32px',
                            margin: '16px',
                            background: '#00b4d8',
                        }}
                        className="logo"
                    ></div>

                    {orderItems.map((menuItem, index) => (
                        <OrderItems
                            key={index}
                            name={menuItem.name}
                            exact={menuItem.exact}
                            to={menuItem.to}
                            icon={menuItem.icon}
                        />
                    ))}
                </Sider>
                <Layout className="site-layout">
                    <Content>
                        <Routes>
                            {orderItems.map((menu, index) => (
                                <>
                                    <Route
                                        key={menu.name}
                                        path={menu.to}
                                        element={menu.comp}
                                    ></Route>
                                </>
                            ))}
                        </Routes>

                        <OrderContainer>
                            <PaymentContainer>
                                <Link to="/order" className="backBtn">
                                    <LeftCircleOutlined />
                                </Link>
                                <PaymentWrapper>
                                    <PaymentForm />
                                </PaymentWrapper>
                            </PaymentContainer>

                            <OrderCart>
                                <Bills
                                    style={{
                                        width: '10%',
                                        borderBottom: '3px solid gray',
                                    }}
                                >
                                    Bills
                                </Bills>
                                <OrderWrapper>
                                    <OrderCard>
                                        <OrderImg
                                            src="https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?size=626&ext=jpg"
                                            alt=""
                                        />
                                        <OrderDetails>
                                            <p>Lorem ipsum dolor sit</p>
                                            <CloseOutlined
                                                style={{ fontSize: '14px' }}
                                            />
                                            <span>1</span>{' '}
                                            <input type="text" value="M" />
                                        </OrderDetails>
                                        <h4 className="order-price">$40</h4>
                                    </OrderCard>

                                    <OrderCard>
                                        <OrderImg
                                            src="https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?size=626&ext=jpg"
                                            alt=""
                                        />
                                        <OrderDetails>
                                            <p>Lorem ipsum dolor sit</p>
                                            <CloseOutlined
                                                style={{ fontSize: '14px' }}
                                            />{' '}
                                            <span>1</span>
                                            <input type="text" value="M" />
                                        </OrderDetails>
                                        <h4 className="order-price">$40</h4>
                                    </OrderCard>

                                    <OrderCard>
                                        <OrderImg
                                            src="https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?size=626&ext=jpg"
                                            alt=""
                                        />
                                        <OrderDetails>
                                            <p>Lorem ipsum dolor sit</p>
                                            <CloseOutlined
                                                style={{ fontSize: '14px' }}
                                            />
                                            <span>1</span>{' '}
                                            <input type="text" value="M" />
                                        </OrderDetails>
                                        <h4 className="order-price">$40</h4>
                                    </OrderCard>
                                </OrderWrapper>
                                <Devider />
                                <OrderTotal>
                                    <p>
                                        Subtotal <span>$156</span>
                                    </p>
                                    <p>
                                        Tax (10%) <span>$15.6</span>
                                    </p>
                                    <p>
                                        Delivery Fee <span>$3</span>
                                    </p>

                                    <Devider />
                                    <p style={{ margin: '20px 0' }}>
                                        Total <span>$174.6 </span>
                                    </p>
                                    <Numpad />
                                </OrderTotal>
                            </OrderCart>
                        </OrderContainer>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

export default Order
