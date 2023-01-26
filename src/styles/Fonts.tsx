import { createGlobalStyle } from 'styled-components';

const Fonts = createGlobalStyle`
@font-face {
  font-family: "Adriana";
  src: url('/fonts/Adriana-Regular.ttf');
  font-style: normal;
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: "Quattrocento";
  src: url('/fonts/Quattrocento-Bold.ttf');
  font-style: normal;
  font-weight: bold;
  font-display: swap;
}

@font-face {
  font-family: "Quattrocento";
  src: url('/fonts/Quattrocento-Regular.ttf');
  font-style: normal;
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: "UnboundedEarth";
  src: url('/fonts/Unbounded_Earth_Font_V01.ttf');
}
`;

export default Fonts;
