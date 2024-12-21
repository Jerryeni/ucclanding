"use client";

export function OpenInnovationIcon() {
  return (
    <div className="relative">
      <div className="w-12 h-12 bg-[#DCC00A] rounded-full" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex space-x-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-white rounded-full" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function OraclesIcon() {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-8 h-8 bg-[#DCC00A] rounded-full" />
      <div className="w-8 h-8 border-2 border-[#DCC00A] rounded-lg" />
      <div className="w-8 h-8 bg-[#DCC00A] rounded-sm" />
    </div>
  );
}

export function SmartContractIcon() {
  return (
    <div className="flex space-x-1">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className={`w-1 h-12 ${i % 2 === 0 ? 'bg-[#DCC00A]' : 'bg-gray-200'}`}
        />
      ))}
    </div>
  );
}

export function EnergyIcon() {
  return (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 bg-[#DCC00A] rounded-full" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-6 h-6 border-2 border-white rounded-full" />
      </div>
    </div>
  );
}