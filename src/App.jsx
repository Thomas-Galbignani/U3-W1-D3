import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import BookList from './components/BooksList';
import MyFooter from './components/MyFooter';
import fantasy from './data/fantasy.json';

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <main className="container my-4"> {/* Contenitore per il contenuto principale */}
        {/* Sostituisci AllTheBooks con BookList e passa i dati */}
        <BookList books={fantasy} /> {/* Passa l'array fantasy al BookList */}
      </main>
      <MyFooter />
    </>
  );
}

export default App;
