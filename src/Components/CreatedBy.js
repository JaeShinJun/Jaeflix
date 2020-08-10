import React from "react";
import styled from "styled-components";
import Message from "./Message";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, max-content));
    gap: 10px;
`;

const CreatorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CreatorImg = styled.img`
    width: 100%;
    height: auto;
    align-self: center;
    margin-bottom: 10px;
`;

const CreatorName = styled.span`
    font-size: 14px;
`;

const CreatedBy = ({ createdBy }) => {
    return createdBy && createdBy.length > 0 ? (
        <Container>
            {createdBy.map((creator) => (
                <CreatorContainer key={creator.id}>
                    <CreatorImg
                        alt={creator.name}
                        src={
                            creator.profile_path
                                ? `https://image.tmdb.org/t/p/w300${creator.profile_path}`
                                : require("../assets/noPosterSmall.png")
                        }
                    />
                    <CreatorName>{creator.name}</CreatorName>
                </CreatorContainer>
            ))}
        </Container>
    ) : (
        <Message color="red" text={"Creator not found"} />
    );
};

export default CreatedBy;
