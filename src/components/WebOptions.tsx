import { StyledWebOptions } from "./Style-components";
import Count from "./Count";

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
      </li>
    </StyledWebOptions>
  );
}
