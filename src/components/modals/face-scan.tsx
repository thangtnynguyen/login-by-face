import React, { useEffect, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../assets/pages/face-scan.css'

interface FaceRecognitionModalProps {
  show: boolean;
  handleClose: () => void;
}

const FaceRecognitionModal: React.FC<FaceRecognitionModalProps> = ({ show, handleClose }) => {
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
    <Modal show={show} onHide={handleClose} centered className="face-recognition-modal">
      <Modal.Body className="text-center">
        <div className="camera-container">
          <video ref={videoRef} className="camera-feed" />
        </div>
        <p className="modal-instructions">Position your face within the circle to log in.</p>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button variant="primary" onClick={handleClose} className="modal-close-button">
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FaceRecognitionModal;
