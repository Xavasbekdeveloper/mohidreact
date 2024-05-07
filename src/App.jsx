import About from "./components/about/About"
import Brand from "./components/brand/Brand"
import Hero from "./components/hero/Hero"
import Header from "./components/layout/header/Header"
import Products from "./components/products/Products"


function App() {

  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Brand/>
        <Products/>
        <About/>
      </main>
    </>
  )
}

export default App
