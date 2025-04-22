// src/utils/helpers.ts

export const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('es-ES').format(num);
};

export const calculatePercentage = (part: number, total: number): number => {
    return total > 0 ? (part / total) * 100 : 0;
};

export const getRandomColor = (): string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};