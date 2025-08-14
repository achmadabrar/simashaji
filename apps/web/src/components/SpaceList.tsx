import SpaceCard from "./SpaceCard";

export default function SpaceList({
  spaces,
  getFeatureIcon,
  handleViewDetail,
}: any) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {spaces.map((space: any) => (
        <SpaceCard
          key={space.id}
          space={space}
          getFeatureIcon={getFeatureIcon}
          handleViewDetail={handleViewDetail}
        />
      ))}
    </div>
  );
}
