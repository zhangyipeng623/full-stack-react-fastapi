一个全栈项目模板
前端 vite + react + typescript
后端 fastapi + sqlmodel + mysql

# 项目结构

## 根目录文件

- `.gitignore`: Git 版本控制忽略文件，指定不需要追踪的文件和目录
- `README.md`: 项目说明文档，包含项目介绍、启动方法等
- `docker-compose.yml`: Docker Compose 配置文件，定义服务组合和容器编排
- `mysql_data`: MySQL 数据库数据持久化目录

## 后端目录 (`back`)

- `init.sh`: 后端服务初始化脚本
- `main.py`: FastAPI 应用入口文件，定义应用实例和路由注册
- `requirements.txt`: Python 依赖包列表
- `test.py`: 后端单元测试文件
- `config`: 配置文件目录
  - `config.py`: 后端核心配置文件，包含数据库连接、服务端口等设置
- `back/data`: 数据存储目录
- `back/log`: 日志文件目录
- `back/model`: 数据模型目录
  - `db_conn.py`: 数据库连接管理
  - `model.py`: SQLModel 数据模型定义
- `back/static`: 静态资源目录
- `back/utils`: 工具函数目录
  - `utils.py`: 通用工具函数
- `back/views`: API 视图目录
  - `api.py`: API 路由和处理函数

## 前端目录 (`front`)

- `index.html`: HTML 入口文件
- `package.json`: Node.js 项目配置和依赖管理
- `yarn.lock`: Yarn 依赖版本锁定文件
- `vite.config.ts`: Vite 构建工具配置
- `eslint.config.js`: ESLint 配置文件
- `public`: 静态公共资源目录
- `src`: 源代码目录
  - `main.tsx`: React 应用入口文件
  - `App.tsx`: 根组件
  - `App.css`: 根组件样式
  - `index.css`: 全局样式
  - `assets`: 静态资源
  - `components`: 可复用组件
  - `pages`: 页面组件
  - `utils`: 工具函数
    - `settings.tsx`: 前端配置文件

## Nginx 目录 (`nginx`)

- `nginx.conf`: Nginx 主配置文件
- `conf.d`: 站点配置目录
  - `default.conf`: 默认站点配置
- `html`: 静态 HTML 文件目录
- `log`: Nginx 日志目录
  - `access.log`: 访问日志
  - `error.log`: 错误日志

# 项目启动

该项目使用 docker compose 启动，启动之前进行配置的修改

1. 修改 back 项目的配置文件 `back/config/config.py`
2. 修改 nginx 项目的配置文件 `nginx/conf/conf.d/default.conf`
3. 修改 front 项目里的配置文件 `front/src/utils/settings.tsx`
4. 启动项目 `docker compose up -d`
