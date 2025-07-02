import { Route, Routes } from "react-router-dom";
import { routes } from "@/utils/router";
import { Navbar } from "@/components/Navbar";

interface RouteItem {
  path: string;
  name: string;
  children?: RouteItem[];
}

function App() {
  const navRoutes: RouteItem[] = [
    {
      path: "/home",
      name: "首页",
    },
  ];
  return (
    <div className="w-full h-screen overflow-hidden">
      <Navbar routes={navRoutes} />
      <div className="content h-full w-full">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
