import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
    constructor() {
        super();

        this.state = { videos: [] };
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    async onSearchSubmit(term) {
        const response = await youtube.get("/search", { params: { q: term } });

        this.setState({ videos: response.data.items });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;
