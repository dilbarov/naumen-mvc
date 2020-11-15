import * as React from "react";

import { Button } from "../src/Components/ui/Button/Button";

export default { title: "buttons" };

export const Buttons: React.FC = () => (
    <div style={{ display: "flex", flexDirection: "column", width: 300 }}>
        <Button width={100}>Primary</Button>
        <span style={{ height: 10 }} />
        <Button type={"secondary"} width={100}>
            Secondary
        </Button>
        <span style={{ height: 10 }} />
        <Button type={"danger"} width={100}>
            Danger
        </Button>
        <span style={{ height: 10 }} />
        <Button width={100} size={"medium"}>
            Medium
        </Button>
        <span style={{ height: 10 }} />
        <Button width={100} size={"large"}>
            Large
        </Button>
    </div>
);
