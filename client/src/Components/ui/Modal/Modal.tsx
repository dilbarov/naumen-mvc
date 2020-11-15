import * as React from "react";

import { voidFunction } from "../../../Commons/Tools/VoidFunction";

import cn from "./Modal.less";

interface ModalProps {
    onClose?: () => void;
    children?: React.ReactNode;
    title: string;
}

export const Modal: React.FC<ModalProps> = ({ onClose = voidFunction, children, title }) => (
    <div className={cn("main")}>
        <div className={cn("back")} onClick={onClose} />
        <div>
            <div className={cn("modal")}>
                <div className={cn("content")}>
                    <div className={cn("header")}>
                        <span className={cn("boldText")}>{title}</span>
                    </div>
                    <div className={cn("modalContent")}>{children}</div>
                </div>
            </div>
        </div>
    </div>
);
