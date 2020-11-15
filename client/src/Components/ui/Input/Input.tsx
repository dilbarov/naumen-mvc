import * as React from "react";

import { voidFunction } from "../../../Commons/Tools/VoidFunction";

import cn from "./Input.less";

export type SizeType = `small` | `medium` | `large`;

export interface InputProps {
    onValueChange?: (value: string) => void;
    value?: string;
    size?: SizeType;
    placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
    onValueChange = voidFunction,
    size = `small`,
    value = ``,
    placeholder = ``,
}) => {
    const textInput = React.createRef<HTMLInputElement>();
    const [currentValue, setCurrentValue] = React.useState<string>(value);

    React.useEffect(() => {
        setCurrentValue(value);
    }, [value]);

    const handleChange = () => {
        const _value = textInput?.current?.value || "";
        setCurrentValue(_value);
        onValueChange(_value);
    };

    return (
        <input
            ref={textInput}
            type="text"
            className={cn("input", size)}
            onChange={handleChange}
            value={currentValue}
            placeholder={placeholder}
        />
    );
};
