import { MapPin, Star } from "lucide-react";

export default function SpaceCard({
  space,
  getFeatureIcon,
  handleViewDetail,
}: any) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative">
        <img
          src={space.image}
          alt={space.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full">
          <div className="flex items-center space-x-1">
            <Star className="text-yellow-400 fill-current" size={16} />
            <span className="text-sm font-medium">{space.rating}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-bold text-lg mb-2 text-gray-900">{space.name}</h3>
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{space.location}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {space.features.map((feature: string) => (
            <div
              key={feature}
              className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-full text-xs"
            >
              {getFeatureIcon(feature)}
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-blue-600">
              Rp {parseInt(space.price).toLocaleString("id-ID")}
            </span>
            <span className="text-gray-600 text-sm">/hari</span>
          </div>
          <button
            onClick={() => handleViewDetail(space)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Lihat Detail
          </button>
        </div>

        <div className="mt-3 text-sm text-gray-600">{space.reviews} ulasan</div>
      </div>
    </div>
  );
}
