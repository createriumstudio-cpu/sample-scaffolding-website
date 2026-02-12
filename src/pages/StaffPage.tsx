import { Seo } from '../components/Seo';

export function StaffPage() {
  const members = [
    { role: '代表', name: '山田 太郎', text: '安全文化を浸透させることを最優先に運営しています。' },
    { role: '職長', name: '佐藤 健', text: '段取り力で現場の生産性向上に貢献します。' },
    { role: 'スタッフ', name: '鈴木 美咲', text: '未経験からでも成長できる職場です。' }
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Seo title="従業員紹介" description="代表・職長・スタッフの紹介とインタビュー。" />
      <h1 className="text-3xl font-bold text-primary">従業員紹介</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-3">{members.map((m) => <article key={m.name} className="rounded bg-white p-5 shadow"><div className="h-40 rounded bg-slate-300" /><p className="mt-4 text-xs text-accent">{m.role}</p><h2 className="font-bold">{m.name}</h2><p className="mt-2 text-sm">{m.text}</p></article>)}</div>
    </div>
  );
}
