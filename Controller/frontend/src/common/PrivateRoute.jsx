// src/common/PrivateRoute.js

import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Routes>
    <Route
      {...rest}
      element={
        auth.isAuthenticated ? (
          <Component />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  </Routes>
);

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
