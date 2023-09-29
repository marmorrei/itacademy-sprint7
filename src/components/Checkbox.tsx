interface CheckboxProps {
  handleChange: (index: number) => void;
  key: string;
  index: number;
  product: string;
  price: number;
  isChecked: boolean[];
}
export default function Checkbox(props: CheckboxProps): JSX.Element {
  return (
    <li key={props.index}>
      <input
        type='checkbox'
        id={`product-${props.index}`}
        name={props.product}
        value={props.product}
        checked={props.isChecked[props.index]}
        onChange={() => {
          props.handleChange(props.index);
        }}
      />
      <label htmlFor={`product-${props.index}`}>
        {props.product} ({props.price} €)
      </label>
    </li>
  );
}
