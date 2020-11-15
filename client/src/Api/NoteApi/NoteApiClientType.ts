import { NoteCreateProperties, NoteId, NoteModel } from "../../Commons/Models/Note/NoteModel";
import { QueryFilter } from "../ApiTypes";

export interface NoteApiClientType {
    getNotes: (qs: QueryFilter, signal?: AbortSignal) => Promise<NoteModel[]>;
    deleteNote: (id: NoteId, signal?: AbortSignal) => Promise<void>;
    createNote: (properties: NoteCreateProperties, signal?: AbortSignal) => Promise<NoteModel>;
    getNoteById: (id: NoteId, signal?: AbortSignal) => Promise<NoteModel>;
}
