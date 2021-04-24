import React from 'react';
import PropTypes from 'prop-types';
import MatchesTable from '../../components/MatchesTable/MatchesTable.component';
import debugLog from '../../includes/DebugFunctions/DebugFunctions';

const debug = require('debug');

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // headerMenuCurrentItem: 'matches',
      currentUser: props.currentUser,
    };
  }

  handleHeaderMenuClick = (selectedItem) => {
    debugLog(
      `handleHeaderMenuClick called: selectedItem = ${selectedItem.key}`
    );
    // this.setState({ headerMenuCurrentItem: selectedItem.key });
  };

  handleTextInputt = (e) => {
    debug(e);
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const { currentUser } = this.state;
    return (
      <div className='home-page'>
        <MatchesTable currentUser={currentUser} />
      </div>
    );
  }
}

HomePage.propTypes = {
  currentUser: PropTypes.string,
};

HomePage.defaultProps = {
  currentUser: '',
};

export default HomePage;
