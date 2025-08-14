"use client";
interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  const tabs = [
    { id: "ruang-rapat", label: "Ruang Rapat" },
    { id: "aula", label: "Aula" },
    { id: "kamar", label: "Kamar" },
    { id: "manasik", label: "Manasik" },
  ];

  return (
    <div className="flex gap-4 mb-8 justify-center">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === tab.id
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
