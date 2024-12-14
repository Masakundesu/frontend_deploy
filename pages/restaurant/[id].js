import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function RestaurantDetails({ restaurant }) {
    const router = useRouter();

    const handleMenuClick = () => {
        router.push(`/restaurant/${restaurant.id}/menu`);
    };
    if (!restaurant) {
        return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1>店舗情報が見つかりませんでした。</h1>
        </div>
        );
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
        <Header />
        <main className="max-w-screen-md mx-auto py-6 px-4">
            <h1 className="text-2xl font-bold mb-4">{restaurant.name}</h1>
            <img
            src={restaurant.store_top_image}
            alt={restaurant.name}
            className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-lg font-medium mb-2">ジャンル: {restaurant.category}</p>
            <div className="flex items-center space-x-6 mb-4"></div>
            <div className="p-4 bg-gray-100 rounded-lg mb-4">
                <h3 className="text-lg font-bold mb-2">評価</h3>
                <div className="flex justify-between">
                    <div className="text-center">
                    <p className="text-xl font-bold text-yellow-500">3.54</p>
                    <p className="text-sm text-gray-600">食べログ評価</p>
                    </div>
                    <div className="text-center">
                    <p className="text-xl font-bold text-green-500">4.6</p>
                    <p className="text-sm text-gray-600">Google Map評価</p>
                    </div>
                </div>
                </div>

            <div className="flex items-center space-x-2">
                <div className="bg-yellow-400 text-white text-center rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                    <span className="text-lg font-bold">{restaurant.tabelog_rating}</span>
                </div>
                <p className="text-lg font-medium">食べログ評価</p>
                </div>

                <div className="flex items-center space-x-2">
                    <div className="bg-blue-500 text-white text-center rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                        <span className="text-lg font-bold">{restaurant.google_rating}</span>
                    </div>
                    <p className="text-lg font-medium">Google Map評価</p>
                </div>
                
            
            <p>説明: {restaurant.description}</p>

            <h2 className="text-md font-bold mt-6">メニュー</h2>
            <p>{restaurant.menu ? restaurant.menu : 'メニュー情報がありません。'}</p>
            <button
                onClick={handleMenuClick}
                className="text-blue-600 hover:underline mt-2"
            >
                詳細はこちら ＞
            </button>

            <h2 className="text-md font-bold mt-6">コース</h2>
            <p>{restaurant.course ? restaurant.course : 'コース情報がありません。'}</p>
            <button
                onClick={handleMenuClick}
                className="text-blue-600 hover:underline mt-2"
            >
                詳細はこちら ＞
            </button>

            <h2 className="text-md font-bold mt-6">写真・動画</h2>
            <div className="grid grid-cols-3 gap-2">
            {[restaurant.detail_image1, restaurant.detail_image2, restaurant.detail_image3]
                .filter(Boolean)
                .map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Detail ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg"
                />
                ))}
            </div>

            <h2 className="text-md font-bold mt-6">店舗情報</h2>
            <p>住所: {restaurant.address || '情報がありません。'}</p>
            <p>電話番号: {restaurant.phone_number || '情報がありません。'}</p>
            <p>営業時間: {restaurant.opening_hours || '情報がありません。'}</p>
            <p>最寄り駅: {restaurant.nearest_station || '情報がありません。'}</p>
        </main>
        <Footer />
        </div>
    );
    }

    export async function getServerSideProps(context) {
    const { id } = context.params;

    try {
        const res = await fetch(`http://127.0.0.1:5000/restaurant/${id}`);
        if (!res.ok) {
        throw new Error('Failed to fetch');
        }
        const restaurant = await res.json();
        return { props: { restaurant } };
    } catch (error) {
        console.error('Error fetching restaurant:', error);
        return { props: { restaurant: null } };
    }
}
