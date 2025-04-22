// src/types/index.ts

export interface Stat {
    title: string;
    value: number;
    description?: string;
}

export interface ChartData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor?: string[];
        borderColor?: string[];
        borderWidth?: number;
    }[];
}

export interface TableData {
    headers: string[];
    rows: Array<string[]>;
}