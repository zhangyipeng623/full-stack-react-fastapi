import { Route, Routes } from "react-router-dom";
import { routes } from "@/utils/router";
import { Navbar } from "@/components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="content h-full w-full">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;
