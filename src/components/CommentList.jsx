import React, { Component } from 'react';

import { connect } from 'react-redux';

class CommentList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: undefined
        }
    }

    buildList() {
        if (this.props.comments != undefined) {

            return (
                this.props.comments.map((comment, index) => {
                    return <li key={index}>{comment}</li>
                })
            );
        } else {
            return (
                <li>empty</li>
            )
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.buildList()
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { comments: state.comments }
}

export default connect(mapStateToProps, null)(CommentList);