import './App.css';
import Header from './component/Header.js'
import Body from './component/Body.js'
import Footer from './component/Footer.js'

export default function App() {
  return (
    <section className='container'>
      <Header/> 
      <Body/>
      <Footer/>
    </section>
  )
}
