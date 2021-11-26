import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './component/layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<div >123</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
