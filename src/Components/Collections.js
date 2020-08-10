import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Message from "./Message";

const Container = styled.div``;

const CollectionPoster = styled.img``;

const CollectionName = styled.span``;

const Collection = ({ collection }) => {
    return collection ? (
        <Container>
            <CollectionPoster
                src={
                    collection.backdrop_path
                        ? `https://image.tmdb.org/t/p/w300${collection.backdrop_path}`
                        : require("../assets/noPosterSmall.png")
                }
            />
            <CollectionName>{collection.name}</CollectionName>
        </Container>
    ) : (
        <Message color="red" text="Collection not found" />
    );
};

Collection.propTypes = {
    collection: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
        })
    ),
};

export default Collection;
