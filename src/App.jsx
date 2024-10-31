import './css/App.css';
import Sidebar from './Nav/Sidebar.jsx';
import Annual_Dashboard from './Comp/Annual/Annual_Dashboard.jsx';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Annual_Dashboard />
    </div>
  );
}

export default App;