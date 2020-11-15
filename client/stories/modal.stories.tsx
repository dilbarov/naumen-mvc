import * as React from "react";

import { Button } from "../src/Components/ui/Button/Button";
import { Modal } from "../src/Components/ui/Modal/Modal";

export default { title: "modal" };

export const ModalWithBackground: React.FC = () => (
    <Modal title={`Подтвердите действие`}>
        <div>
            <div>Вы действительно хотите удалить?</div>
            <div style={{ marginTop: 16, display: "flex" }}>
                <Button type={"danger"} width={100}>
                    Удалить
                </Button>
                <Button width={100} type={"secondary"}>
                    Отмена
                </Button>
            </div>
        </div>
    </Modal>
);
