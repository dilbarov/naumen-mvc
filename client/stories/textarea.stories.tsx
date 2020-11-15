import * as React from "react";

import { Textarea } from "../src/Components/ui/Textarea/Textarea";

export default { title: "textarea" };

export const Text: React.FC = () => (
    <div style={{ width: 300 }}>
        <Textarea />
    </div>
);
