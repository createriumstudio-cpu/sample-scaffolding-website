import { Seo } from '../components/Seo';

export function RecruitMangaPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Seo title="採用漫画LP" description="漫画形式でわかる、サンプル足場の仕事と仲間。" />
      <h1 className="text-3xl font-bold text-primary">漫画でわかる！サンプル足場の仕事</h1>
      <div className="mt-8 space-y-5">{[1,2,3,4,5].map((n) => <div key={n} className="rounded bg-white p-4 shadow"><div className="h-64 rounded bg-slate-300 flex items-center justify-center">漫画コマ {n}（仮画像）</div></div>)}</div>
    </div>
  );
}
