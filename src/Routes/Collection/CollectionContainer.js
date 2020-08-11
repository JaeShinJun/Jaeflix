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
            parts.sort((a, b) => {
                console.log(a, a.release_date);
                if (!a.release_date) {
                    return 1;
                }
                if (!b.release_date) {
                    return 1;
                }
                const A = parseInt(a.release_date.substring(0, 4));
                const B = parseInt(b.release_date.substring(0, 4));
                return A > B ? 1 : A === B ? 0 : -1;
            });

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
