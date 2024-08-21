import { useState, useEffect, useCallback } from "react";

export const fetchAPI = async (url: string, options?: RequestInit) => {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            // Read the response as text first
            const text = await response.text();
            console.error('Server response:', text);
            throw new Error(`HTTP error! status: ${response.status}, body: ${text}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
        if (error instanceof SyntaxError) {
            console.error("JSON Parse error. Response might not be valid JSON.");
        }
        throw error;
    }
};

export const useFetch = <T>(url: string, options?: RequestInit) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const result = await fetchAPI(url, options);
            setData(result.data);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    }, [url, options]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, loading, error, refetch: fetchData };
};