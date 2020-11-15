import * as React from "react";

import { Card } from "../src/Components/ui/Card/Card";

export default { title: "card" };

export const CardPreview: React.FC = () => <Card title={`test`} onDelete={() => undefined} text={`test`} />;
