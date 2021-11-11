import React from "react";
import Header from "../components/Header.js";
import { Col, Row } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router";
import Profile from "../components/Profile.js";
import Orders from "../components/Orders.js";
import { NavLink } from "react-router-dom";
import AddProduct from "../components/AddProduct.js";
import MakeAdmin from "../components/MakeAdmin.js";
import ManageProducts from "../components/ManageProducts.js";
import "../assets/css/admin.css";
import MyOrders from "../components/MyOrders.js";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Header />
      <div className="mx-2 dashboard">
        <Row>
          <Col className="admin-side-bar">
            <div>
              <ul>
                <li className="sideBarLink">
                  <NavLink to={`${url}/profile`}>
                    <i class="fas fa-user-circle"></i> Profile
                  </NavLink>
                </li>
                <li className="sideBarLink">
                  <NavLink to={`${url}/orders`}>
                    <i class="fas fa-list"></i> Order List
                  </NavLink>
                </li>
                <li className="sideBarLink">
                  <NavLink to={`${url}/myorder`}>
                    <i class="fas fa-cart-arrow-down"></i> My order
                  </NavLink>
                </li>
                <li className="sideBarLink">
                  <NavLink to={`${url}/addProduct`}>
                    <i class="fas fa-file-medical"></i> Add Product
                  </NavLink>
                </li>
                <li className="sideBarLink">
                  <NavLink to={`${url}/makeAdmin`}>
                    <i class="fas fa-user-plus"></i>Make admin
                  </NavLink>
                </li>
                <li className="sideBarLink">
                  <NavLink to={`${url}/manageProduct`}>
                    <i class="fas fa-cog"></i> Manage Products
                  </NavLink>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={8} lg="9" className="admin-container">
            <Switch>
              <Route exact path={path}>
                <Profile></Profile>
              </Route>
              <Route exact path={`${path}/profile`}>
                <Profile></Profile>
              </Route>
              <Route exact path={`${path}/orders`}>
                <Orders></Orders>
              </Route>
              <Route exact path={`${path}/myorder`}>
                <MyOrders></MyOrders>
              </Route>
              <Route exact path={`${path}/addProduct`}>
                <AddProduct></AddProduct>
              </Route>
              <Route exact path={`${path}/makeAdmin`}>
                <MakeAdmin />
              </Route>
              <Route exact path={`${path}/manageProduct`}>
                <ManageProducts />
              </Route>
            </Switch>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
