import * as React from "react";

import { SizeType } from "../Input/Input";

import Grid from "./svg-loaders/grid.svg";
import cn from "./Loader.less";

interface Props {
    size?: SizeType;
    active?: boolean;
    children?: React.ReactNode;
    center?: boolean;
}

export const Loader: React.FC<Props> = ({ size = "big", active, children, center = false }) => (
    <div className={cn("loader", { active: active })}>
        {active && <img className={cn("img", size, { center: center }, { top: !center })} src={Grid} alt="" />}
        {children}
    </div>
);
