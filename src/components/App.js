import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";

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
                <SearchBar onSubmit={this.onSearchSubmit} />I have{" "}
                {this.state.videos.length} videos.
            </div>
        );
    }
}

export default App;
