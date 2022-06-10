import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Tools from './pages/Tools/Tools'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <div>
      <BrowserRouter>
         <Routes>
            <Route
               path="/"
               element={
                  <>
                     <Header />
                     <Footer />
                  </>
               }
            >
               <Route index element={<Home />} />
               <Route path="/tools" element={<Tools />} />
            </Route>
         </Routes>
      </BrowserRouter>
   </div>
)
