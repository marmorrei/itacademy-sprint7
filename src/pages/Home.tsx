import { Link } from "react-router-dom";
import { StyledPage } from "./Style-pages";
export default function Home(): JSX.Element {
  return (
    <StyledPage className='home-page'>
      <h1>Bienvenid@s a Servicios Web</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae tempore
        necessitatibus quasi! Magnam in autem commodi? Suscipit tempora
        obcaecati non sunt dicta enim. Maxime itaque saepe architecto ducimus
        laborum aut.
      </p>
      <button>
        {<Link to='/calculate-budget'>Calcula tu presupuesto</Link>}
      </button>
    </StyledPage>
  );
}
