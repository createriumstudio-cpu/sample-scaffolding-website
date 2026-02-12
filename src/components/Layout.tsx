import { Link, NavLink } from 'react-router-dom';
import { ReactNode } from 'react';

const navItems = [
  { to: '/company', label: '会社概要' },
  { to: '/works', label: '施工実績' },
  { to: '/staff', label: '従業員紹介' },
  { to: '/recruit', label: '採用情報' }
];

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-20 border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="text-lg font-bold text-primary">株式会社サンプル足場</Link>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className="text-sm font-medium hover:text-accent">{item.label}</NavLink>
            ))}
            <Link to="/contact" className="rounded bg-accent px-4 py-2 text-sm font-bold text-white">無料見積・ご相談</Link>
          </nav>
          <Link to="/contact" className="rounded bg-accent px-3 py-1.5 text-xs font-bold text-white md:hidden">見積相談</Link>
        </div>
      </header>

      <main>{children}</main>

      <footer className="mt-16 bg-primary text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2">
          <div>
            <p className="text-lg font-bold">株式会社サンプル足場</p>
            <p className="mt-2 text-sm">東京都足立区○○町1-2-3 / TEL:03-1234-5678</p>
            <p className="mt-1 text-sm">対応エリア：東京都全域・埼玉県南部</p>
          </div>
          <div className="space-y-2 text-sm">
            <Link to="/company" className="block hover:underline">会社概要</Link>
            <Link to="/privacy" className="block hover:underline">プライバシーポリシー</Link>
            <Link to="/contact" className="block hover:underline">お問い合わせ</Link>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-30 grid grid-cols-3 bg-white shadow-[0_-2px_8px_rgba(0,0,0,0.15)] md:hidden">
        <a href="tel:0312345678" className="py-3 text-center text-xs font-bold text-primary">電話する</a>
        <Link to="/contact" className="border-x py-3 text-center text-xs font-bold text-accent">見積・相談</Link>
        <Link to="/recruit" className="py-3 text-center text-xs font-bold text-primary">採用エントリー</Link>
      </div>
    </div>
  );
}
