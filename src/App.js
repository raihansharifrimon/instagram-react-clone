import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts';
import { Home } from './pages';
import './styles/style.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>}></Route>
    </Routes>
  );
}

export default App;
