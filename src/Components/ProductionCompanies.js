import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Message from "./Message";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max-content, 200px));
    grid-auto-rows: max-content;
    gap: 10px;
`;

const CompanyContainer = styled.div`
    height: 100%;
    align-self: center;
    display: grid;
    grid-template-rows: 6fr 1fr;
    align-items: center;
    justify-content: center;
`;

const CompanyLogoImg = styled.img`
    align-self: center;
    justify-self: center;
`;

const CompanyName = styled.span`
    align-self: center;
    justify-self: center;
`;

const ProductionCountries = ({ productionCompanies }) => {
    return productionCompanies && productionCompanies.length > 0 ? (
        <Container>
            {productionCompanies.map((productionCompany) => (
                <CompanyContainer key={productionCompany.id}>
                    <CompanyLogoImg
                        alt={productionCompany.name}
                        src={
                            productionCompany.logo_path
                                ? `https://image.tmdb.org/t/p/w200${productionCompany.logo_path}`
                                : require("../assets/noPosterSmall.png")
                        }
                    />
                    <CompanyName>{productionCompany.name}</CompanyName>
                </CompanyContainer>
            ))}
        </Container>
    ) : (
        <Message color="red" text={"Production company not found"} />
    );
};

ProductionCountries.propTypes = {
    productionCompanies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            logo_path: PropTypes.string,
            origin_country: PropTypes.string,
        })
    ).isRequired,
};

export default ProductionCountries;
