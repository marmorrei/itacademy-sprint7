import { useEffect, useState } from "react";
import { StyledCount } from "./Style-components";

interface CountProps {
  id: string;
  name: string;
  value: number;
  handleChange: (updatedWebOptions: {
    numOfPages: number;
    numOfLanguages: number;
  }) => void;
}

export default function Count(props: CountProps): JSX.Element {
  const [updatedWebOptions, setUpdatedWebOptions] = useState<{
    numOfPages: number;
    numOfLanguages: number;
  }>({
    numOfPages: props.value,
    numOfLanguages: props.value,
  });

  useEffect(() => {
    props.handleChange(updatedWebOptions);
  }, [updatedWebOptions]);

  const handleInput = (event: { target: { name: string; value: string } }) => {
    const updatedInput = parseInt(event.target.value);
    setUpdatedWebOptions((prevUpdatedWebOptions) => {
      return {
        ...prevUpdatedWebOptions,
        [event.target.name]: updatedInput,
      };
    });
  };

  const add = () => {
    const { name } = props;
    const propName = name as keyof typeof updatedWebOptions;
    const updatedValue = updatedWebOptions[propName] + 1;
    setUpdatedWebOptions((prevUpdatedWebOptions) => {
      return {
        ...prevUpdatedWebOptions,
        [props.name]: updatedValue,
      };
    });
  };

  const subtract = () => {
    const { name } = props;
    const propName = name as keyof typeof updatedWebOptions;
    const updatedValue = updatedWebOptions[propName] - 1;
    updatedValue >= 1 &&
      setUpdatedWebOptions((prevUpdatedWebOptions) => {
        return {
          ...prevUpdatedWebOptions,
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
        value={props.value}
        onChange={handleInput}
      />
      <button onClick={subtract}>-</button>
    </StyledCount>
  );
}
