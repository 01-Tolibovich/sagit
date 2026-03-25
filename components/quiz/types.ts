export interface KitchenData {
  style: string;
  layout: string;
  material: string;
  countertop: string;
  dimensions: string;
  budget: string;
  city: string;
  name: string;
  phone: string;
}

export const TAJIKISTAN_CITIES = [
  "Душанбе",
  "Худжанд",
  "Куляб",
  "Бохтар",
  "Истаравшан",
  "Канибадам",
  "Пенджикент",
  "Турсунзаде",
  "Исфара",
  "Вахдат",
  "Яван",
  "Дангара",
  "Хорог",
];

export const KITCHEN_STYLES = [
  { id: "modern", label: "Современный", icon: "✨" },
  { id: "classic", label: "Классика", icon: "🏛️" },
  { id: "loft", label: "Лофт", icon: "🧱" },
  { id: "scandi", label: "Скандинавский", icon: "🌲" },
  { id: "minimal", label: "Минимализм", icon: "⬛" },
  { id: "provence", label: "Прованс", icon: "🌿" },
];

export const LAYOUT_TYPES = [
  { id: "straight", label: "Прямая", icon: "📏" },
  { id: "l-shaped", label: "Г-образная (Угловая)", icon: "📐" },
  { id: "u-shaped", label: "П-образная", icon: "⊓" },
  { id: "island", label: "С островом", icon: "🏝️" },
];

export const MATERIALS = [
  { id: "mdf", label: "МДФ (Краска/Пленка)", icon: "🎨" },
  { id: "wood", label: "Массив дерева", icon: "🪵" },
  { id: "plastic", label: "Пластик", icon: "🧪" },
  { id: "veneer", label: "Шпон", icon: "📄" },
];

export const COUNTERTOPS = [
  { id: "stone-art", label: "Искусственный камень", icon: "💎" },
  { id: "stone-nat", label: "Натуральный камень", icon: "⛰️" },
  { id: "laminate", label: "ЛДСП (Ламинат)", icon: "📋" },
  { id: "compact", label: "Компакт-плита", icon: "📏" },
];

export const BUDGET_RANGES = [
  { id: "budget", label: "Эконом", icon: "💰" },
  { id: "standard", label: "Стандарт", icon: "💰💰" },
  { id: "premium", label: "Премиум", icon: "💰💰💰" },
];
