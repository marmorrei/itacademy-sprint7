import { StyledCount } from "./Style-components";

interface CountProps {
  id: string;
  name: string;
  value: number;
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

export default function Count(props: CountProps): JSX.Element {
  const handleInput = (event: { target: { name: string; value: string } }) => {
    const updatedInput = parseInt(event.target.value);
    props.setWebOptions((prevWebOptions) => {
      return {
        ...prevWebOptions,
        [event.target.name]: updatedInput,
      };
    });
  };

  const add = () => {
    const { name } = props;
    const propName = name as keyof typeof props.webOptions;
    const updatedValue = props.webOptions[propName] + 1;
    props.setWebOptions((prevWebOptions) => {
      return {
        ...prevWebOptions,
        [props.name]: updatedValue,
      };
    });
  };

  const subtract = () => {
    const { name } = props;
    const propName = name as keyof typeof props.webOptions;
    const updatedValue = props.webOptions[propName] - 1;
    updatedValue >= 1 &&
      props.setWebOptions((prevWebOptions) => {
        return {
          ...prevWebOptions,
          [props.name]: updatedValue,
        };
      });
  };

  return (
    <StyledCount>
      <button onClick={add}>+</button>
      <input
        type='text'
        inputMode='numeric'
        id={props.id}
        name={props.name}
        value={props.webOptions[props.name as keyof typeof props.webOptions]}
        onChange={handleInput}
      />
      <button onClick={subtract}>-</button>
    </StyledCount>
  );
}
