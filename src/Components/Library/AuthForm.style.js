import styled from 'styled-components';

const AuthForm = styled.div`
    background-color: ${ props => props.backgroundColor};
    min-width: 400px;
    min-height: 500px;
    width: ${ props => props.width};
    height: ${ props => props.height};
    justify-self: center;
    align-self: center;
    display: grid;
    grid-template-columns: ${ props => props.columns};
    grid-template-rows: ${ props => props.rows};
`;

export default AuthForm;