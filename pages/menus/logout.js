import { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-screen-md mx-auto py-6 px-4">
        <h1 className="text-2xl font-bold mb-4">ログアウト中...</h1>
      </main>
      <Footer />
    </div>
  );
}
