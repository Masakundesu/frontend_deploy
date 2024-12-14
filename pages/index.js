import { useState } from "react";
import SearchForm from "../components/SearchForm";
import Header from "../components/Header";
import Link from "next/link";


export default function Home() {
  // 状態管理
  const [area, setArea] = useState("");
  const [guests, setGuests] = useState(2);
  const [genre, setGenre] = useState("");
  const [getResponse, setGetResponse] = useState("");
  const [id, setId] = useState("");
  const [idResponse, setIdResponse] = useState("");
  const [input, setInput] = useState("");
  const [postResponse, setPostResponse] = useState("");
  const [translateInput, setTranslateInput] = useState("");
  const [translateResponse, setTranslateResponse] = useState("");

  // 検索ハンドラー
  const handleSearch = () => {
    console.log("検索条件:", { area, guests, genre });
    // ここに検索ロジックを追加可能
  };

  // GETリクエスト
  const handleGetRequest = async () => {
    const res = await fetch(
      "https://tech0-gen-8-step3-app-py-10.azurewebsites.net/api/hello",
      { method: "GET" }
    );
    const data = await res.json();
    console.log("GETリクエストの結果:", data.message);
    setGetResponse(data.message);
  };

  // ID指定のGETリクエスト
  const handleIdRequest = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `https://tech0-gen-8-step3-app-py-10.azurewebsites.net/api/multiply/${id}`,
      { method: "GET" }
    );
    const data = await res.json();
    console.log("IDリクエストの結果:", data.doubled_value);
    setIdResponse(data.doubled_value);
  };

  // POSTリクエスト
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("入力情報:", input);
    const res = await fetch(
      "https://tech0-gen-8-step3-app-py-10.azurewebsites.net/api/echo",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      }
    );
    const data = await res.json();
    console.log("POSTリクエストの結果:", data.message);
    setPostResponse(data.message);
  };

  // 翻訳リクエスト
  const handleTranslateSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://tech0-gen-8-step3-app-py-10.azurewebsites.net/api/translate",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: translateInput }),
      }
    );
    const data = await res.json();
    setTranslateResponse(data.translated_text);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-screen-lg mx-auto py-6 px-4">
        <SearchForm />
        <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
          <h1 className="text-xl font-bold mb-4">会食用のお店を検索</h1>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              エリア
            </label>
            <select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">エリアを選択</option>
              <option value="福岡">福岡</option>
              <option value="博多">博多</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              人数
            </label>
            <input
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              ジャンル
            </label>
            <select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">ジャンルを選択</option>
              <option value="和食">和食</option>
              <option value="洋食">洋食</option>
            </select>
          </div>
          <button
            onClick={handleSearch}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            お店を検索する
          </button>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-bold">GETリクエスト</h2>
          <button
            onClick={handleGetRequest}
            className="mt-2 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          >
            GETリクエストを送信
          </button>
          {getResponse && <p className="mt-2">{getResponse}</p>}
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-bold">ID指定のGETリクエスト</h2>
          <form onSubmit={handleIdRequest} className="mt-2">
            <input
              type="number"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="IDを入力してください"
              className="mr-2 p-2 border rounded"
            />
            <button
              type="submit"
              className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600"
            >
              送信
            </button>
          </form>
          {idResponse && <p className="mt-2">{idResponse}</p>}
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-bold">POSTリクエスト</h2>
          <form onSubmit={handleSubmit} className="mt-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="メッセージを入力してください"
              className="mr-2 p-2 border rounded"
            />
            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
            >
              送信
            </button>
          </form>
          {postResponse && <p className="mt-2">{postResponse}</p>}
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-bold">翻訳リクエスト</h2>
          <form onSubmit={handleTranslateSubmit} className="mt-2">
            <input
              type="text"
              value={translateInput}
              onChange={(e) => setTranslateInput(e.target.value)}
              placeholder="翻訳するテキストを入力"
              className="mr-2 p-2 border rounded"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600"
            >
              翻訳
            </button>
          </form>
          {translateResponse && <p className="mt-2">{translateResponse}</p>}
        </div>
      </main>
    </div>
  );
}
