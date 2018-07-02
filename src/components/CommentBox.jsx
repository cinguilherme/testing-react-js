import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from 'actions';


class CommentBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comment: ''
        }
    }

    changeComment = (event) => {
        this.setState({ comment: event.target.value });
    }

    handleSubmit = (event) => {

        event.preventDefault();

        this.props.saveComment(this.state.comment);

        this.setState({ comment: '' });
    }

    render() {
        return (
            <div id="commentBox_id" className="CommentBoxContainer">

                <form onSubmit={this.handleSubmit}>

                    <h4>Comment Box</h4>

                    <textarea name="" id="" cols="30" rows="10"
                        onChange={this.changeComment} value={this.state.comment}>

                    </textarea>

                    <div>
                        <button>
                            Submit Comment
                        </button>

                    </div>

                </form>

                <button onClick={this.props.fetchComments}>
                    Fetch Comments
                </button>

            </div>
        )
    }
}

export default connect(null, actions)(CommentBox);