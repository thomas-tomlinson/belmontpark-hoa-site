'use client';
import dynamic from 'next/dynamic';
import 'datatables.net-dt/css/dataTables.dataTables.css';

const DataTable = dynamic(
  async () => {
    const dtReact = import('datatables.net-react');
    const dtNet = import(`datatables.net-dt`);

    const [reactMod, dtNetMod] = await Promise.all([dtReact, dtNet]);

    reactMod.default.use(dtNetMod.default);
    return reactMod.default;
  },
  { ssr: false }
);

export default function Minutes() {
    const columns = [
        {data: 'date'},
        {data: 'type'},
        {data: 'link'}
    ];

    return (
        <div className="p-5" >
        <DataTable
        ajax='https://api.belmontparkhoa.net/index.js'
        columns={columns}
        >
          <thead>
            <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Link</th>
            </tr>
          </thead>
        </DataTable>
        </div>
    );
}