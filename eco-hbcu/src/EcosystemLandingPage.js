import React, { useState } from 'react';
import { Factory, Recycle, BookOpen, ShoppingBag, TrendingUp, Users, FileText } from 'lucide-react';

const ecosystemStages = [
  {
    id: 'agoa',
    title: 'AGOA Manufacturers',
    icon: <Factory size={24} />,
    description: 'Produce sustainable raw materials and textiles in Africa.',
    details: [
      'Manufacture eco-friendly fabrics and materials',
      'Support sustainable practices in African textile industry',
      'Contribute to economic growth in AGOA countries'
    ]
  },
  {
    id: 'hampton',
    title: 'Miami Hampton House',
    icon: <Factory size={24} />,
    description: 'Small-Batch Manufacturing Facility for blank apparel production.',
    details: [
      'Import raw materials from AGOA manufacturers',
      'Produce blank t-shirts, hoodies, hats, and other apparel',
      'Distribute blank apparel to participating universities'
    ]
  },
  {
    id: 'universities',
    title: 'Participating Universities',
    icon: <BookOpen size={24} />,
    description: 'HBCUs involved in customization, innovation, and recycling.',
    details: [
      'Florida Memorial (FMU): Small-Batch Manufacturing and Distribution',
      'Atlanta University Center (AUC)/Morehouse: Customization and Innovation',
      'Tuskegee University: Recycling and Upcycling Hub',
      'Florida A&M University (FAMU): Education and Training'
    ]
  },
  {
    id: 'customization',
    title: 'Heritage Hill Student CO-OPs',
    icon: <ShoppingBag size={24} />,
    description: 'On-campus facilities for personalizing apparel.',
    details: [
      'Utilize kiosks, heat presses, and embroidery machines',
      'Customize blank apparel with school logos and designs',
      'Provide hands-on experience for student workers'
    ]
  },
  {
    id: 'recycling',
    title: 'Tuskegee Recycling Program',
    icon: <Recycle size={24} />,
    description: 'Central hub for processing and recycling used apparel.',
    details: [
      'Collect used apparel from all participating universities',
      'Process and recycle/upcycle collected items',
      'Redistribute recycled materials for manufacturing'
    ]
  },
  {
    id: 'impact',
    title: 'Economic and Environmental Impact',
    icon: <TrendingUp size={24} />,
    description: 'Measuring the success and impact of the ecosystem.',
    details: [
      'Create sustainable jobs and economic opportunities',
      'Reduce textile waste and promote circular economy',
      'Educate and empower students in sustainable business practices'
    ]
  }
];

const timeline = [
  {
    year: 'Year 1',
    title: 'Conception and Planning',
    tasks: [
      'Develop the Maroon League concept',
      'Establish partnerships with AGOA manufacturers, Miami Hampton House, and participating universities',
      'Create initial business plan and sustainability framework'
    ]
  },
  {
    year: 'Year 2',
    title: 'Manufacturing and Distribution Setup',
    tasks: [
      'Set up the Miami Hampton House Small-Batch Manufacturing Facility',
      'Begin production of blank apparel',
      'Distribute blank apparel to Florida Memorial, AUC/Morehouse, and Tuskegee'
    ]
  },
  {
    year: 'Year 3',
    title: 'Customization Zones and Sales Launch',
    tasks: [
      'Set up Heritage Hill Customization Zones in campus bookstores',
      'Install kiosks, heat presses, and embroidery machines',
      'Train student workers in customization techniques',
      'Launch sales of blank and customized apparel'
    ]
  },
  {
    year: 'Year 4',
    title: 'Recycling Program Implementation',
    tasks: [
      'Launch recycling program managed by Tuskegee',
      'Set up donation boxes at AUC, Florida Memorial, and Tuskegee',
      'Begin collection and processing of used apparel'
    ]
  },
  {
    year: 'Year 5',
    title: 'Expansion and Impact Assessment',
    tasks: [
      'Scale the model to additional HBCUs',
      'Conduct impact assessment on education, sustainability, and economic development',
      'Develop long-term expansion strategy'
    ]
  }
];

const councilMembers = [
  { name: 'Dr. Cynthia Hewitt', role: 'Command', title: 'Compass', institution: 'Morehouse', responsibilities: 'Overall leadership, strategic direction, ensuring alignment with Ujima Institute goals.' },
  { name: 'Terron Ferguson', role: 'Administration', title: 'SILENT/LISTEN', institution: 'Morehouse', responsibilities: 'Manage internal communications, oversee administrative tasks, ensure organizational coherence.' },
  { name: 'Ilana Lucas', role: 'Direction', title: 'Security', institution: 'Morehouse', responsibilities: 'Ensure safety and security protocols, direct overall consortium activities.' },
  { name: 'Brandon Hoff', role: 'Formation', title: 'Systems', institution: 'Morehouse', responsibilities: 'Develop and maintain systems and processes, ensure operational efficiency.' },
  { name: 'Dr. Ariana Brazier', role: 'Development', title: 'Space', institution: 'Morehouse', responsibilities: 'Oversee development projects, manage physical and organizational space.' }
];

const committees = [
  { name: 'Sustainability Committee', chair: '[Name from Tuskegee]' },
  { name: 'Finance Committee', chair: '[Name from Florida Memorial]' },
  { name: 'Education and Training Committee', chair: '[Name from FAMU]' },
  { name: 'Marketing and Communications Committee', chair: '[Name from AUC]' },
  { name: 'Innovation and Technology Committee', chair: '[Name from AUC]' }
];

const universityRoles = [
  { name: 'Florida Memorial University (Flow Mo)', role: 'Small-Batch Manufacturing', responsibilities: [
    'Utilize proximity to the port for importing sustainable raw materials.',
    'Operate the small-batch manufacturing hub.',
    'Ensure efficient production and distribution of blank merchandise.'
  ]},
  { name: 'Atlanta University Center (AUC)/Morehouse', role: 'Customization Zones', responsibilities: [
    'Set up and manage Customization Zones in campus bookstores.',
    'Install and maintain kiosks, heat presses, and embroidery machines.',
    'Innovate in sustainable customization techniques and processes.'
  ]},
  { name: 'Tuskegee University', role: 'Recycling and Upcycling', responsibilities: [
    'Manage the recycling program for old apparel.',
    'Develop upcycling initiatives and workshops.',
    'Lead efforts in turning recycled materials into new products.'
  ]}
];

const EcosystemLandingPage = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [activeYear, setActiveYear] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-maroon-800 to-maroon-600 p-8 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">
        The Maroon League: Sustainable Textile Circularity Cooperative Ecosystem
      </h1>
      
      {/* Ecosystem Stages */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 mb-8 text-black">
        <h2 className="text-2xl font-bold mb-4 text-maroon-800">Ecosystem Stages</h2>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {ecosystemStages.map((stage, index) => (
            <div
              key={stage.id}
              className={`p-4 rounded-lg cursor-pointer ${
                index === activeStage ? 'bg-maroon-200' : 'bg-gray-100'
              }`}
              onClick={() => setActiveStage(index)}
            >
              <div className="flex items-center mb-2">
                {stage.icon}
                <span className="ml-2 font-semibold">{stage.title}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">{ecosystemStages[activeStage].title}</h3>
          <p className="mb-2">{ecosystemStages[activeStage].description}</p>
          <ul className="list-disc pl-5">
            {ecosystemStages[activeStage].details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Implementation Timeline */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 mb-8 text-black">
        <h2 className="text-2xl font-bold mb-4 text-maroon-800">Implementation Timeline</h2>
        <div className="flex mb-6 justify-between">
          {timeline.map((item, index) => (
            <div
              key={item.year}
              className={`cursor-pointer ${
                index === activeYear ? 'text-maroon-600' : 'text-gray-400'
              }`}
              onClick={() => setActiveYear(index)}
            >
              <div className={`rounded-full p-2 ${
                index === activeYear ? 'bg-maroon-100' : 'bg-gray-100'
              }`}>
                {item.year}
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{timeline[activeYear].title}</h3>
          <ul className="list-disc pl-5">
            {timeline[activeYear].tasks.map((task, index) => (
              <li key={index} className="mb-1">{task}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Consortium Agreement */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 mb-8 text-black">
        <h2 className="text-2xl font-bold mb-4 text-maroon-800">Consortium Agreement</h2>
        <p className="mb-4">
          The Maroon League Consortium Agreement outlines the terms of collaboration between participating HBCUs, 
          detailing roles, responsibilities, resource allocation, and governance structure. This agreement ensures 
          a unified approach to achieving the goals of the Sustainable Textile Circularity Cooperative Ecosystem.
        </p>
        <div className="flex items-center justify-center">
          <FileText size={48} className="text-maroon-600" />
        </div>
      </div>

      {/* Organizational Structure */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 mb-8 text-black">
        <h2 className="text-2xl font-bold mb-4 text-maroon-800">Organizational Structure</h2>
        
        <h3 className="text-xl font-semibold mb-2">Council (Core Team) at Morehouse (ICLS)</h3>
        <ul className="list-none pl-5 mb-4">
          {councilMembers.map((member, index) => (
            <li key={index} className="mb-2">
              <strong>{member.name}</strong> - {member.role} ({member.title})<br />
              <em>Responsibilities:</em> {member.responsibilities}
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-2">Committees</h3>
        <ul className="list-disc pl-5 mb-4">
          {committees.map((committee, index) => (
            <li key={index}>{committee.name} - Chair: {committee.chair}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-2">University Roles in Textile Circularity</h3>
        {universityRoles.map((uni, index) => (
          <div key={index} className="mb-4">
            <h4 className="text-lg font-semibold">{uni.name}</h4>
            <p><strong>Role:</strong> {uni.role}</p>
            <ul className="list-disc pl-5">
              {uni.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcosystemLandingPage;