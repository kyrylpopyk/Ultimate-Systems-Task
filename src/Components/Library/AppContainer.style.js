import styled from 'styled-components';

const AppContainer = styled.div`
    background-color: ${ props => props.backgroundColor};
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 10% 90%;
`;

export default AppContainer;