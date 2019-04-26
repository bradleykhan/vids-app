import React from "react";

class SearchBar extends React.Component {
    constructor() {
        super();

        this.state = { term: "" };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();

        //Make sure we call callback from parent component
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
