import './styles/App.css';
import { Container } from './components/AlbumInfo/Container';
import { Faixas } from './components/Faixas/Faixas';
import { Footer } from './components/Footer/Footer';

function App() {

  return (
    <>
      <section className='new-album'>
        <Container/>
      </section>
      <section className='faixas'>
        <Faixas/>
      </section>
      <Footer/>
      
    </>
  )
}

export default App
