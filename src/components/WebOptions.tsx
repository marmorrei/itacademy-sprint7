import { useState } from "react";
import { StyledWebOptions, ButtonInfo } from "./Style-components";
import Count from "./Count";
import InfoModal from "./InfoModal";

interface WebOptionsProps {
  key: string;
  webOptions: {
    numOfPages: number;
    numOfLanguages: number;
  };
  setWebOptions: React.Dispatch<
    React.SetStateAction<{
      numOfPages: number;
      numOfLanguages: number;
    }>
  >;
}

export default function WebOptions(props: WebOptionsProps): JSX.Element {
  const [displayInfoModal1, setDisplayInfoModal1] = useState<boolean>(false);
  const [displayInfoModal2, setDisplayInfoModal2] = useState<boolean>(false);

  return (
    <StyledWebOptions className='web-options-list'>
      <li key={"numOfPages"}>
        <label htmlFor='numOfPages'>Número de páginas </label>
        <Count
          id='numOfPages'
          name='numOfPages'
          value={props.webOptions.numOfPages}
          webOptions={props.webOptions}
          setWebOptions={props.setWebOptions}
        />
        <ButtonInfo
          onClick={() => {
            setDisplayInfoModal1(!displayInfoModal1);
          }}
        >
          i
        </ButtonInfo>
        <InfoModal
          modalState={displayInfoModal1}
          changeModalState={setDisplayInfoModal1}
          name='página'
          value={props.webOptions.numOfPages}
        />
      </li>
      <li key={"numOfLanguages"}>
        <label htmlFor='numOfLanguages'>Número de idiomas </label>
        <Count
          id='numOfLanguages'
          name='numOfLanguages'
          value={props.webOptions.numOfLanguages}
          webOptions={props.webOptions}
          setWebOptions={props.setWebOptions}
        />
        <ButtonInfo
          onClick={() => {
            setDisplayInfoModal2(!displayInfoModal2);
          }}
        >
          i
        </ButtonInfo>
        <InfoModal
          modalState={displayInfoModal2}
          changeModalState={setDisplayInfoModal2}
          name='idioma'
          value={props.webOptions.numOfLanguages}
        />
      </li>
    </StyledWebOptions>
  );
}
