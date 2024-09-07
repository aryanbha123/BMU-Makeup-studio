import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { AuthProvider } from './AuthContext';
import ProtectedRoute from './auth/ProtectedRoute';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './authContext';
import Layout from './Layout/Layout';
import { CircularProgress } from '@mui/material';

const Home = React.lazy(()=>import('./pages/Home')) ;
const Contact = React.lazy(()=>import('./pages/Contact'));
export default function App() {
  return (
    <AuthProvider>

      <BrowserRouter>
        <Suspense fallback={<div className='h-screen w-screen fixed flex justify-center items-center top-0 left-0 bg-white z-50'><CircularProgress/></div>} >
          <Routes>
            <Route path='/' element={<Layout WrappedComponents={<Home />} ></Layout>} />
            <Route path='/service' element={<Layout WrappedComponents={<Home />} ></Layout>} />
            <Route path='/contact' element={<Layout WrappedComponents={<Contact />} ></Layout>} />
            <Route path='/about' element={<Layout WrappedComponents={<Home />} ></Layout>} />
            <Route element={<ProtectedRoute />}>
              <Route path='/admin' element={<>Admin</>} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  )
}
