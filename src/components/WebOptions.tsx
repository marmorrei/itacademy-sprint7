import { StyledWebOptions } from "./Style-components";

interface WebOptionsProps {
  handleChange: (event: {
    target: {
      name: string;
      value: string;
    };
  }) => void;
  key: string;
  webOptions: {
    numOfPages: number;
    numOfLanguages: number;
  };
}
export default function WebOptions(props: WebOptionsProps): JSX.Element {
  return (
    <StyledWebOptions className='web-options-list'>
      <li key={"numOfPages"}>
        <label htmlFor='numOfPages'>Número de páginas </label>
        <input
          type='text'
          inputMode='numeric'
          id='numOfPages'
          name='numOfPages'
          value={props.webOptions.numOfPages}
          onChange={props.handleChange}
        />
      </li>
      <li key={"numOfLanguages"}>
        <label htmlFor='numOfLanguages'>Número de idiomas </label>
        <input
          type='text'
          inputMode='numeric'
          id='numOfLanguages'
          name='numOfLanguages'
          value={props.webOptions.numOfLanguages}
          onChange={props.handleChange}
        />
      </li>
    </StyledWebOptions>
  );
}
