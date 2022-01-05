import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav"
import Search from "./components/Search";
import Home from "./components/Home"
import Notfound from "./components/Notfound"
import history from "./history";
import { RepoProvider } from "./context/RepoContext"

function App() {
  return (
    <div>
      <RepoProvider>
        <Router history={history}>
          <Nav />
          <Search />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </Router>
      </RepoProvider>
    </div>
  );
}

export default App;
