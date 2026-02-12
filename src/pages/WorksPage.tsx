import { useMemo, useState } from 'react';
import { Seo } from '../components/Seo';

const categories = ['すべて', '戸建て', '集合住宅', '店舗', '工場'] as const;
const works = [
  { name: '戸建て外壁改修 足場', category: '戸建て' },
  { name: 'アパート修繕 足場', category: '集合住宅' },
  { name: '飲食店改装 足場', category: '店舗' },
  { name: '工場配管更新 足場', category: '工場' },
  { name: 'マンション改修 足場', category: '集合住宅' },
  { name: '戸建て屋根塗装 足場', category: '戸建て' }
];

export function WorksPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>('すべて');
  const filtered = useMemo(() => (filter === 'すべて' ? works : works.filter((w) => w.category === filter)), [filter]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Seo title="施工実績" description="施工実績一覧。戸建て・集合住宅・店舗・工場で絞り込み可能です。" />
      <h1 className="text-3xl font-bold text-primary">施工実績</h1>
      <div className="mt-6 flex flex-wrap gap-2">{categories.map((c) => <button key={c} onClick={() => setFilter(c)} className={`rounded-full px-4 py-2 text-sm ${filter===c?'bg-primary text-white':'bg-white shadow'}`}>{c}</button>)}</div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">{filtered.map((work) => <article key={work.name} className="rounded bg-white p-4 shadow"><div className="h-32 rounded bg-slate-300" /><p className="mt-3 font-medium">{work.name}</p><p className="text-xs text-slate-500">{work.category}</p></article>)}</div>
    </div>
  );
}
