import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router"; // router をインポート
import Head from "next/head";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false); // ポップアップ状態を管理
  const router = useRouter(); // router を使用

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handlePopupOpen = () => {
    setMenuOpen(false); // メニューを閉じる
    setPopupOpen(true); // ポップアップを開く
  };

  const handlePopupClose = () => {
    setPopupOpen(false); // ポップアップを閉じる
  };

  const handleUnderstandClick = () => {
    setPopupOpen(false); // ポップアップを閉じる
    router.push("/menus/report-details"); // report-details.js へ遷移
  };
  
  return (
    <>
    {/* Google Fontsのリンクを追加 */}
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap"
        rel="stylesheet"
      />
    </Head>
    <header className="bg-[#2c2c2c] text-white w-full py-4 flex justify-between items-center px-6">
      {/* 「FortuneDinner」をトップページへのリンクに変更 */}
      <Link href="/">
          <h1
            className="text-xl font-bold cursor-pointer"
            style={{ fontFamily: "'Pinyon Script', cursive" }}
          >
            FortuneDinner
          </h1>
        </Link>
      <button
        className="text-white focus:outline-none"
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <div className="space-y-1">
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>
      </button>

      {/* メニュー */}
      {menuOpen && (
        <div className="absolute top-14 right-4 bg-white shadow-lg rounded-md p-4 z-50">
          <ul>
            <li className="mb-2">
              <Link
                href="/menus/reservation-history"
                className="text-black hover:text-blue-600"
              >
                予約履歴
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/menus/favorites"
                className="text-black hover:text-blue-600"
              >
                お気に入り
              </Link>
            </li>
            <li className="mb-2">
              <button
                onClick={handlePopupOpen} // ポップアップを開く
                className="text-black hover:text-blue-600"
              >
                レポート
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* ポップアップ */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-sm w-full">
            <button
              onClick={handlePopupClose}
              className="absolute top-2 right-2 text-black"
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-lg font-bold mb-4">レポートとは？</h2>
            <ul className="mb-4 text-sm text-gray-700">
              <li>・あなたの会食をより最適化するためのレポートをします</li>
              <li>
                ・会食後のフィードバックに基づき、次回以降のお店提案を改善します
              </li>
            </ul>
            <button
              onClick={handleUnderstandClick} // 修正済み: 了解ボタンクリックで遷移
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
            >
              了解
            </button>
          </div>
        </div>
      )}
    </header>
    </>
  );
}
