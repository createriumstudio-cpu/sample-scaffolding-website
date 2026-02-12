import { Seo } from '../components/Seo';

export function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-12">
      <Seo title="プライバシーポリシー" description="株式会社サンプル足場のプライバシーポリシー。" />
      <h1 className="text-3xl font-bold text-primary">プライバシーポリシー</h1>
      <section className="rounded bg-white p-6 shadow"><p>当社は個人情報保護法に基づき、適切に個人情報を管理します。</p></section>
      <section className="rounded bg-white p-6 shadow"><p>取得した情報はお問い合わせ対応・採用連絡・協力会社連絡の目的で利用します。</p></section>
    </div>
  );
}
