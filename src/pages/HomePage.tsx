import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';

const tags = ['くさび式', '枠組', '単管', '吊り足場', '仮囲い', 'メッシュシート', '養生'];

export function HomePage() {
  return (
    <>
      <Seo title="トップ" description="安全第一で段取りを強くする、東京・埼玉対応の足場工事会社です。" />
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <p className="text-sm">安全第一 / スピード対応 / 近隣配慮</p>
          <h1 className="mt-3 text-3xl font-black leading-tight md:text-5xl">安全第一の足場で、<br />現場の段取りを強くする。</h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base">年間280件以上の施工実績。戸建てから大型物件まで、現場の進行を止めない足場計画と施工を提供します。</p>
          <div className="mt-6 grid gap-3 text-center md:grid-cols-3">
            <div className="rounded bg-white/10 p-4">年間施工280件以上</div><div className="rounded bg-white/10 p-4">対応エリア東京・埼玉</div><div className="rounded bg-white/10 p-4">無事故継続1240日</div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/contact" className="rounded bg-accent px-5 py-3 font-bold">無料見積・ご相談</Link>
            <Link to="/recruit" className="rounded border border-white px-5 py-3 font-bold">採用エントリー</Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-xs">{tags.map((tag) => <span key={tag} className="rounded-full bg-white/20 px-3 py-1">{tag}</span>)}</div>
        </div>
      </section>

      <Section title="会社の特徴3点" items={['安全・品質', '段取り・スピード', '近隣配慮・清掃']} cols={3} />
      <Section title="選ばれる理由" items={['見積・現調が早い', '自社施工で品質安定', '有資格者・安全体制', '工程変更に強い', '近隣配慮・養生が丁寧', '書類対応がスムーズ']} cols={3} />
      <Section title="事業内容" items={['くさび式足場', '枠組足場', '単管足場', '吊り足場', '仮囲い・養生', '足場計画・図面対応']} cols={3} />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold text-primary">施工の流れ（6ステップ）</h2>
        <ol className="mt-5 grid gap-3 md:grid-cols-3">{['お問い合わせ', '現地調査', 'お見積り', '施工計画', '組立・解体', '完了確認'].map((s) => <li key={s} className="rounded bg-white p-4 shadow">{s}</li>)}</ol>
      </section>

      <section className="bg-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold text-primary">施工実績（抜粋）</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">{['戸建て改修', 'マンション大規模修繕', '店舗改装', '工場メンテナンス'].map((w) => <article key={w} className="overflow-hidden rounded bg-white shadow"><div className="h-28 bg-slate-300" /><div className="p-4 text-sm font-medium">{w}</div></article>)}</div>
          <Link to="/works" className="mt-5 inline-block font-bold text-accent">一覧を見る →</Link>
        </div>
      </section>

      <Section title="権威付け・信頼情報" items={['建設業許可', '保有資格', '保険加入', '安全活動', '取引実績', '口コミ']} cols={3} />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold text-primary">採用情報（抜粋）</h2>
        <p className="mt-3">未経験歓迎 / 日給12,000〜18,000円 / 資格取得支援あり</p>
        <Link to="/recruit" className="mt-4 inline-block rounded bg-accent px-5 py-3 font-bold text-white">採用ページへ</Link>
      </section>

      <section className="bg-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold text-primary">協力会社募集（抜粋）</h2>
          <p className="mt-3">安定受注・迅速支払い・長期パートナー歓迎。</p>
          <Link to="/partner" className="mt-4 inline-block rounded bg-primary px-5 py-3 font-bold text-white">募集要項を見る</Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-primary">まずはお気軽にご相談ください</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link to="/contact" className="rounded bg-accent p-5 text-center font-bold text-white">見積依頼</Link>
          <Link to="/recruit" className="rounded bg-primary p-5 text-center font-bold text-white">採用応募</Link>
          <Link to="/partner" className="rounded bg-slate-700 p-5 text-center font-bold text-white">協力会社応募</Link>
        </div>
      </section>
    </>
  );
}

function Section({ title, items, cols }: { title: string; items: string[]; cols: number }) {
  const gridCols = cols === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2';
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-2xl font-bold text-primary">{title}</h2>
      <div className={`mt-6 grid gap-4 ${gridCols}`}>
        {items.map((item) => <div key={item} className="rounded bg-white p-5 shadow">{item}</div>)}
      </div>
    </section>
  );
}
