import * as React from "react";

import { voidFunction } from "../../../Commons/Tools/VoidFunction";
import { SizeType } from "../Input/Input";

import cn from "./Button.less";

export type ButtonType = `primary` | `secondary` | `danger`;

export interface ButtonProps {
    disabled?: boolean;
    children?: React.ReactNode;
    type?: ButtonType;
    size?: SizeType;
    onClick?: () => void;
    width?: number | string;
}

export const Button: React.FC<ButtonProps> = ({
    onClick = voidFunction,
    disabled = false,
    children,
    type = `primary`,
    size = `small`,
    width = `100%`,
}) => {
    const handleClick = () => {
        onClick();
    };
    return (
        <button
            type={"button"}
            style={{ width: width }}
            disabled={disabled}
            onClick={handleClick}
            className={cn("button", disabled ? `disabled` : type, size)}>
            {children}
        </button>
    );
};
