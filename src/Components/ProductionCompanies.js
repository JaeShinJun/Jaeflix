import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max-content, 200px));
    gap: 10px;
`;
const LogoImg = styled.img`
    align-self: center;
`;

const ProductionCountries = ({ production_companies }) => (
    <Container>
        {production_companies.map((production_company) => (
            <LogoImg
                key={production_company.id}
                alt={production_company.name}
                src={`https://image.tmdb.org/t/p/w200${production_company.logo_path}`}
            ></LogoImg>
        ))}
    </Container>
);

ProductionCountries.propTypes = {
    production_companies: PropTypes.arrayOf({
        id: PropTypes.string,
        name: PropTypes.string,
        logo_path: PropTypes.string,
        origin_country: PropTypes.string,
    }).isRequired,
};

export default ProductionCountries;
