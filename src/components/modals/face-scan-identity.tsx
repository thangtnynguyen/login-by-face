import React, { useEffect, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../assets/pages/face-scan-identity.css'

interface FaceRegistrationModalProps {
  show: boolean;
  handleClose: () => void;
}

const FaceRegistrationModal: React.FC<FaceRegistrationModalProps> = ({ show, handleClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    if (show && videoRef.current) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          streamRef.current = stream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
          }
        })
        .catch((err) => {
          console.error("Error accessing camera: ", err);
        });
    } else if (!show && streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
  }, [show]);

  return (
    <Modal show={show} onHide={handleClose} centered className="face-registration-modal">
      <Modal.Body className="text-center">
        <div className="camera-rectangle-container">
          <video ref={videoRef} className="camera-feed-rectangle" />
        </div>
        <p className="modal-instructions">Position your face within the rectangle to register.</p>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button variant="primary" onClick={handleClose} className="modal-close-button">
          Register Face
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FaceRegistrationModal;
