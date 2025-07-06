import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelloWorldPage } from '@/pages/HelloWorldPage';

function App() {
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  return (
    <Router basename={baseUrl}>
      <Routes>
        <Route path="/" element={<HelloWorldPage />} />
      </Routes>
    </Router>
  );
}

export default App;