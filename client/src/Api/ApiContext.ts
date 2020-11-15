import * as React from "react";

import { NoteApiClientType } from "./NoteApi/NoteApiClientType";

export const ApiContext = React.createContext<NoteApiClientType | undefined>(undefined);
