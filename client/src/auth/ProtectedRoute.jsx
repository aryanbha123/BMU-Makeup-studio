import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


export default function ProtectRoute() {
  const user  = false;

  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
}
