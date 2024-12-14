import Link from "next/link";

export default function SearchResult({ id, name, description }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg mb-4">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm text-gray-700">{description}</p>
      <Link href={`/details/${id}`}>
        <a className="text-blue-600 hover:underline">詳細を見る</a>
      </Link>
    </div>
  );
}
