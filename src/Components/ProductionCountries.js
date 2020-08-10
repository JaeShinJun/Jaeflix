import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Message from "./Message";

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

const ProductionCountries = ({ productionCountries }) => {
    return productionCountries && productionCountries.length > 0 ? (
        <Container>
            {productionCountries.map((productionCountry) => (
                <FlagImg
                    key={productionCountry.iso_3166_1}
                    alt={productionCountry.name}
                    src={`https://www.countryflags.io/${productionCountry.iso_3166_1}/flat/64.png`}
                ></FlagImg>
            ))}
        </Container>
    ) : (
        <Message color="red" text={"Production country not found"} />
    );
};

ProductionCountries.propTypes = {
    productionCountries: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            iso_3166_1: PropTypes.string,
        })
    ),
};

export default ProductionCountries;
