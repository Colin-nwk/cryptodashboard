import { Routes, Route } from "react-router-dom";

import { Sidebar, Header } from "./components";
import {
  Home,
  CryptoCurrencies,
  Exchange,
  News,
  CryptoDetail,
  Missing,
} from "./pages";

import "./App.css";

function App() {
  // const renderMultiRoutes = ({ element: Element, paths, ...rest }) =>
  //   paths.map((path) => (
  //     <Route key={path} path={path} {...rest} element={Element} />
  //   ));
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Sidebar />
      <div className="ml-16">
        <Header />
        <Routes>
          {/* {renderMultiRoutes({
            paths: ["/", "/home"],
            element: <Home />,
          })} */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/exchange" element={<Exchange />}></Route>
          <Route
            path="/cryptocurrencies"
            element={<CryptoCurrencies />}
          ></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/cryptodetail" element={<CryptoDetail />}></Route>
          <Route path="*" element={<Missing />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
