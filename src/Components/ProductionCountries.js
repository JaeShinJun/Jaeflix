import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max-content, 200px));
    gap: 10px;
`;

const FlagImg = styled.img`
    align-self: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

const ProductionCountries = ({ production_countries }) => (
    <Container>
        {production_countries.map((production_country) => (
            <FlagImg
                key={production_country.iso_3166_1}
                alt={production_country.name}
                src={`https://www.countryflags.io/${production_country.iso_3166_1}/flat/64.png`}
            ></FlagImg>
        ))}
    </Container>
);

ProductionCountries.propTypes = {
    production_countries: PropTypes.arrayOf({
        name: PropTypes.string,
        iso_3166_1: PropTypes.string,
    }).isRequired,
};

export default ProductionCountries;
