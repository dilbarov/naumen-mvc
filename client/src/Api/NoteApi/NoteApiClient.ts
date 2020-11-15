import { NoteCreateProperties, NoteId, NoteModel } from "../../Commons/Models/Note/NoteModel";
import { ApiClient } from "../ApiClient";
import { QueryFilter } from "../ApiTypes";

import { NoteApiClientType } from "./NoteApiClientType";

export class NoteApiClient extends ApiClient implements NoteApiClientType {
    public constructor(baseUrl: string) {
        super(baseUrl);
    }

    public async createNote(properties: NoteCreateProperties, signal: AbortSignal | undefined): Promise<NoteModel> {
        return await this.post<NoteModel>(`/api/notes/add`, properties, signal);
    }

    public async deleteNote(id: NoteId, signal: AbortSignal | undefined): Promise<void> {
        return await this.delete(`/api/notes/${id}`, {}, signal);
    }

    public async getNoteById(id: NoteId, signal: AbortSignal | undefined): Promise<NoteModel> {
        return await this.get<NoteModel>(`/api/notes/${id}`, {}, signal);
    }

    public async getNotes(qs: QueryFilter, signal: AbortSignal | undefined): Promise<NoteModel[]> {
        return await this.get<NoteModel[]>(`/api/notes/`, qs, signal);
    }
}
