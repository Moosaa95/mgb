import React from "react";
import { FaUserTie, FaHardHat } from "react-icons/fa";

export function Teams() {
  const boardOfDirectors = [
    { name: "Babatunde Ganiyu Moradeyo", title: "CEO" },
    { name: "Adeyemi Gbadebo-Adekunle", title: "Chairman" },
    { name: "Tosin Moradeyo", title: "Director" },
  ];

  const technicalStaff = [
    { name: "Ebere Iwuchukwu", title: "B.Eng Mech Eng (Piping)" },
    { name: "Bada Olusola", title: "B.Eng Mining Eng" },
    { name: "Toba Ige", title: "HND Civil Eng" },
    { name: "Olawale Agbi", title: "HND Elect/Elect Eng" },
    { name: "Cbibueze Olodu Felix", title: "OND Electrical Eng" },
    { name: "Ugochukwu Arisukwu", title: "C & G Electrical" },
    { name: "Ahmed Sheriff", title: "OND Architecture" },
    { name: "Asamu Abiola S", title: "Environmental Resource Mgt. (Administrative Officer)" },
    { name: "Aluko Idowu", title: " Mechanical Engineering. (Field Operation Engineer )" },
    { name: "Raheem Adebisi Rafiu", title: "Land Surveyor. (Field Operations (Civil))" },
  ];

  return (
    <section className="py-16 bg-black-100 text-gray-300">
      {/* Board of Directors */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Leadership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {boardOfDirectors.map((director, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-black-300 shadow-lg rounded-lg"
            >
              <FaUserTie className="text-indigo-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold">{director.name}</h3>
              <p className="text-gray-300">{director.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Staff */}
      <div className="container mx-auto px-4 mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Technical Staff
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technicalStaff.map((staff, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-black-300 shadow-lg rounded-lg"
            >
              <FaHardHat className="text-green-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold">{staff.name}</h3>
              <p className="text-gray-300">{staff.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
