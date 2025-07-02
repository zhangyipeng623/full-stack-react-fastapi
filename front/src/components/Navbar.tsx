import { Link } from "react-router-dom";
import { routes } from "@/utils/router";
import { themes } from "@/utils/themeconfig";
import type { ThemeConfig } from "@/utils/themeconfig";
import { settings } from "@/utils/settings";
// 递归导航项组件
const NavItem = ({ route }: { route: any }) => {
  // 有子路由的项渲染为下拉菜单
  if (route.children && route.children.length > 0) {
    return (
      <li>
        <details>
          <summary>{route.name}</summary>
          <ul className="p-2">
            {route.children.map((childRoute: any, index: number) => (
              <NavItem key={index} route={childRoute} />
            ))}
          </ul>
        </details>
      </li>
    );
  }

  // 普通导航项
  return (
    <li>
      <Link to={route.path}>{route.name}</Link>
    </li>
  );
};

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {/* 移动端菜单 - 动态生成 */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {routes.map((route, index) => (
              <NavItem key={index} route={route} />
            ))}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          {settings.title}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* 桌面端菜单 - 动态生成 */}
        <ul className="menu menu-horizontal px-1">
          {routes.map((route, index) => (
            <NavItem key={index} route={route} />
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        {/* 主题切换部分 - 动态加载主题 */}
        <div className="relative group">
          <button
            tabIndex={0}
            className="btn m-1 transition-all duration-300 hover:bg-base-200"
          >
            主题
            <svg
              width="12px"
              height="12px"
              className="inline-block h-2 w-2 fill-current opacity-60 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048"
            >
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="absolute right-0 mt-2 w-30 bg-base-300 rounded-box shadow-xl z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 transform origin-top-right scale-95 group-hover:scale-100 max-h-[300px] overflow-y-auto"
          >
            {themes.map((theme: ThemeConfig, index: number) => (
              <li key={index}>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start hover:bg-base-200"
                  aria-label={theme.name}
                  value={theme.value}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
