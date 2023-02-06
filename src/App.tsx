import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './modules/home/HomePage';
import Sidebar from './modules/shared/Sidebar';
import TeamDetails from './modules/home/Components/TeamDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="container mx-auto mt-12">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="teams/:teamId" element={<TeamDetails />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
