// 定义主题接口
export interface ThemeConfig {
  name: string; // 主题名称
  value: string; // 主题值（用于daisyUI）
  label: string; // 显示标签
  description?: string; // 可选描述
}

// 主题配置列表
export const themes: ThemeConfig[] = [
  { name: "light", value: "light", label: "明亮" },
  { name: "dark", value: "dark", label: "深色模式" },
  { name: "cupcake", value: "cupcake", label: "纸杯蛋糕" },
  { name: "bumblebee", value: "bumblebee", label: "大黄蜂" },
  { name: "emerald", value: "emerald", label: "翡翠" },
  { name: "corporate", value: "corporate", label: "企业" },
  { name: "synthwave", value: "synthwave", label: "合成波" },
  { name: "retro", value: "retro", label: "复古风格" },
  { name: "cyberpunk", value: "cyberpunk", label: "赛博朋克" },
  { name: "valentine", value: "valentine", label: "情人节" },
  { name: "halloween", value: "halloween", label: "万圣节" },
  { name: "garden", value: "garden", label: "花园" },
  { name: "forest", value: "forest", label: "森林" },
  { name: "aqua", value: "aqua", label: "水蓝" },
  { name: "lofi", value: "lofi", label: "低保真" },
  { name: "pastel", value: "pastel", label: "马卡龙" },
  { name: "fantasy", value: "fantasy", label: "幻想" },
  { name: "wireframe", value: "wireframe", label: "线框" },
  { name: "black", value: "black", label: "纯黑" },
  { name: "luxury", value: "luxury", label: "奢华" },
  { name: "dracula", value: "dracula", label: "德古拉" },
  { name: "cmyk", value: "cmyk", label: "四色印刷" },
  { name: "autumn", value: "autumn", label: "秋天" },
  { name: "business", value: "business", label: "商务" },
  { name: "acid", value: "acid", label: "酸性" },
  { name: "lemonade", value: "lemonade", label: "柠檬水" },
  { name: "night", value: "night", label: "夜晚" },
  { name: "coffee", value: "coffee", label: "咖啡" },
  { name: "winter", value: "winter", label: "冬季" },
  { name: "dim", value: "dim", label: "昏暗" },
  { name: "nord", value: "nord", label: "北欧" },
  { name: "sunset", value: "sunset", label: "日落" },
  { name: "caramellatte", value: "caramellatte", label: "焦糖拿铁" },
  { name: "abyss", value: "abyss", label: "深渊" },
  { name: "silk", value: "silk", label: "丝绸" },
];
