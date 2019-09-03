import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');
*{
    margin: 0;
    padding: 0;
    font-size: 25px;
    font-family: 'Roboto Mono', monospace;
    text-decoration: none;
}
input{
    cursor: text;
    color: black;
}
a{
    cursor: pointer;
}
`;