import "./App.css";
import Navbar from "./component/Navbar";
import Product from "./component/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Product country="us" key="business"  category="business" />
            }
          />
          <Route exact path="/" element={<Product country="us" category="business" key="business"/>}/>
          <Route exact path="/ru" element={<Product country="ru" category="business" key="business"/>}/>
          <Route exact path="/jp" element={<Product country="jp" category="business" key="business"/>}/>
          <Route exact path="/nz" element={<Product country="nz" category="business" key="business"/>}/>
          <Route exact path="/" element={<Product key="business" pagesize={5} category="business" />} />
          <Route
            exact
            path="/business"
            element={
              <Product
                pagesize={5}
                key="business"
                country="us"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <Product
                country="us"
                key="general"
                pagesize={5}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <Product
                country="us"
                key="health"
                pagesize={5}
                category="health"
              />
            }
          />
          <Route
            exact
            path="/sport"
            element={
              <Product
                country="us"
                key="sports"
                pagesize={5}
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <Product
                country="us"
                key="technology"
                pagesize={5}
                category="technology"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <Product
                country="us"
                key="entertainment"
                pagesize={5}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <Product
                country="us"
                key="science"
                pagesize={5}
                category="science"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
