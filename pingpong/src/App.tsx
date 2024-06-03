
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './layout/Layout';
import './App.css'
import HomePage from './compenents/HomePage';

function App() {

  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route index path="/" element={< HomePage/>} />
          </Routes>
        </Layout>
      </Router>
    </div>
  )
}

export default App
