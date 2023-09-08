import { useState } from "react";
import "./App.css";
import data from "./data.tsx";

export default function App(): JSX.Element {
  const [isChecked, setIsChecked] = useState<boolean[]>(
    new Array(data.length).fill(false)
  );

  const [totalPrice, setTotalPrice] = useState<number>(0);

  const handleChange = (position: number) => {
    const updatedIsChecked = isChecked.map((item: boolean, index: number) =>
      index === position ? !item : item
    );

    setIsChecked(updatedIsChecked);

    const total = updatedIsChecked.reduce(
      (sum: number, currentState: boolean, index: number) => {
        if (currentState) {
          return sum + data[index].price;
        }
        return sum;
      },
      0
    );

    setTotalPrice(total);
  };

  return (
    <main className='app'>
      <p>¿Qué quieres hacer?</p>
      <ul className='products-list'>
        {data.map(({ product, price }, index) => {
          return (
            <li key={index}>
              <input
                type='checkbox'
                id={`product-${index}`}
                name={product}
                value={product}
                checked={isChecked[index]}
                onChange={() => {
                  handleChange(index);
                }}
              />
              <label htmlFor={`product-${index}`}>
                {product} ({price} €)
              </label>
            </li>
          );
        })}
      </ul>
      <p>Precio: {totalPrice} €</p>
    </main>
  );
}
