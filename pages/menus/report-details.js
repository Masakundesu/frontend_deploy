import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";

export default function ReportDetails() {
    const [isPopupOpen, setPopupOpen] = useState(false); // ポップアップ状態管理
    const [isMounted, setIsMounted] = useState(false); // クライアントでのマウント確認
    const [reportData, setReportData] = useState({
        purposeAchievement: 5,
        relationshipWithPartner: 5,
        dinnerMemo: "",
        overallSatisfaction: 5,
        atmosphere: 5,
        taste: 5,
        speed: 5,
        hospitality: 5,
        storeReview: "",
    }); // フォームデータの状態管理

    const router = useRouter();

    useEffect(() => {
        setIsMounted(true); // クライアントサイドでのみ実行
    }, []);

    const handleSliderChange = (key, value) => {
        setReportData({ ...reportData, [key]: value });
    };

    const handlePopupOpen = () => {
        setPopupOpen(true); // ポップアップを表示
    };

    const handlePopupClose = () => {
        setPopupOpen(false); // ポップアップを閉じる
        router.push({
            pathname: "/menus/report-result",
            query: reportData,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data:", reportData);
        handlePopupOpen();
        // 必要に応じてサーバーへPOSTリクエストを送信する処理を追加
    };

    // サーバー側で何も描画しないようにする
    if (!isMounted) return null;

    return (
        <div className="min-h-screen bg-gray-50 relative">
            <Header />
            <main className="max-w-screen-md mx-auto py-6 px-4">
                <h1 className="text-xl font-bold mb-4">レポート詳細</h1>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <h2 className="text-lg font-bold">予約したお店 : on A TABLE（オン ア テーブル）</h2>
                        <p>会食日時 : 0月0日</p>
                        <p>会食目的 : 商談フェーズの促進</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* 会食への評価 */}
                        <h3 className="text-lg font-semibold">会食への評価を入力</h3>
                        <div className="space-y-4">
                            <div>
                                <label>目的達成度</label>
                                <input
                                    type="range"
                                    min="1"
                                    max="10"
                                    value={reportData.purposeAchievement}
                                    onChange={(e) =>
                                        handleSliderChange("purposeAchievement", e.target.value)
                                    }
                                    className="w-full"
                                />
                                 {/* 目盛りを表示 */}
                                <div className="flex justify-between text-sm text-gray-500 mt-1">
                                    {Array.from({ length: 11 }, (_, i) => (
                                        <span key={i}>{i}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label>会食相手との関係性</label>
                                <input
                                    type="range"
                                    min="1"
                                    max="10"
                                    value={reportData.relationshipWithPartner}
                                    onChange={(e) =>
                                        handleSliderChange("relationshipWithPartner", e.target.value)
                                    }
                                    className="w-full"
                                />
                                 {/* 目盛りを表示 */}
                                <div className="flex justify-between text-sm text-gray-500 mt-1">
                                    {Array.from({ length: 11 }, (_, i) => (
                                        <span key={i}>{i}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label>会食メモ</label>
                                <textarea
                                    value={reportData.dinnerMemo}
                                    onChange={(e) =>
                                        handleSliderChange("dinnerMemo", e.target.value)
                                    }
                                    className="w-full border rounded-lg p-2"
                                    rows="3"
                                />
                            </div>
                        </div>

                        {/* お店への評価 */}
                        <h3 className="text-lg font-semibold">お店への評価を入力</h3>
                        <div className="space-y-4">
                            <div>
                                <label>全体的な満足度</label>
                                <input
                                    type="range"
                                    min="1"
                                    max="10"
                                    value={reportData.overallSatisfaction}
                                    onChange={(e) =>
                                        handleSliderChange("overallSatisfaction", e.target.value)
                                    }
                                    className="w-full"
                                />
                                 {/* 目盛りを表示 */}
                                <div className="flex justify-between text-sm text-gray-500 mt-1">
                                    {Array.from({ length: 11 }, (_, i) => (
                                        <span key={i}>{i}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label>お店の雰囲気</label>
                                <input
                                    type="range"
                                    min="1"
                                    max="10"
                                    value={reportData.atmosphere}
                                    onChange={(e) =>
                                        handleSliderChange("atmosphere", e.target.value)
                                    }
                                    className="w-full"
                                />
                                 {/* 目盛りを表示 */}
                                <div className="flex justify-between text-sm text-gray-500 mt-1">
                                    {Array.from({ length: 11 }, (_, i) => (
                                        <span key={i}>{i}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label>食事・味</label>
                                <input
                                    type="range"
                                    min="1"
                                    max="10"
                                    value={reportData.taste}
                                    onChange={(e) =>
                                        handleSliderChange("taste", e.target.value)
                                    }
                                    className="w-full"
                                />
                                 {/* 目盛りを表示 */}
                                <div className="flex justify-between text-sm text-gray-500 mt-1">
                                    {Array.from({ length: 11 }, (_, i) => (
                                        <span key={i}>{i}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label>食事・提供スピード</label>
                                <input
                                    type="range"
                                    min="1"
                                    max="10"
                                    value={reportData.speed}
                                    onChange={(e) =>
                                        handleSliderChange("speed", e.target.value)
                                    }
                                    className="w-full"
                                />
                                 {/* 目盛りを表示 */}
                                <div className="flex justify-between text-sm text-gray-500 mt-1">
                                    {Array.from({ length: 11 }, (_, i) => (
                                        <span key={i}>{i}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label>接客</label>
                                <input
                                    type="range"
                                    min="1"
                                    max="10"
                                    value={reportData.hospitality}
                                    onChange={(e) =>
                                        handleSliderChange("hospitality", e.target.value)
                                    }
                                    className="w-full"
                                />
                                 {/* 目盛りを表示 */}
                                <div className="flex justify-between text-sm text-gray-500 mt-1">
                                    {Array.from({ length: 11 }, (_, i) => (
                                        <span key={i}>{i}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label>お店へのレビュー</label>
                                <textarea
                                    value={reportData.storeReview}
                                    onChange={(e) =>
                                        handleSliderChange("storeReview", e.target.value)
                                    }
                                    className="w-full border rounded-lg p-2"
                                    rows="3"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
                        >
                            提出する
                        </button>
                    </form>
                </div>
            </main>

            {/* ポップアップ */}
            {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-sm w-full">
                        <button
                            onClick={handlePopupClose} // ×ボタンでポップアップ閉じる＆遷移
                            className="absolute top-2 right-2 text-black"
                            aria-label="Close"
                        >
                            ×
                        </button>
                        <h2 className="text-lg font-bold mb-4">入力ありがとうございました！</h2>
                        <ul className="mb-4 text-sm text-gray-700">
                            <li>・今回のレビュー内容をもとに、次回以降の検索結果が改善されます</li>
                            <li>・今回の会食メモを社内への共有にも使いましょう</li>
                        </ul>
                        <button
                            onClick={handlePopupClose} // 了解ボタンでポップアップ閉じる＆遷移
                            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
                        >
                            了解
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}