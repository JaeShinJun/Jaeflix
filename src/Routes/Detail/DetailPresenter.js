import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import {
    Link,
    HashRouter as Router,
    Route,
    withRouter,
} from "react-router-dom";
import ProductionCountries from "../../Components/ProductionCountries";
import ProductionCompanies from "../../Components/ProductionCompanies";
import RelatedVideos from "../../Components/RelatedVideos";
import Seasons from "../../Components/Seasons";
import CreatedBy from "../../Components/CreatedBy";
import Collection from "../Collection";

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
`;

const backdropBlurAnim = keyframes`
    0% {
        opacity: 1;
        filter: none;
    }
    60% {
        opacity: 1;
        filter: none;
    }
    100% {
        opacity: 0.5;
        filter: blur(10px);
    }
`;

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.bgImage});
    background-position: center center;
    background-size: cover;
    animation-name: ${backdropBlurAnim};
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    z-index: -1;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

const appearAnim = keyframes`
    0% {
        opacity: 0;
    }
    70% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const Cover = styled.div`
    width: 30%;
    height: 100%;
    background-image: url(${(props) => props.bgImage});
    background-position: center center;
    background-size: cover;
    border-radius: 5px;
    animation-name: ${appearAnim};
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
`;

const Data = styled.div`
    width: 70%;
    margin-left: 20px;
    animation-name: ${appearAnim};
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
`;

const Title = styled.h3`
    font-size: 32px;
    margin-bottom: 10px;
`;

const ItemContainer = styled.div`
    margin: 20px 0px;
`;

const Item = styled.span``;

const Divider = styled.span`
    margin: 0px 10px;
`;

const Overview = styled.p`
    font-size: 12px;
    opacity: 0.7;
    line-height: 1.5;
    width: 70%;
    margin-bottom: 20px;
`;

const IMDBLink = styled.span`
    padding: 5px;
    background-color: #eec017;
    color: black;
    border-radius: 10px;
    font-weight: bold;
`;

const DisabledLink = styled.span`
    padding: 5px;
    background-color: gray;
    color: black;
    border-radius: 10px;
    font-weight: bold;
`;

const MoreInfo = styled.div``;

const Tabs = styled.nav`
    width: 65%;
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    margin-bottom: 30px;
`;

const Btn = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 5px;
    border-bottom: 2px solid
        ${(props) => (props.current ? "#3498db" : "transparent")};
    color: ${(props) => (props.current ? "#3498db" : "white")};
`;

const StyledLink = styled(Link)``;

const DetailPresenter = withRouter(
    ({ location: { pathname }, result, loading, error, isMovie, url }) =>
        loading ? (
            <>
                <Helmet>
                    <title>Loading | Jaeflix</title>
                </Helmet>
                <Loader />
            </>
        ) : (
            <Container>
                <Helmet>
                    <title>
                        {result.title ? result.title : result.name} | Jaeflix
                    </title>
                </Helmet>
                <Backdrop
                    bgImage={
                        result.backdrop_path
                            ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
                            : require("../../assets/noPosterSmall.png")
                    }
                ></Backdrop>
                <Content>
                    <Cover
                        bgImage={
                            result.poster_path
                                ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                                : require("../../assets/noPosterSmall.png")
                        }
                    ></Cover>
                    <Data>
                        <Title>
                            {result.title ? result.title : result.name}
                        </Title>
                        <ItemContainer>
                            <Item>
                                {result.release_date
                                    ? result.release_date.substring(0, 4)
                                    : result.first_air_date.substring(0, 4)}
                            </Item>
                            <Divider>•</Divider>
                            <Item>
                                {result.runtime
                                    ? result.runtime
                                    : result.episode_run_time}
                                min
                            </Item>
                            <Divider>•</Divider>
                            <Item>
                                {result.genres &&
                                    result.genres.map((genre, index) =>
                                        index === result.genres.length - 1
                                            ? genre.name
                                            : `${genre.name} / `
                                    )}
                            </Item>
                            <Divider>•</Divider>
                            {result.imdb_id ? (
                                <IMDBLink>
                                    <a
                                        href={
                                            result.imdb_id &&
                                            `https://www.imdb.com/title/${result.imdb_id}/`
                                        }
                                    >
                                        IMDB
                                    </a>
                                </IMDBLink>
                            ) : (
                                <DisabledLink>IMDB</DisabledLink>
                            )}
                            <Divider>•</Divider>
                            <span role="img" aria-label="Rating">
                                ⭐{result.vote_average}
                            </span>
                        </ItemContainer>
                        <Overview>
                            {result.overview
                                ? result.overview
                                : "There is no overview for this Movie or Show."}
                        </Overview>
                        <MoreInfo>
                            <Tabs>
                                {isMovie ? (
                                    <>
                                        <Btn
                                            current={
                                                pathname ===
                                                `/movie/${result.id}/videos`
                                            }
                                        >
                                            <StyledLink
                                                to={`/movie/${result.id}/videos`}
                                            >
                                                Related Videos
                                            </StyledLink>
                                        </Btn>
                                        <Btn
                                            current={
                                                pathname ===
                                                `/movie/${result.id}/collections`
                                            }
                                        >
                                            <StyledLink
                                                to={`/movie/${result.id}/collections`}
                                            >
                                                Collections
                                            </StyledLink>
                                        </Btn>
                                        <Btn
                                            current={
                                                pathname ===
                                                `/movie/${result.id}/production_companies`
                                            }
                                        >
                                            <StyledLink
                                                to={`/movie/${result.id}/production_companies`}
                                            >
                                                Production Companies
                                            </StyledLink>
                                        </Btn>
                                        <Btn
                                            current={
                                                pathname ===
                                                `/movie/${result.id}/production_countries`
                                            }
                                        >
                                            <StyledLink
                                                to={`/movie/${result.id}/production_countries`}
                                            >
                                                Production Countries
                                            </StyledLink>
                                        </Btn>
                                    </>
                                ) : (
                                    <>
                                        <Btn
                                            current={
                                                pathname ===
                                                `/show/${result.id}/seasons`
                                            }
                                        >
                                            <StyledLink
                                                to={`/show/${result.id}/seasons`}
                                            >
                                                Seasons
                                            </StyledLink>
                                        </Btn>
                                        <Btn
                                            current={
                                                pathname ===
                                                `/show/${result.id}/created_by`
                                            }
                                        >
                                            <StyledLink
                                                to={`/show/${result.id}/created_by`}
                                            >
                                                Created By
                                            </StyledLink>
                                        </Btn>
                                        <Btn
                                            current={
                                                pathname ===
                                                `/show/${result.id}/production_companies`
                                            }
                                        >
                                            <StyledLink
                                                to={`/show/${result.id}/production_companies`}
                                            >
                                                Production Companies
                                            </StyledLink>
                                        </Btn>
                                    </>
                                )}
                            </Tabs>
                            {isMovie ? (
                                <Router>
                                    <Route
                                        path={`${url}/videos`}
                                        render={() =>
                                            loading ? (
                                                <Loader />
                                            ) : (
                                                <RelatedVideos
                                                    videos={
                                                        result.videos.results
                                                    }
                                                />
                                            )
                                        }
                                    />
                                    <Route
                                        path={`${url}/production_companies`}
                                        render={() =>
                                            loading ? (
                                                <Loader />
                                            ) : (
                                                <ProductionCompanies
                                                    productionCompanies={
                                                        result.production_companies
                                                    }
                                                />
                                            )
                                        }
                                    />
                                    <Route
                                        path={`${url}/production_countries`}
                                        render={() =>
                                            loading ? (
                                                <Loader />
                                            ) : (
                                                <ProductionCountries
                                                    productionCountries={
                                                        result.production_countries
                                                    }
                                                />
                                            )
                                        }
                                    />
                                    <Route
                                        path={`${url}/collections`}
                                        render={() =>
                                            loading ? (
                                                <Loader />
                                            ) : (
                                                <Collection
                                                    collection={
                                                        result.belongs_to_collection
                                                    }
                                                />
                                            )
                                        }
                                    />
                                </Router>
                            ) : (
                                <Router>
                                    <Route
                                        path={`${url}/seasons`}
                                        render={() =>
                                            loading ? (
                                                <Loader />
                                            ) : (
                                                <Seasons
                                                    seasons={result.seasons}
                                                />
                                            )
                                        }
                                    />
                                    <Route
                                        path={`${url}/created_by`}
                                        render={() =>
                                            loading ? (
                                                <Loader />
                                            ) : (
                                                <CreatedBy
                                                    createdBy={
                                                        result.created_by
                                                    }
                                                />
                                            )
                                        }
                                    />
                                    <Route
                                        path={`${url}/production_companies`}
                                        render={() =>
                                            loading ? (
                                                <Loader />
                                            ) : (
                                                <ProductionCompanies
                                                    productionCompanies={
                                                        result.production_companies
                                                    }
                                                />
                                            )
                                        }
                                    />
                                </Router>
                            )}
                        </MoreInfo>
                    </Data>
                </Content>
            </Container>
        )
);

DetailPresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
