import React from 'react';
import styled from 'styled-components';

export default function CardFruta({ image, name, price, id, comprar }) {
    return (
        <CardContainer>
            <Image
                src={
                    'https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/oleo-essencia-morango-100ml-fruta-puro-essencia-massagem-D_NQ_NP_960102-MLB31202671230_062019-F[1]-1000x1000.jpg'
                }
                alt={'Morango'}
            />
            <p>{'Morango'}</p>
            <p>R${10}</p>
            <button>Comprar</button>
        </CardContainer>
    );
}
const Image = styled.img`
    width: 80%;
`;
const CardContainer = styled.section`
    width: 150px;
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
`;
