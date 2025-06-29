import styled from 'styled-components';

export const Row = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    max-width: 1200px;
    margin: auto;
    img{
        width:100%;
    }
`;

export const Grid2 = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    align-items:center;
    justify-content:left;
    img{
        width: 70%;
    };
`;