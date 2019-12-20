import { createGlobalStyle } from 'styled-components/macro';
import { COLORS } from './Colors';
import { respondTo } from './mixins';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans|Source+Serif+Pro&display=swap');

  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 100%;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: normal;
  }
  h1 {
    font-size: 3rem;
    margin-bottom : 0.5em;

    ${respondTo.md} {
      font-size: 4rem;
    }
  }
  h4 {
    color: ${COLORS.grey};
    font-size: 0.75rem;
    letter-spacing: 2px;

    ${respondTo.md} {
      font-size: 1rem;
    }
  }

  p {
    color: ${COLORS.darkgrey};
    font-family: 'Source Serif Pro', serif;
  }

  a {
    text-decoration: none;
  }

  img {
    width: 100%;
  }
`;
