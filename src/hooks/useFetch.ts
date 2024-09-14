import { useState } from "react";

interface DigimonResponseOK {
    img: string;
    name: string;
    level: string;
}

interface DigimonResponseError {
    ErrorMsg: string;
}

export function useFetch() {
    const [data, setData] = useState<DigimonResponseOK | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<DigimonResponseError | null>(null);
    const [controller, setController] = useState<AbortController | null>(null);

    const fetchData = ((url: string) => {
        setLoading(true);
        const abortController = new AbortController();
        setController(abortController);

        fetch(url, { signal: abortController.signal })
            .then(async (response) => {
                if (!response.ok) {
                    throw (await response.json());
                }
                return response.json();})
            .then((json: DigimonResponseOK[]) => setData({
                img: json[0]?.img,
                name: json[0]?.name,
                level: json[0]?.level,
            }))
            .catch((error) => {
                if (error.name === "AbortError") {
                    console.log("Cancelled request");
                } else {
                    setError(error);
                }
            })
            .finally(() => setLoading(false));

        return () => abortController.abort();
    });

    const handleCancelRequest = () => {
        if (controller) {
            controller.abort();
            setError({
                ErrorMsg: "Request cancelled by user",
            });
        }
    };

    return { data, fetchData, loading, error, handleCancelRequest };
}