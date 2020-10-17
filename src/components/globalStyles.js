import { createGlobalStyle } from "styled-components"
import styledNormalize from "styled-normalize"

const GlobalStyles = createGlobalStyle`
  ${styledNormalize}

  /**
   * Custom properties
   */
  :root {
    --font-family-main: -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Oxygen-Sans','Ubuntu','Cantarell','Helvetica Neue','Helvetica','Arial',sans-serif;
    --font-family-accent: 'beryliumregular', serif;
    --border-radius: 8px;
    --content-padding: 1rem;
    --fixed-nav-offset: calc(120px + var(--content-padding));
    --vertical-spacing: 6rem;
    --color-white: #FFF;
    --color-brown: #8B5E3B;

    /* Color palette #6 from Refactoring UI */
    --color-grey-1: #27241D;
    --color-grey-2: #423D33;
    --color-grey-3: #504A40;
    --color-grey-4: #625D52;
    --color-grey-5: #857F72;
    --color-grey-6: #A39E93;
    --color-grey-7: #B8B2A7;
    --color-grey-8: #D3CEC4;
    --color-grey-9: #E8E6E1;
    --color-grey-10: #FAF9F7;
    --color-red-1: #610404;
    --color-red-2: #780A0A;
    --color-red-3: #911111;
    --color-red-4: #A61B1B;
    --color-red-5: #BA2525;
    --color-red-6: #D64545;
    --color-red-7: #E66A6A;
    --color-red-8: #F29B9B;
    --color-red-9: #FACDCD;
    --color-red-10: #FFEEEE;
    --color-yellow-1: #8D2B0B;
    --color-yellow-2: #B44D12;
    --color-yellow-3: #CB6E17;
    --color-yellow-4: #DE911D;
    --color-yellow-5: #F0B429;
    --color-yellow-6: #F7C948;
    --color-yellow-7: #FADB5F;
    --color-yellow-8: #FCE588;
    --color-yellow-9: #FFF3C4;
    --color-yellow-10: #FFFBEA;
    --color-cyan-1: #044E54;
    --color-cyan-2: #0A6C74;
    --color-cyan-3: #0E7C86;
    --color-cyan-4: #14919B;
    --color-cyan-5: #2CB1BC;
    --color-cyan-6: #38BEC9;
    --color-cyan-7: #54D1DB;
    --color-cyan-8: #87EAF2;
    --color-cyan-9: #BEF8FD;
    --color-cyan-10: #E0FCFF;
    --color-lime-green-1: #2B4005;
    --color-lime-green-2: #42600C;
    --color-lime-green-3: #507712;
    --color-lime-green-4: #63921A;
    --color-lime-green-5: #7BB026;
    --color-lime-green-6: #94C843;
    --color-lime-green-7: #ABDB5E;
    --color-lime-green-8: #C7EA8F;
    --color-lime-green-9: #E2F7C2;
    --color-lime-green-10: #F2FDE0;

    /* Box shadows from Material UI - https://material-ui.com/system/shadows/ */
    --box-shadow-1:  rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
    --box-shadow-2:  rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
    --box-shadow-3:  rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
    --box-shadow-4:  rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
    --box-shadow-5:  rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 5px 8px 0px, rgba(0, 0, 0, 0.12) 0px 1px 14px 0px;
    --box-shadow-6:  rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;
    --box-shadow-7:  rgba(0, 0, 0, 0.2) 0px 4px 5px -2px, rgba(0, 0, 0, 0.14) 0px 7px 10px 1px, rgba(0, 0, 0, 0.12) 0px 2px 16px 1px;
    --box-shadow-8:  rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
    --box-shadow-9:  rgba(0, 0, 0, 0.2) 0px 5px 6px -3px, rgba(0, 0, 0, 0.14) 0px 9px 12px 1px, rgba(0, 0, 0, 0.12) 0px 3px 16px 2px;
    --box-shadow-10: rgba(0, 0, 0, 0.2) 0px 6px 6px -3px, rgba(0, 0, 0, 0.14) 0px 10px 14px 1px, rgba(0, 0, 0, 0.12) 0px 4px 18px 3px;
    --box-shadow-11: rgba(0, 0, 0, 0.2) 0px 6px 7px -4px, rgba(0, 0, 0, 0.14) 0px 11px 15px 1px, rgba(0, 0, 0, 0.12) 0px 4px 20px 3px;
    --box-shadow-12: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, rgba(0, 0, 0, 0.12) 0px 5px 22px 4px;
    --box-shadow-13: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 13px 19px 2px, rgba(0, 0, 0, 0.12) 0px 5px 24px 4px;
    --box-shadow-14: rgba(0, 0, 0, 0.2) 0px 7px 9px -4px, rgba(0, 0, 0, 0.14) 0px 14px 21px 2px, rgba(0, 0, 0, 0.12) 0px 5px 26px 4px;
    --box-shadow-15: rgba(0, 0, 0, 0.2) 0px 8px 9px -5px, rgba(0, 0, 0, 0.14) 0px 15px 22px 2px, rgba(0, 0, 0, 0.12) 0px 6px 28px 5px;
  }

  /**
   * Global styles
   */
  html {
    box-sizing: border-box;
    font-family: var(--font-family-main);
    color: var(--color-grey-2);
    line-height: 1.8;
    font-size: 1.14rem;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    @media (min-width: 500px) {
      font-size: 1.28rem;
    }
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background-color: var(--color-grey-9);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family-accent);
    color: var(--color-brown);
    letter-spacing: 1px;
  }
  h1 {
    font-size: 2.3rem;
    line-height: 1.2;
  }
  h2 {
    font-size: 1.9rem;
    line-height: 1.3;
  }
  h3 {
    font-size: 1.7rem;
    line-height: 1.4;
  }
  h4 {
    font-size: 1.5rem;
    line-height: 1.5;
  }
  h5 {
    font-size: 1.2rem;
    line-height: 1.6;
  }
  h6 {
    font-size: 1rem;
    line-height: 1.7;
  }
  ::selection {
    background: var(--color-yellow-7);
  }
  ::placeholder {
    color: var(--color-gray-6);
  }
  a {
    color: var(--color-grey-2);
    &:visited {
      color: var(--color-grey-2);
    }
  }
  blockquote {
    position: relative;
    font-style: italic;
    z-index: 1;
  }
  blockquote:after {
    content: "”";
    font-family: Georgia;
    position: absolute;
    top: 0.3em;
    left: -0.3em;
    color: var(--color-grey-9);
    font-size: 6em;
    z-index: -1;
    line-height: 0;
  }
  button, .button {
    text-decoration: none;
    display: inline-block;
    font-weight: 700;
    border: none;
    border-radius: var(--border-radius);
    padding: 14px 18px;
    margin: 0;
    background-color: var(--color-yellow-6);
    color: var(--color-yellow-3);
    cursor: pointer;
    &:hover,
    &:active {
      color: var(--color-yellow-2);
    }
    &:visited {
      color: var(--color-yellow-3);
    }
    &:focus {
      /* Since the browser's outline doesn't respect border-radius, apply a box shadow instead. */
      outline: none;
      box-shadow: 0 0 0 2px var(--color-yellow-5);
    }
  }
  .screen-reader {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }
  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }
  form {
    label {
      font-size: 0.75rem;
    }
  }
  input[type="text"],
  input[type="email"],
  input[type="number"],
  input[type="date"],
  input[type="password"],
  select {
    padding: 0.576rem; /* This gives inputs a height similar to buttons. */
    background-color: var(--color-grey-10);
    border: 2px solid var(--color-grey-8);
    border-radius: var(--border-radius);
    font-size: 1.1rem;
    appearance: none;
  }
  input[type="date"] {
    max-height: 52.56px;
  }
  select {
    padding-right: 30px; /* Thicker right padding to accommodate the arrow icon. */
    background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23D3CEC4%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E);
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;
  }
  input,
  select,
  textarea {
    &:focus {
      /* Since the browser's outline doesn't respect border-radius, change the border color instead. */
      outline: none;
      border-color: var(--color-yellow-6);
    }
  }
`

export default GlobalStyles
