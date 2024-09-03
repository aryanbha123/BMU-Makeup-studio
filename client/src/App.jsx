import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { AuthProvider } from './AuthContext';
import ProtectedRoute from './auth/ProtectedRoute';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './authContext';
import Layout from './Layout/Layout';
import Home from './pages/Home';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout WrappedComponents={<Home/>} ></Layout>} />
          <Route element={<ProtectedRoute/>}>
            <Route path='/admin' element={<>Admin</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
