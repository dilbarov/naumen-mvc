export const getOptions = (signal?: AbortSignal): RequestInit => ({
    credentials: "include",
    signal: signal,
    headers: {
        Pragma: "no-cache",
        "Content-Type": "application/json",
    },
});
