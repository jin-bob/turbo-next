'use server';

export type TableDataResponseObject = {
  id: number;
  name: string;
  status: string;
  description: string;
  budget: number;
  createdAt: string;
  updatedAt: string;
  type: string;
  startDate: string;
  endDate: string;
  images?: Array<{ id: number; src: string }>;
  categories: Array<{ id: number; name: string }>;
};

function generateMock(id: number): TableDataResponseObject {
  return {
    id,
    name: `Project ${id}`,
    status: id % 2 === 0 ? 'inProgress' : 'approved',
    description: `Description for project ${id}`,
    budget: Math.floor(Math.random() * 10000),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    type: id % 2 === 0 ? 'internal' : 'external',
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    images: [{ id: 1, src: `https://picsum.photos/200?random=${id}` }],
    categories: [
      { id: 1, name: 'Marketing' },
      { id: 2, name: 'Development' },
    ],
  };
}

export default async function getTableData() {
  return await new Promise<Array<TableDataResponseObject>>((resolve) => {
    setTimeout(() => {
      const mockData = [];

      for (let i = 0; i <= 20; i++) {
        mockData.push(generateMock(i));
      }

      resolve(mockData);
    }, 1000);
  });
}
