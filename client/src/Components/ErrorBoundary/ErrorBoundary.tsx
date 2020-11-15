import * as React from "react";

import { ApiError } from "../../Api/ApiError";
import { Button } from "../ui/Button/Button";
import { Modal } from "../ui/Modal/Modal";

interface State {
    error?: ApiError | Error | undefined;
    errorInfo?: React.ErrorInfo | undefined;
}

interface Props {
    children: React.ReactNode;
}

export class ErrorBoundary extends React.Component<Props, State> {
    public state = {
        error: undefined,
        errorInfo: undefined,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { error: error };
    }

    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });
    }

    public render(): React.ReactNode | undefined {
        if (this.state.error !== undefined) {
            return (
                <Modal title={`Ошибка`}>
                    <div>Произошла непредвиденная ошибка!</div>
                    <div>
                        <Button width={100} onClick={location.reload}>
                            Перезагрузить
                        </Button>
                    </div>
                </Modal>
            );
        }
        return this.props.children;
    }
}
