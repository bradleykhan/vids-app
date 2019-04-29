import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
    constructor() {
        super();

        this.state = { videos: [], selectedVideo: null };

        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onVideoSelect = this.onVideoSelect.bind(this);
    }

    async onSearchSubmit(term) {
        const response = await youtube.get("/search", { params: { q: term } });

        this.setState({ videos: response.data.items });
    }

    onVideoSelect(video) {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={this.onVideoSelect}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

export default App;
