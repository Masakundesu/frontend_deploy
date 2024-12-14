import Header from "../../components/Header";


export default function ReservationHistory() {
    const reservations = [
        {
            id: 1,
            date: "2024/12/12",
            name: "博多炉端 炉邸",
            price: "¥4,000~¥4,999",
            description: "このお店の特徴と特別な情報が表示されます。",
            rating: 3.38,
            googleRating: 3.9,
        },
        {
            id: 2,
            date: "2024/11/30",
            name: "博多炉端 炉邸",
            price: "¥4,000~¥4,999",
            description: "このお店の特徴と特別な情報が表示されます。",
            rating: 3.38,
            googleRating: 3.9,
        },
    ];

        return (
            <div className="min-h-screen bg-gray-50">
                <Header />
                <main className="max-w-screen-lg mx-auto py-6 px-4">
                    <h1 className="text-xl font-bold mb-6">予約履歴</h1>
                    {reservations.map((reservation) => (
                    <div key={reservation.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
                        <h2 className="text-lg font-bold">{reservation.name}</h2>
                        <p>予約日時: {reservation.date}</p>
                        <p>価格: {reservation.price}</p>
                        <p>説明: {reservation.description}</p>
                        <p>食べログ評価: {reservation.rating}</p>
                        <p>GoogleMap評価: {reservation.googleRating}</p>
                    </div>
                    ))}
                    <p className="text-center text-gray-500 mt-4">現在の予約は以上となります。</p>
                </main>
            </div>
        );
    }
