import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface ConfirmPopupProps {
    show: boolean;
    onHide: () => void;
    onConfirm: () => void;
    message: string;
}

const ConfirmPopup: React.FC<ConfirmPopupProps> = ({ show, onHide, onConfirm, message }) => {
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Body>
                <div>{message}</div>
                <div className="mt-3 d-flex justify-content-end">
                    <Button variant="secondary" onClick={onHide}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={onConfirm} className="ml-2">
                        Save
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ConfirmPopup;
