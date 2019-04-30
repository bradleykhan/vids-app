import React from "react";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
    constructor() {
        super();

        this.state = { videos: [], selectedVideo: null };

        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onVideoSelect = this.onVideoSelect.bind(this);
    }

    componentDidMount() {
        /*
        What should the default loading behaviour be?
        Should it be an arbitrarily chosen video? Currently,
        the default behavior is 'Loading...' plain text, which is
        undesirable
        */
    }

    async onSearchSubmit(term) {
        const response = await youtube.get("/search", { params: { q: term } });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    onVideoSelect(video) {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                onVideoSelect={this.onVideoSelect}
                                videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
