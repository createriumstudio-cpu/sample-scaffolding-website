import { useState } from 'react';
import { Seo } from '../components/Seo';

export function ContactPage() {
  const [type, setType] = useState('法人・個人');
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Seo title="お問い合わせ" description="法人・個人、採用、協力会社向けの各種お問い合わせフォーム。" />
      <h1 className="text-3xl font-bold text-primary">お問い合わせ</h1>
      <div className="mt-6 flex gap-2">{['法人・個人', '採用', '協力会社'].map((t) => <button key={t} onClick={() => setType(t)} className={`rounded-full px-4 py-2 text-sm ${type===t?'bg-primary text-white':'bg-white shadow'}`}>{t}</button>)}</div>
      <form className="mt-6 grid gap-3 rounded bg-white p-6 shadow">
        <p className="font-medium">{type}向けフォーム</p>
        <input className="rounded border p-2" placeholder="お名前" />
        <input className="rounded border p-2" placeholder="メールアドレス" />
        <textarea className="rounded border p-2" placeholder="お問い合わせ内容" rows={5} />
        <button className="rounded bg-accent px-4 py-2 font-bold text-white" type="button">送信（ダミー）</button>
      </form>
    </div>
  );
}
