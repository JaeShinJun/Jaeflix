import React from "react";
import CollectionPresenter from "./CollectionPresenter";
import { moviesApi } from "../../api";

export default class extends React.Component {
    state = {
        collection: this.props.collection,
        id: null,
        name: null,
        movies: [],
        error: null,
        loading: true,
    };

    async componentDidMount() {
        try {
            const {
                collection: { id: collectionId },
            } = this.state;
            const {
                data: { id, name, parts },
            } = await moviesApi.collection(collectionId);

            const movies = parts.map((part) => {
                const {
                    id,
                    poster_path: imageUrl,
                    title,
                    vote_average: rating,
                    release_date: year,
                } = part;
                return { id, imageUrl, title, rating, year };
            });

            this.setState({
                id,
                name,
                movies,
            });
        } catch {
            this.setState({
                error: "Can't find collection information.",
            });
        } finally {
            this.setState({
                loading: false,
            });
        }
    }

    render() {
        const { collection, id, name, movies, error, loading } = this.state;
        console.log(this.state);
        return (
            <CollectionPresenter
                collection={collection}
                id={id}
                name={name}
                movies={movies}
                error={error}
                loading={loading}
            />
        );
    }
}

// data:
//      backdrop_path: "/bccR2CGTWVVSZAG0yqmy3DIvhTX.jpg"
//      id: 119
//      name: "반지의 제왕 시리즈"
//      overview: ""
//      parts: Array(3)
//          0:
//          adult: false
//          backdrop_path: "/vRQnzOn4HjIMX4LBq9nHhFXbsSu.jpg"
//          genre_ids: (3) [28, 12, 14]
//          id: 120
//          original_language: "en"
//          original_title: "The Lord of the Rings: The Fellowship of the Ring"
//          overview: "호빗이라 불리우는 난장이 종족 중의 한 명인 프로도는 자신의 삼촌에게서 우연히 절대 반지를 물려받게 되고, 마법사 간달프를 통해서 절대반지가 사우론의 손에 들어가면 악의 세력이 세상을 지배하게 된다는 것을 알게 된다. 하지만 절대반지를 영원히 파괴할 수 있는 유일한 방법은 반지가 만들어진 불의 산의 용암에 그것을 던져 넣는 길 뿐이다. 마침내 프로도와 그의 친구들, 엘프족인 레골라스, 난장이족 김리, 두명의 인간 전사 아라곤과 보로미르, 그리고 마법사 간달프로 구성된 반지 원정대가 길고도 험난한 여정을 떠나게 되는데..."
//          popularity: 45.472
//          poster_path: "/7uCvKNKKLRqYYyHIRpphi3yUE6Z.jpg"
//          release_date: "2001-12-18"
//          title: "반지의 제왕: 반지 원정대"
//          video: false
//          vote_average: 8.3
//          vote_count: 17527
