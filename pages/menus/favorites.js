import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Favorites() {
    const [favorites, setFavorites] = useState([]);

      // ローカルストレージからお気に入りリストを取得
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    }, []);

    /// お気に入り解除
    const removeFromFavorites = (id) => {
        const updatedFavorites = favorites.filter((restaurant) => restaurant.id !== id);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // ローカルストレージを更新
    };

    return (
        <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-screen-md mx-auto py-6 px-4">
            <h1 className="text-lg font-bold mb-4">お気に入り</h1>
            {favorites.length > 0 ? (
            favorites.map((restaurant) => (
                <div key={restaurant.id} className="bg-white shadow p-4 rounded-lg mb-4 flex">
                <img
                    src={restaurant.store_top_image || "/placeholder.png"}
                    alt={restaurant.name}
                    className="w-24 h-24 object-cover rounded-lg mr-4"
                />
                <div>
                    <h3 className="text-lg font-bold">{restaurant.name}</h3>
                    <p>ジャンル: {restaurant.category}</p>
                    <p>エリア: {restaurant.area}</p>
                    <p>食べログ評価: {restaurant.tabelog_rating}</p>
                    <p>Google Map評価: {restaurant.google_rating}</p>
                    <p>単価: ¥{restaurant.budget_min} ~ ¥{restaurant.budget_max}</p>
                </div>
                <button
                onClick={() => removeFromFavorites(restaurant.id)} // お気に入り解除処理を呼び出し
                className="ml-4 bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-700"
                >
                    お気に入り解除
                </button>
                </div>
            ))
            ) : (
            <p className="text-gray-500">お気に入りに登録された店舗はありません。</p>
            )}
        </main>
        <Footer />
        </div>
    );
}
