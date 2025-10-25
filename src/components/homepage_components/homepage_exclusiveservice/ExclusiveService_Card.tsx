import { useState } from 'react';
import img1 from '../../../assets/101/img_12.jpg';
import img4 from '../../../assets/102/img_14.jpg';
import img2 from '../../../assets/airbnb202/img_6.jpg';
import img3 from '../../../assets/airbnb301/img_11.jpg';

interface Room {
  title: string;
  thumbnail: string;
  description: string;
  link?: string;
}

const ExclusiveService_Card = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Card Data
  const data: Room[] = [
    {
      title: "Sanctuary of Serenity",
      thumbnail: img1,
      description: "Retreat to tranquil spaces where comfort meets style, offering you a peaceful escape at the heart of Atlas Homes.",
      link: "/rooms"
    },
    {
      title: "Tailored for Every Journey",
      thumbnail: img2,
      description: "Find your perfect fit—our diverse accommodations are designed to suit every traveler, every story, every dream.",
      link: "/rooms"
    },
    {
      title: "Moments to Savor",
      thumbnail: img3,
      description: "Delight in gourmet experiences and cozy corners, where every meal and every sip is a celebration of taste.",
      link: "/dining"
    },
    {
      title: "Celebrate Life’s Milestones",
      thumbnail: img4,
      description: "Host unforgettable gatherings in elegant spaces, with every detail crafted to make your special moments shine.",
      link: "/events"
    },
  ];

  return (
    <section className="py-16 px-4 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, index) => (
            <div
              key={item.title}
              className="group flex flex-col rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  className={`object-cover w-full h-full transition-transform duration-700 ${hoveredIndex === index ? 'scale-105' : 'scale-100'}`}
                  src={item.thumbnail}
                  alt={item.title}
                />
              </div>
              <div className="flex-1 flex flex-col gap-2 p-6">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{item.description}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveService_Card;