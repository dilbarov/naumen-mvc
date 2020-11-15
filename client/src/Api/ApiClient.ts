import { stringify } from "querystringify";

import { ApiError } from "./ApiError";
import { getOptions } from "./ApiTools";
import { QueryFilter } from "./ApiTypes";

export class ApiClient {
    public readonly baseUrl: string;

    public constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public async get<TResult>(url: string, qs: QueryFilter, signal?: AbortSignal): Promise<TResult> {
        const response = await fetch(`${this.baseUrl}${url}?${stringify(qs)}`, getOptions(signal));
        if (!response.ok) {
            throw new ApiError(response.statusText, response.status);
        }
        return (await response.json()) as TResult;
    }

    // tslint:disable-next-line:no-any
    public async patch<TResult>(url: string, body?: any, signal?: AbortSignal): Promise<TResult> {
        const response = await fetch(`${this.baseUrl}${url}`, {
            ...{
                method: "PATCH",
                body: JSON.stringify(body),
            },
            ...getOptions(signal),
        });
        if (!response.ok) {
            throw new ApiError(response.statusText, response.status);
        }
        return (await response.json()) as TResult;
    }

    // tslint:disable-next-line:no-any
    public async put<TResult>(url: string, body?: any, signal?: AbortSignal): Promise<TResult> {
        const response = await fetch(`${this.baseUrl}${url}`, {
            ...{
                method: "PUT",
                body: JSON.stringify(body),
            },
            ...getOptions(signal),
        });
        if (!response.ok) {
            throw new ApiError(response.statusText, response.status);
        }
        return (await response.json()) as TResult;
    }

    // tslint:disable-next-line:no-any
    public async post<TResult>(url: string, body?: any, signal?: AbortSignal): Promise<TResult> {
        const response = await fetch(`${this.baseUrl}${url}`, {
            ...{
                method: "POST",
                body: JSON.stringify(body),
            },
            ...getOptions(signal),
        });
        if (!response.ok) {
            throw new ApiError(response.statusText, response.status);
        }
        return (await response.json()) as TResult;
    }

    // tslint:disable-next-line:no-any
    public async delete<TResult>(url: string, body?: any, signal?: AbortSignal): Promise<TResult> {
        const response = await fetch(`${this.baseUrl}${url}`, { ...{ method: "DELETE" }, ...getOptions(signal) });
        if (!response.ok) {
            throw new ApiError(response.statusText, response.status);
        }
        return (await response?.json()) as TResult;
    }
}
