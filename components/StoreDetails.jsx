export default function StoreDetails({ storeDetails }) {
    return (
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h1 className="text-xl font-bold mb-4">{storeDetails.name}</h1>
        <p className="text-sm text-gray-700 mb-2">{storeDetails.description}</p>
        <p className="text-sm text-gray-700 mb-2">
          <strong>住所:</strong> {storeDetails.address}
        </p>
        <p className="text-sm text-gray-700 mb-2">
          <strong>電話番号:</strong> {storeDetails.phone}
        </p>
        <p className="text-sm text-gray-700">
          <strong>ジャンル:</strong> {storeDetails.genre}
        </p>
      </div>
    );
  }
  