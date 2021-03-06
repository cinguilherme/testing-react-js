import React, { Component } from 'react';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

class App extends Component {

    render() {
        return (
            <div className="container">
                <hr />
                <CommentBox />
                <hr />
                <CommentList />
            </div>
        )
    }
}

export default App;