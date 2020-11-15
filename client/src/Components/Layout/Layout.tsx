import * as React from "react";

import cn from "./Layout.less";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => <div className={cn("layout")}>{children}</div>;
