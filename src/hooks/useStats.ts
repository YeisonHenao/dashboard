// filepath: /dashboard-app/dashboard-app/src/hooks/useStats.ts

import { useState, useEffect } from 'react';

interface Stat {
    id: number;
    value: number;
    label: string;
}

const useStats = () => {
    const [stats, setStats] = useState<Stat[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch('/api/stats');
                if (!response.ok) {
                    throw new Error('Error fetching stats');
                }
                const data = await response.json();
                setStats(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    return { stats, loading, error };
};

export default useStats;