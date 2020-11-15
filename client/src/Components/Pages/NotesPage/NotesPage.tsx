import * as React from "react";

import { ApiContext } from "../../../Api/ApiContext";
import { useAsyncEffect } from "../../../Commons/Hooks/UseAsyncEffect";
import { useAsyncError } from "../../../Commons/Hooks/UseAsyncError";
import { NoteId, NoteModel } from "../../../Commons/Models/Note/NoteModel";
import { Button } from "../../ui/Button/Button";
import { Card } from "../../ui/Card/Card";
import { Input } from "../../ui/Input/Input";
import { Loader } from "../../ui/Loader/Loader";
import { Modal } from "../../ui/Modal/Modal";
import { Textarea } from "../../ui/Textarea/Textarea";

import cn from "./NotesPage.less";

export const NotesPage: React.FC = () => {
    const [search, setSearch] = React.useState<string>(``);
    const [list, setList] = React.useState<NoteModel[]>([]);
    const [open, setOpen] = React.useState<boolean>(false);
    const [loader, setLoader] = React.useState<boolean>(false);
    const [title, setTitle] = React.useState<string>(``);
    const [text, setText] = React.useState<string>(``);

    const timeoutRef = React.useRef<number>();

    const api = React.useContext(ApiContext);

    const throwError = useAsyncError();

    useAsyncEffect(
        async signal => {
            try {
                await getNotes(signal);
            } catch (e) {
                throwError(e);
            }
        },
        [search]
    );

    const addNote = async () => {
        setLoader(true);
        const response = await api?.createNote({ title: title, text: text });
        if (response) {
            setSearch(``);
            setList([...list, response]);
        }
        setOpen(false);
        setLoader(false);
        setTitle(``);
        setText(``);
    };

    const deleteNote = async (id: NoteId) => {
        const noteIndex = list.findIndex(item => item.id === id);
        if (noteIndex >= 0) {
            list.splice(noteIndex, 1);
            setList([...list]);
            await api?.deleteNote(id);
        }
    };

    const getNotes = async (signal?: AbortSignal) => {
        const response = await api?.getNotes({ search: search }, signal);
        if (response) {
            setList(response);
        }
    };

    const onClick = () => {
        setOpen(!open);
    };

    const setTitleWithCondition = (value: string) => {
        if (value.length <= 256) {
            setTitle(value);
        }
    };

    const setTextWithCondition = (value: string) => {
        if (value.length <= 256) {
            setText(value);
        }
    };

    const renderAddNoteModal = () => (
        <Modal title={`Добавить заметку`} onClose={onClick}>
            <Loader size={"small"} active={loader}>
                <div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <Input
                            value={title}
                            onValueChange={setTitleWithCondition}
                            placeholder={`Название (не более 256 символов)`}
                        />
                        <div style={{ height: 8 }} />
                        <Textarea
                            value={text}
                            onValueChange={setTextWithCondition}
                            placeholder={`Текст (обязательно и не более 256 символов)`}
                        />
                    </div>
                    <div style={{ marginTop: 16, display: "flex" }}>
                        <Button type={"primary"} width={100} onClick={addNote} disabled={text.length === 0}>
                            Добавить
                        </Button>
                        <div style={{ width: 8 }} />
                        <Button width={100} type={"secondary"} onClick={onClick}>
                            Отмена
                        </Button>
                    </div>
                </div>
            </Loader>
        </Modal>
    );

    return (
        <div>
            <h1>Заметки</h1>
            <div className={cn("manage")}>
                <div className={cn("input")}>
                    <Input
                        value={search}
                        onValueChange={value => {
                            clearTimeout(timeoutRef.current);
                            const pendingValue = value;
                            // @ts-ignore
                            timeoutRef.current = setTimeout(() => {
                                setSearch(pendingValue);
                            }, 300);
                        }}
                        placeholder={`Поиск`}
                    />
                </div>
                <div className={cn("empty")} />
                <Button onClick={onClick} width={100} type={"primary"}>
                    Добавить
                </Button>
            </div>
            <div className={cn("list")}>
                {list.map(note => (
                    <div className={cn("card")} key={note.id}>
                        <Card text={note.text} title={note.title} onDelete={() => deleteNote(note.id)} />
                    </div>
                ))}
            </div>
            {open && renderAddNoteModal()}
        </div>
    );
};
