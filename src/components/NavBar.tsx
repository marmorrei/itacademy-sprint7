import { Link } from "react-router-dom";
import { StyledNavBar } from "./Style-components";

export default function NavBar(): JSX.Element {
  return (
    <StyledNavBar className='header'>
      <h1>
        <Link to='/'>Servicios Web</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/calculate-budget'>Calcular presupuesto</Link>
          </li>
        </ul>
      </nav>
    </StyledNavBar>
  );
}
