import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav"
import Search from "./components/Search"
import Home from "./components/Home"
import Notfound from "./components/Notfound"
import Repository from "./components/Repository"
import history from "./history"
import { RepoProvider } from "./context/RepoContext"
import { RepoInfoProvider } from "./context/RepInfoContext"
import { PageProvider } from "./context/PageContext"
import { SelectedProvider } from "./context/SelectedContext"
import { SearchProvider } from './context/SearchContext'

function App() {
  return (
    <div>
      <RepoProvider>
        <RepoInfoProvider>
          <PageProvider>
            <SelectedProvider>
              <SearchProvider>
                <Router history={history}>
                  <Nav />
                  <Search />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Repository" element={<Repository />} />
                    <Route path="*" element={<Notfound />} />
                  </Routes>
                </Router>
              </SearchProvider>
            </SelectedProvider>
          </PageProvider>
        </RepoInfoProvider>
      </RepoProvider>
    </div>
  );
}

export default App;
