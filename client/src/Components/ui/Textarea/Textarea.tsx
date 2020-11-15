import * as React from "react";

import { voidFunction } from "../../../Commons/Tools/VoidFunction";
import { InputProps } from "../Input/Input";
import cn from "../Input/Input.less";

export const Textarea: React.FC<InputProps> = ({
    size = `small`,
    placeholder = ``,
    value = ``,
    onValueChange = voidFunction,
    width = `100%`,
}) => {
    const [currentValue, setCurrentValue] = React.useState<string>(value);
    const textareaRef = React.createRef<HTMLTextAreaElement>();

    const handleChange = () => {
        const _value = textareaRef?.current?.value || "";
        setCurrentValue(_value);
        onValueChange(_value);
    };

    return (
        <textarea
            ref={textareaRef}
            className={cn("input", size)}
            placeholder={placeholder}
            value={currentValue}
            onChange={handleChange}
            style={{ width: width }}
        />
    );
};
