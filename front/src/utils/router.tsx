import Home from "@/pages/Home";
// 导入其他页面组件（需要创建）
// import Parent from "@/pages/Parent";
// import Submenu1 from "@/pages/Submenu1";
// import Submenu2 from "@/pages/Submenu2";
// import Item3 from "@/pages/Item3";

// 定义路由配置接口
interface RouteConfig {
  path: string;
  element: React.ReactNode;
  name: string; // 导航显示名称
  children?: RouteConfig[]; // 子路由
}

// 路由配置数组
export const routes: RouteConfig[] = [
  {
    path: "/",
    element: <Home />,
    name: "首页",
  },
];
