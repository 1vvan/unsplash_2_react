import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import MainPage from './components/MainPage/MainPage';
import UserPage from './components/UserPage/UserPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/user' element={<UserPage/>} />
          <Route path='*' element={
            <div className='no-page'>
              <span>Страница не найдена !</span>
          </div>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
