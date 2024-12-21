"use client";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  iconreverse?: boolean;
}

export function FeatureCard({ title, description, icon, iconreverse, className = "" }: FeatureCardProps) {
  return (
    <div className={`bg-[#F3F4F6] border rounded-2xl p-8 ${className}`}>
      {iconreverse ? (
        <>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-600 leading-relaxed mb-20 text-sm">{description}</p>
          <div>{icon}</div>
        </>
      ) : (
        <>
          <div className="mb-6">{icon}</div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
        </>
      )}
    </div>
  );
}