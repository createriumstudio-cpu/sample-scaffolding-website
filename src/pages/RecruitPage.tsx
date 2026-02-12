import { ReactNode } from 'react';
import { Seo } from '../components/Seo';

export function RecruitPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-12">
      <Seo title="採用情報" description="募集要項・1日の流れ・福利厚生・FAQ・応募フォームを掲載。" />
      <h1 className="text-3xl font-bold text-primary">採用情報</h1>
      <Section title="募集要項"><p>職種：足場施工スタッフ / 日給12,000〜18,000円 / 未経験歓迎</p></Section>
      <Section title="1日の流れ"><ol className="list-decimal pl-6"><li>朝礼・現場移動</li><li>足場組立</li><li>昼休憩</li><li>解体・片付け</li></ol></Section>
      <Section title="キャリアステップ"><p>見習い → 一人前 → 職長 → 管理職</p></Section>
      <Section title="福利厚生"><p>社会保険完備、作業服支給、資格取得支援、交通費支給</p></Section>
      <Section title="FAQ"><p>Q. 未経験でも応募可？ A. 可能です。先輩が丁寧に指導します。</p></Section>
      <Section title="応募フォーム"><form className="grid gap-3 md:max-w-xl"><input className="rounded border p-2" placeholder="お名前" /><input className="rounded border p-2" placeholder="電話番号" /><textarea className="rounded border p-2" placeholder="志望動機" /><button className="rounded bg-accent px-4 py-2 font-bold text-white" type="button">送信（ダミー）</button></form></Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return <section className="rounded bg-white p-6 shadow"><h2 className="text-xl font-bold">{title}</h2><div className="mt-3">{children}</div></section>;
}
