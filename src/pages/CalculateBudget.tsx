import { useState, useEffect } from "react";
import data from "../data.tsx";
import Checkbox from "../components/Checkbox.tsx";
import WebOptions from "../components/WebOptions.tsx";
import { StyledPage } from "./Style-pages.tsx";

export default function CalculateBudget(): JSX.Element {
  // States
  const [isChecked, setIsChecked] = useState<boolean[]>(
    new Array(data.length).fill(false)
  );

  const [webOptions, setWebOptions] = useState<{
    numOfPages: number;
    numOfLanguages: number;
  }>({
    numOfPages: 1,
    numOfLanguages: 1,
  });

  const [subtotals, setSubtotals] = useState<{
    subtotalProducts: number;
    subtotalWebOptions: number;
  }>({
    subtotalProducts: 0,
    subtotalWebOptions: 0,
  });

  const [totalPrice, setTotalPrice] = useState<number>(0);

  // Side Effects
  useEffect(() => {
    setSubtotals((prevSubtotals) => {
      return {
        ...prevSubtotals,
        subtotalWebOptions: isChecked[0]
          ? webOptions.numOfPages * webOptions.numOfLanguages * 30
          : 0,
      };
    });
  }, [isChecked[0], webOptions]);

  useEffect(() => {
    setTotalPrice(subtotals.subtotalProducts + subtotals.subtotalWebOptions);
  }, [webOptions, subtotals]);

  // Save in localStorage

  useEffect(() => {
    localStorage.setItem("isChecked", JSON.stringify(isChecked));
  }, [isChecked]);

  useEffect(() => {
    localStorage.setItem("webOptions", JSON.stringify(webOptions));
  }, [webOptions]);

  useEffect(() => {
    localStorage.setItem("subtotals", JSON.stringify(subtotals));
  }, [subtotals]);

  useEffect(() => {
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
  }, [totalPrice]);

  // Handling changes
  const handleChangeProduct = (position: number) => {
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

    setSubtotals((prevSubtotals) => {
      return {
        ...prevSubtotals,
        subtotalProducts: total,
      };
    });
  };

  // Conditional rendering
  const checkboxes: React.JSX.Element[] = data.map((item, index) =>
    isChecked[0] && item.id === "web" ? (
      <ul key={item.id + "-options"}>
        <Checkbox
          key={item.id}
          index={index}
          {...item}
          isChecked={isChecked}
          handleChange={handleChangeProduct}
        />
        <WebOptions
          key={item.id + "-options-list"}
          webOptions={webOptions}
          setWebOptions={setWebOptions}
        />
      </ul>
    ) : (
      <Checkbox
        key={item.id}
        index={index}
        {...item}
        isChecked={isChecked}
        handleChange={handleChangeProduct}
      />
    )
  );

  return (
    <StyledPage className='calculate-budget'>
      <h1>Calcula tu presupuesto</h1>
      <p>¿Qué quieres hacer?</p>
      <ul className='products-list'>{checkboxes}</ul>
      <p>Precio: {totalPrice} €</p>
    </StyledPage>
  );
}
