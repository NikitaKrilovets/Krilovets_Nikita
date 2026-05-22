import React from 'react'
import Header from './components/Header.jsx'
import ProductCard from './components/ProductCard.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div>
      <Header />

      <ProductCard title="Ноутбук" price="35000" category="Техніка" />
      <ProductCard title="Телефон" price="20000" category="Гаджети" />
      <ProductCard title="Навушники" price="3000" category="Аудіо" />

      <Footer />
    </div>
  );
}

export default App
