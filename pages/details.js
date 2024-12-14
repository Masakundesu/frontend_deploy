import { useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DetailsSearch() {
  const [area, setArea] = useState("");
  const [guests, setGuests] = useState(2);
  const [genre, setGenre] = useState("");
  const [budgetMin, setBudgetMin] = useState("");
  const [budgetMax, setBudgetMax] = useState("");
  const [privateRoom, setPrivateRoom] = useState("");
  const [drinkIncluded, setDrinkIncluded] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    // クエリパラメータを作成
    const query = {
      area: area || "",
      guests: guests || "",
      genre: genre || "",
      budgetMin: budgetMin || "",
      budgetMax: budgetMax || "",
      privateRoom: privateRoom || "",
      drinkIncluded: drinkIncluded || "",
    };

    window.history.pushState({}, "", `/results?${queryString}`);

    // 検索結果ページに遷移
    router.push({
      pathname: "/results",
      query: query,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <Header />
      <p></p>
      <h2 className="text-xl font-bold">詳細検索</h2>

      <main className="w-full max-w-md bg-white rounded-lg shadow-lg mt-6 p-6">
        <form onSubmit={handleSearch} className="space-y-4">
          {/* エリア */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              エリア
            </label>
            <select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
            >
              <option value="">指定なし</option>
              <option value="福岡県福岡市中央区">福岡市中央区</option>
              <option value="福岡県福岡市博多区">福岡市博多区</option>
              <option value="福岡県福岡市早良区">福岡市早良区</option>
              <option value="福岡県福岡市東区">福岡市東区</option>
              <option value="福岡県福岡市南区">福岡市南区</option>
              <option value="福岡県福岡市西区">福岡市西区</option>
              <option value="福岡県福岡市城南区">福岡市城南区</option>
              <option value="福岡県北九州市小倉北区">北九州市小倉北区</option>
            </select>
          </div>

          {/* 人数 */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              人数
            </label>
            <input
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="例: 2"
            />
          </div>

          {/* ジャンル */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              ジャンル
            </label>
            <select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
            >
              <option value="">指定なし</option>
              <option value="寿司">寿司</option>
              <option value="日本料理">日本料理</option>
              <option value="そば">そば</option>
              <option value="うなぎ">うなぎ</option>
              <option value="鍋">鍋</option>
              <option value="焼肉">焼肉</option>
              <option value="居酒屋">居酒屋</option>
              <option value="フレンチ">フレンチ</option>
              <option value="イタリアン">イタリアン</option>
            </select>
          </div>

          {/* 予算 */}
          <div className="flex space-x-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                予算 (下限)
              </label>
              <input
                type="number"
                value={budgetMin}
                onChange={(e) => setBudgetMin(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                予算 (上限)
              </label>
              <input
                type="number"
                value={budgetMax}
                onChange={(e) => setBudgetMax(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
          </div>

          {/* 個室 */}
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={() => setPrivateRoom("希望する")}
              className={`w-1/2 py-2 text-sm rounded-lg ${
                privateRoom === "希望する"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              個室: 希望する
            </button>
            <button
              type="button"
              onClick={() => setPrivateRoom("希望しない")}
              className={`w-1/2 py-2 text-sm rounded-lg ${
                privateRoom === "希望しない"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              個室: 希望しない
            </button>
          </div>

          {/* 飲み放題 */}
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={() => setDrinkIncluded("希望する")}
              className={`w-1/2 py-2 text-sm rounded-lg ${
                drinkIncluded === "希望する"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              飲み放題: 希望する
            </button>
            <button
              type="button"
              onClick={() => setDrinkIncluded("希望しない")}
              className={`w-1/2 py-2 text-sm rounded-lg ${
                drinkIncluded === "希望しない"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              飲み放題: 希望しない
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#2c2c2c] text-white py-2 rounded-lg hover:bg-[#4f4f4f] transition"
          >
            お店を検索する
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
