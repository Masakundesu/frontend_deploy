import Header from "../../components/Header";
import Footer from "../../components/Footer";
import StoreDetails from "../../components/StoreDetails";

export default function Details({ storeDetails }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-screen-lg mx-auto py-6 px-4">
        <StoreDetails storeDetails={storeDetails} />
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    console.log(`Fetching data for ID: ${id}`); // 確認ログ
    const res = await fetch(`http://127.0.0.1:5000/restaurant/${id}`);
    if (!res.ok) {
      console.error("Failed to fetch data");
      return { props: { restaurant: null } };
    }
    const restaurant = await res.json();
    console.log("Fetched restaurant data:", restaurant); // データをログ出力
    return { props: { restaurant } };
  } catch (error) {
    console.error("Error fetching restaurant:", error);
    return { props: { restaurant: null } };
  }
}
