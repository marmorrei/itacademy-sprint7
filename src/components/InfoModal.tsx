import { Overlay, ModalContainer } from "./Style-components";

interface InfoModalProps {
  modalState: boolean;
  changeModalState: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  value: number;
}

export default function InfoModal(props: InfoModalProps): JSX.Element {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.target === event.currentTarget &&
      props.changeModalState(!props.modalState);
  };
  return (
    <>
      {props.modalState && (
        <Overlay className='overlay' onClick={handleClick}>
          <ModalContainer className='modal-container'>
            <p>
              Su sitio web tiene {props.value} {props.name}
              {props.value > 1 ? "s" : ""}.
            </p>
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
}
