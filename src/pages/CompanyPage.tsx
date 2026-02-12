import { Seo } from '../components/Seo';
import { company } from '../data/siteData';

export function CompanyPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-12">
      <Seo title="会社概要" description="株式会社サンプル足場の会社概要、代表メッセージ、許可・資格情報です。" />
      <h1 className="text-3xl font-bold text-primary">会社概要</h1>
      <section className="rounded bg-white p-6 shadow"><h2 className="text-xl font-bold">代表メッセージ</h2><p className="mt-3">安全と誠実を軸に、現場と近隣双方に安心される足場施工を提供します。</p></section>
      <section className="rounded bg-white p-6 shadow"><h2 className="text-xl font-bold">会社情報</h2><table className="mt-4 w-full text-sm"><tbody>{Object.entries(company).map(([k,v]) => <tr key={k} className="border-t"><th className="w-40 py-2 text-left">{k}</th><td>{v}</td></tr>)}</tbody></table></section>
      <section className="rounded bg-white p-6 shadow"><h2 className="text-xl font-bold">資格・許可・保険</h2><ul className="mt-3 list-disc space-y-1 pl-6"><li>建設業許可（足場工事業）</li><li>足場組立作業主任者 在籍</li><li>労災上乗せ・賠償責任保険 加入</li></ul></section>
      <section className="rounded bg-white p-6 shadow"><h2 className="text-xl font-bold">Googleマップ</h2><div className="mt-4 h-72 rounded bg-slate-200 flex items-center justify-center">地図埋め込み（仮）</div></section>
    </div>
  );
}
