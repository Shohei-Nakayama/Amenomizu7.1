'use client';

import PageHeader from "../components/PageHeader";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Contact() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // 送信成功後、完了ページにリダイレクト
        router.push("/contact/success");
      } else {
        alert("送信に失敗しました。もう一度お試しください。");
        setIsSubmitting(false);
      }
    } catch (error) {
      alert("送信に失敗しました。もう一度お試しください。");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <PageHeader subtitle="お問い合わせ" />

      <main className="max-w-4xl mx-auto px-8 py-12">
        {/* お問い合わせフォーム */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-3 border-b-2 border-blue-200 text-center">
              お問い合わせフォーム
            </h2>

            <form onSubmit={handleSubmit}>
              <input
                type="hidden"
                name="accessKey"
                value="bf0d0e6d-45eb-4522-9145-eadfd121fe9a"
              />

              {/* お名前 */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2 pl-3 border-l-4 border-blue-500">
                  お名前
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                />
              </div>

              {/* メールアドレス */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2 pl-3 border-l-4 border-blue-500">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                />
              </div>

              {/* 題名 */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2 pl-3 border-l-4 border-blue-500">
                  題名
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                />
              </div>

              {/* ご質問 */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2 pl-3 border-l-4 border-blue-500">
                  ご質問
                </label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="用件をご入力ください"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-vertical"
                ></textarea>
              </div>

              {/* ボタンエリア */}
              <div className="flex justify-center gap-4 mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`font-bold py-3 px-8 rounded-lg transition-all transform shadow-md ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600 hover:-translate-y-0.5"
                  } text-white`}
                >
                  {isSubmitting ? "送信中..." : "送信"}
                </button>
                <button
                  type="reset"
                  disabled={isSubmitting}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  リセット
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* その他の連絡方法 */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-3 border-b-2 border-blue-200 text-center">
              その他の連絡方法
            </h2>

            {/* 電話番号 */}
            <div className="mb-8 bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <span className="text-blue-500 mr-2">📞</span>
                電話
              </h3>
              <p className="text-gray-700 mb-2">
                <a
                  href="tel:08036377265"
                  className="text-blue-600 hover:underline font-medium"
                >
                  080-3637-7265
                </a>
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                ※不在の時は、留守番電話にメッセージを残して頂けるとありがたいです。
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
