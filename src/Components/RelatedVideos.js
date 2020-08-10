import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max-content, 600px));
    gap: 20px;
`;

const YoutubePlayer = styled.iframe`
    margin-left: auto;
    margin-right: auto;
    width: 480px;
    height: 270px;
    frameborder: 0;
`;

const RelatedVideos = ({ videos }) => (
    <Container>
        {videos.map(
            (video) =>
                video.site.toLowerCase() === "youtube" && (
                    <YoutubePlayer
                        key={video.id}
                        title={video.name}
                        src={`//www.youtube.com/embed/${video.key}`}
                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></YoutubePlayer>
                )
        )}
    </Container>
);

RelatedVideos.propTypes = {
    videos: PropTypes.arrayOf({
        id: PropTypes.string,
        key: PropTypes.string,
        name: PropTypes.string,
        site: PropTypes.string,
    }),
};

export default RelatedVideos;
