import * as React from "react";

import { voidFunction } from "../../../Commons/Tools/VoidFunction";
import { Button } from "../Button/Button";
import { Loader } from "../Loader/Loader";
import { Modal } from "../Modal/Modal";

import cn from "./Card.less";

interface CardProps {
    title?: string;
    text?: string;
    onDelete?: () => void;
}

export const Card: React.FC<CardProps> = ({ text = "", title = "", onDelete = voidFunction }) => {
    const [open, setOpen] = React.useState<boolean>(false);
    const [loader, setLoader] = React.useState<boolean>(false);
    const handleDelete = async () => {
        setLoader(true);
        await onDelete();
        setLoader(false);
        setOpen(false);
    };
    const onClick = () => {
        setOpen(!open);
    };
    const renderModal = () => (
        <Modal title={`Подтвердите действие`} onClose={onClick}>
            <Loader size={"small"} active={loader}>
                <div>
                    <div>Вы действительно хотите удалить заметку?</div>
                    <div style={{ marginTop: 16, display: "flex" }}>
                        <Button type={"danger"} width={100} onClick={handleDelete}>
                            Удалить
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
        <div className={cn("card")}>
            <div className={cn("header")}>
                <div className={cn("button")} onClick={onClick}>
                    <div className={cn("close")} />
                </div>
            </div>
            <div className={cn("title")}>{title || text}</div>
            {title && <div className={cn("text")}>{text}</div>}
            {open && renderModal()}
        </div>
    );
};
