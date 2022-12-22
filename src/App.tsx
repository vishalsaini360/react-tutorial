import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import { routes } from './components/Router'
import { useRoutes } from 'react-router'
function App() {
  const element = useRoutes(routes)
  return (
    <>
      <Header/>
      {element}
      <Footer/>
    </>
  );
}

export default App;
