import * as React from "react";
import { Redirect, Route } from "react-router";

import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import { Layout } from "../Layout/Layout";
import { NotesPage } from "../Pages/NotesPage/NotesPage";

export const App: React.FC = () => (
    <div>
        <Layout>
            <ErrorBoundary>
                <Route path={`/notes`} component={NotesPage} />
                <Route path={`/*`} render={() => <Redirect to={`/notes`} />} />
            </ErrorBoundary>
        </Layout>
    </div>
);
