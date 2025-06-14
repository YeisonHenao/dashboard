// src/components/tables/DataTable.tsx

import React from 'react';

interface DataTableProps {
    data: Array<Record<string, string | number | boolean>>;
    columns: Array<{ Header: string; accessor: string }>;
}

const DataTable: React.FC<DataTableProps> = ({ data, columns }) => {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column.accessor}>{column.Header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((column) => (
                            <td key={column.accessor}>{row[column.accessor]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;