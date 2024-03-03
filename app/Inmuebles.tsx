import React, { useState } from 'react';

const Form: React.FC = () => {
  interface SampleItem {
    unidad: string;
    inmueble: string;
    valor: number;
  }


  const sampleData: SampleItem[] = [
    { unidad: 'A1', inmueble: 'Apartment 101', valor: 150 },
    { unidad: 'B2', inmueble: 'House 202', valor: 130 },
    { unidad: 'C3', inmueble: 'Condo 303', valor: 20 },
    { unidad: 'D4', inmueble: 'Villa 404', valor: 50 },
    { unidad: 'E5', inmueble: 'Penthouse 505', valor: 190 },
  ];

  const [unidad, setUnidad] = useState<string>('');
  const [inmueble, setInmueble] = useState<string>('');
  const [valor, setValor] = useState<string>('');
  const [data, setData] = useState<SampleItem[]>(sampleData);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry: SampleItem = {unidad, inmueble, valor: parseInt(valor)};
    const newData = [...data, newEntry];

    setData(newData);
    setUnidad('');
    setInmueble('');
    setValor('');
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
                value={unidad}
                onChange={(e) => setUnidad(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter unidad"
              />
            </div>
            <div>
              <label htmlFor="inmueble" className="block text-gray-700 text-sm font-bold mb-2">Inmueble:</label>
              <input
                type="text"
                id="inmueble"
                value={inmueble}
                onChange={(e) => setInmueble(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter inmueble"
              />
            </div>
            <div>
              <label htmlFor="valor" className="block text-gray-700 text-sm font-bold mb-2">Valor:</label>
              <input
                type="text"
                id="valor"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter valor"
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
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inmueble</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-6 py-4 whitespace-nowrap">{item.unidad}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.inmueble}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Form;
