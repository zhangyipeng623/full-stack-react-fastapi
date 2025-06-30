// 定义主题接口
export interface ThemeConfig {
  name: string; // 主题名称
  value: string; // 主题值（用于daisyUI）
  label: string; // 显示标签
  description?: string; // 可选描述
}

// 主题配置列表
export const themes: ThemeConfig[] = [
  {
    name: "Default",
    value: "default",
    label: "默认主题",
  },
  {
    name: "Retro",
    value: "retro",
    label: "复古风格",
  },
  {
    name: "Cyberpunk",
    value: "cyberpunk",
    label: "赛博朋克",
  },
  {
    name: "Valentine",
    value: "valentine",
    label: "情人节",
  },
  {
    name: "Aqua",
    value: "aqua",
    label: "水蓝风格",
  },
  {
    name: "Dark",
    value: "dark",
    label: "深色模式",
  },
  {
    name: "cupcake",
    value: "cupcake",
    label: "纸杯蛋糕",
  },
  // 可以在这里添加更多主题
];
