import React, { Component } from 'react';
import Nav from '../../components/Nav';
import FeedMain from './Feed-main';
import Aside from './Aside';

class Feed extends Component {
    render() {
        return(
            <div>
                <Nav />
                <FeedMain />
                <Aside />
            </div>
        );
    }
}

export default Feed;