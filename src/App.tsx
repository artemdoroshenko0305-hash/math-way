import React, { useState } from 'react';
import { 
  Network, 
  Flame, 
  GraduationCap,
  UserRound, 
  Newspaper, 
  Sparkles
} from 'lucide-react';

type TabId = 'map' | 'practice' | 'lesson' | 'character' | 'news';

interface NavItem {
  id: TabId;
  label: string;
  icon: React.ElementType;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'map', label: 'Карта знаний', icon: Network },
  { id: 'practice', label: 'Текущая практика', icon: Flame },
  { id: 'lesson', label: 'Урок с учителем', icon: GraduationCap },
  { id: 'character', label: 'Персонаж', icon: UserRound },
  { id: 'news', label: 'Журнал новостей', icon: Newspaper },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('map');
  const currentItem = NAV_ITEMS.find((tab) => tab.id === activeTab) || NAV_ITEMS[0];

  return (
    <div className="relative min-h-screen flex flex-col bg-[#0d0d12] text-neutral-100 math-bg-grid selection:bg-amber-500/30 selection:text-amber-300">
      {/* Мягкие фоновые фиолетово-золотые световые пятна */}
      <div className="fixed -top-24 left-1/4 w-96 h-96 bg-purple-900/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="fixed top-1/3 -right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Верхняя навигационная панель */}
      <header className="sticky top-0 z-50 w-full bg-[#12111a]/85 backdrop-blur-xl border-b border-amber-400/25 shadow-gold-glow-subtle">
        {/* Неоновая золотистая световая линия вдоль всей шапки */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_12px_rgba(251,191,36,0.8)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3 flex items-center justify-between gap-4">
          {/* Логотип приложения */}
          <div className="flex items-center gap-3 select-none">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#1b172a] via-[#151221] to-[#251b3a] border border-amber-400/60 shadow-gold-neon">
              <span className="font-serif text-amber-400 font-bold text-xl drop-shadow-[0_0_10px_rgba(251,191,36,0.7)]">
                ∑
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-extrabold tracking-wider text-lg text-white font-mono uppercase">
                Math <span className="text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]">Way</span>
              </span>
              <span className="text-[11px] text-neutral-400">
                Образовательная среда
              </span>
            </div>
          </div>

          {/* Пункты навигации */}
          <nav className="flex items-center gap-1 sm:gap-2 p-1.5 bg-[#0d0d12]/90 border border-neutral-800/80 rounded-2xl backdrop-blur-md shadow-inner overflow-x-auto no-scrollbar">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap outline-none ${
                    isActive
                      ? 'text-amber-300 bg-[#1e1b2e] border border-amber-400/60 shadow-gold-neon'
                      : 'text-neutral-400 hover:text-neutral-200 hover:bg-[#181524] border border-transparent'
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 transition-transform ${
                      isActive
                        ? 'text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.8)] scale-110'
                        : 'text-neutral-400'
                    }`}
                  />
                  <span>{item.label}</span>

                  {/* Неоновый индикатор под активным элементом */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-amber-400 rounded-full shadow-[0_0_8px_#fbbf24]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Правый блок: кнопка "Ученик" */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium text-neutral-300 hover:text-amber-300 hover:bg-[#181524] transition-all duration-300 border border-transparent outline-none">
              <Sparkles className="w-4 h-4 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.7)]" />
              <span>Ученик</span>
            </button>
          </div>
        </div>
      </header>

      {/* Главное окно — пустой тёмный контейнер-заглушка */}
      <main className="flex-1 flex flex-col max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {/* Верхняя строка статуса (только для вкладки "Урок с учителем") */}
        <div className="flex items-center justify-end mb-4 px-1 min-h-[22px]">
          {activeTab === 'lesson' && (
            <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />
              <span>Учитель не в сети</span>
            </div>
          )}
        </div>

        {/* Тёмный контейнер со слегка светящейся золотой рамкой, затухающей к серединам всех четырех сторон */}
        <section className="relative flex-1 w-full min-h-[540px] rounded-2xl bg-gradient-to-b from-[#12111a]/95 via-[#0e0d15]/90 to-[#0d0d12]/95 border border-neutral-800/80 shadow-2xl backdrop-blur-2xl p-6 sm:p-8 flex flex-col justify-center overflow-hidden">
          {/* Контурная рамка: чуть-чуть светящаяся, плавно затухающая к середине верхней, нижней, левой и правой сторон */}
          <div 
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              padding: '1px',
              background: `
                radial-gradient(ellipse 35% 35% at 0% 0%, rgba(251, 191, 36, 0.8) 0%, rgba(251, 191, 36, 0.2) 60%, transparent 100%),
                radial-gradient(ellipse 35% 35% at 100% 0%, rgba(251, 191, 36, 0.8) 0%, rgba(251, 191, 36, 0.2) 60%, transparent 100%),
                radial-gradient(ellipse 35% 35% at 0% 100%, rgba(251, 191, 36, 0.8) 0%, rgba(251, 191, 36, 0.2) 60%, transparent 100%),
                radial-gradient(ellipse 35% 35% at 100% 100%, rgba(251, 191, 36, 0.8) 0%, rgba(251, 191, 36, 0.2) 60%, transparent 100%)
              `,
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              filter: 'drop-shadow(0 0 5px rgba(251, 191, 36, 0.35))'
            }}
          />

          {/* Внутренняя координатная сетка контейнера */}
          <div className="absolute inset-0 math-inner-grid opacity-50 pointer-events-none" />

          {/* Полностью чистая центральная область (заглушка) */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center p-8 select-none">
            <div className="w-16 h-16 rounded-2xl bg-[#181524] border border-amber-400/40 flex items-center justify-center shadow-gold-neon mb-4">
              <currentItem.icon className="w-7 h-7 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.7)]" />
            </div>
            <p className="text-sm text-neutral-400 font-medium">
              Рабочая область пуста
            </p>
            <p className="text-xs text-neutral-600 mt-1">
              Раздел «{currentItem.label}» подготовлен для добавления компонентов
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
