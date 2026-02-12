import { Seo } from '../components/Seo';

export function PartnerPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-12">
      <Seo title="協力会社募集" description="協力会社募集要項、メリット、お問い合わせ窓口。" />
      <h1 className="text-3xl font-bold text-primary">協力会社募集</h1>
      <section className="rounded bg-white p-6 shadow"><h2 className="text-xl font-bold">募集要項</h2><p className="mt-2">常用・請負ともに歓迎。安全書類対応が可能な企業様。</p></section>
      <section className="rounded bg-white p-6 shadow"><h2 className="text-xl font-bold">提携メリット</h2><ul className="mt-2 list-disc pl-6"><li>安定受注</li><li>早い支払いサイクル</li><li>長期的な案件共有</li></ul></section>
      <section className="rounded bg-white p-6 shadow"><h2 className="text-xl font-bold">お問い合わせ</h2><p className="mt-2">partner@example.com / 03-1234-5678</p></section>
    </div>
  );
}
