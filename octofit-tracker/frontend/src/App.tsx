import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container py-4">
        <header className="mb-4">
          <h1>OctoFit Tracker</h1>
          <nav>
            <Link to="/" className="me-3">Home</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h2>Welcome to OctoFit Tracker</h2>
      <p>Modern React + Vite frontend scaffolded and ready.</p>
    </div>
  );
}

export default App;
