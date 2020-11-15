export type NoteId = number;

export interface NoteCreateProperties {
    title: string;
    text: string;
}

export interface NoteModel {
    id: NoteId;
    title: string;
    text: string;
}
