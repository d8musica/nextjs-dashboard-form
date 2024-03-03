import React, { useState } from 'react';

const Form: React.FC = () => {
  interface SampleItem {
    id: string;
    inmueble: string[];
    puntos: number;
    cargas: number;
  }


  const sampleData: SampleItem[] = [
    { id: 'A1', inmueble: ['Apartment 101','Apartment 102'], puntos: 150, cargas: 100 },
    { id: 'B2', inmueble: ['House 202'], puntos: 130, cargas: 200 },
    { id: 'C3', inmueble: ['Condo 303'], puntos: 20, cargas: 300 },
    { id: 'D4', inmueble: ['Villa 404'], puntos: 50, cargas: 100 },
    { id: 'E5', inmueble: ['Penthouse 505'], puntos: 190, cargas: 200 },
  ];

  const [id, setId] = useState<string>('');
  const [cargas, setCargas] = useState<string>('');
  const [data, setData] = useState<SampleItem[]>(sampleData);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry: SampleItem = {id, inmueble: ['No hay inmuebles asignados a esta unidad'], puntos: 0, cargas: parseInt(cargas)};
    const newData = [...data, newEntry];

    setData(newData);
    setId('');
    setCargas('');
  };

  return (
    <>
      <div className="container mx-auto mt-8">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="unidad" className="block text-gray-700 text-sm font-bold mb-2">Unidad:</label>
              <input
                type="text"
                id="unidad"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter unidad"
              />
            </div>
            <div>
              <label htmlFor="cargas" className="block text-gray-700 text-sm font-bold mb-2">Valor:</label>
              <input
                type="text"
                id="cargas"
                value={cargas}
                onChange={(e) => setCargas(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter cargas"
              />
            </div>
          </div>
          <div className="flex items-center justify-center mt-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="container mx-auto mt-8">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unidad</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inmuebles</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Puntos</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cargas</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                {item.inmueble.map(item => <><span key={item} className="px-6 py-4 whitespace-nowrap">{item}</span><br/></>)}
                <td className="px-6 py-4 whitespace-nowrap">{item.puntos}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.cargas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Form;
