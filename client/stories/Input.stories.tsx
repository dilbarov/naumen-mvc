import * as React from "react";

import { Input } from "../src/Components/ui/Input/Input";

export default { title: "Input" };

export const Inputs: React.FC = () => {
    const [value, setValue] = React.useState<string>("");
    return (
        <div style={{ display: "flex", flexDirection: "column", width: 300 }}>
            <Input value={value} onValueChange={setValue} />
            <span style={{ height: 10 }} />
            <Input value={value} size={"medium"} onValueChange={setValue} />
            <span style={{ height: 10 }} />
            <Input value={value} size={"large"} onValueChange={setValue} />
        </div>
    );
};
