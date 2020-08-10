import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div``;

const ProductionCountries = ({ production_countries }) => (
    <Container>
        {production_countries.map((production_country) => (
            <img
                alt={production_country.name}
                src={`https://www.countryflags.io/${production_country.iso_3166_1}/flat/64.png`}
            ></img>
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
