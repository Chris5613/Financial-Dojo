import './css/App.css';
import './css/Annual.css';
import './css/Monthly.css'
import Sidebar from './Nav/Sidebar.jsx';
import Annual_Dashboard from './Comp/Annual/Annual_Dashboard.jsx';
import Monthly from './Comp/Monthly/Monthly.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div className="container">
            <Sidebar />
            <Routes>
                <Route path="/" element={<Annual_Dashboard />} />
                <Route path="/monthly" element={<Monthly />} />
            </Routes>
        </div>
    </BrowserRouter>
);
}

export default App;