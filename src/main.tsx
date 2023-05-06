import React from 'react'
import ReactDOM from 'react-dom/client'

import First from './components/First.tsx'
import Second from './components/Second.tsx'
import Third from './components/Third.tsx'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'

import './index.css'

import { BrowserRouter , Route, Routes } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <main>
        <Routes >
          <Route path="/" element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route path="/third" element={<Third />} />
        </Routes>
      </main>
      
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
