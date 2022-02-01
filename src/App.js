import './App.css';
import { Contacto } from './components/Contacto';
import { Cursos } from './components/Cursos';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PrincipalUI } from './components/Principal';
import { Programas } from './components/Programas';
import { Recursos } from './components/Recursos';
import { Testimonios } from './components/Testimonios';

function App() {
  return (
    <>
      <Header />
      <PrincipalUI />
      <Recursos />
      <Programas />
      <Testimonios />
      <Cursos />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
