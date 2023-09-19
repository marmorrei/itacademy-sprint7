import { StyledWebOptions } from "./Style-components";
import Count from "./Count";

interface WebOptionsProps {
  key: string;
  webOptions: {
    numOfPages: number;
    numOfLanguages: number;
  };
  handleChange: (updatedWebOptions: {
    numOfPages: number;
    numOfLanguages: number;
  }) => void;
}

export default function WebOptions(props: WebOptionsProps): JSX.Element {
  const handleChangeOptions = (updatedWebOptions: {
    numOfPages: number;
    numOfLanguages: number;
  }) => {
    props.handleChange(updatedWebOptions);
  };

  return (
    <StyledWebOptions className='web-options-list'>
      <li key={"numOfPages"}>
        <label htmlFor='numOfPages'>Número de páginas </label>
        <Count
          id='numOfPages'
          name='numOfPages'
          value={props.webOptions.numOfPages}
          handleChange={handleChangeOptions}
        />
      </li>
      <li key={"numOfLanguages"}>
        <label htmlFor='numOfLanguages'>Número de idiomas </label>
        <Count
          id='numOfLanguages'
          name='numOfLanguages'
          value={props.webOptions.numOfLanguages}
          handleChange={handleChangeOptions}
        />
      </li>
    </StyledWebOptions>
  );
}
