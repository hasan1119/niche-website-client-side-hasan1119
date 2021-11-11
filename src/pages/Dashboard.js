import React, { useState } from "react";
import Header from "../components/Header.js";
import { Col, Row } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router";
import Profile from "../components/Profile.js";
import Orders from "../components/Orders.js";
import { NavLink } from "react-router-dom";
import AddService from "../components/AddService.js";
import MakeAdmin from "../components/MakeAdmin.js";
import ManageServices from "../components/ManageServices.js";
import "../assets/css/admin.css";

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
                  <NavLink to={`${url}/addservice`}>
                    <i class="fas fa-file-medical"></i> Add Services
                  </NavLink>
                </li>
                <li className="sideBarLink">
                  <NavLink to={`${url}/makeAdmin`}>
                    <i class="fas fa-user-plus"></i>Make admin
                  </NavLink>
                </li>
                <li className="sideBarLink">
                  <NavLink to={`${url}/manageServices`}>
                    <i class="fas fa-cog"></i> Manage Services
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
              <Route exact path={`${path}/addservice`}>
                <AddService />
              </Route>
              <Route exact path={`${path}/makeAdmin`}>
                <MakeAdmin />
              </Route>
              <Route exact path={`${path}/manageServices`}>
                <ManageServices />
              </Route>
            </Switch>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
