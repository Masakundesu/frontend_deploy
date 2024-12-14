import { useRouter } from 'next/router';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function MenuDetails({ menuData }) {
    if (!menuData) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1>メニュー情報が見つかりませんでした。</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="max-w-screen-md mx-auto py-6 px-4">
                <h1 className="text-2xl font-bold mb-4">メニュー詳細</h1>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">料理</h2>
                    <p>{menuData.foodMenu || '料理の情報がありません。'}</p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2">ドリンク</h2>
                    <p>{menuData.drinkMenu || 'ドリンクの情報がありません。'}</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export async function getServerSideProps(context) {
    const { id } = context.params;

    try {
        const res = await fetch(`http://127.0.0.1:5000/restaurant/${id}/menu`);
        if (!res.ok) {
            throw new Error('Failed to fetch');
        }
        const menuData = await res.json();
        return { props: { menuData } };
    } catch (error) {
        console.error('Error fetching menu data:', error);
        return { props: { menuData: null } };
    }
}
