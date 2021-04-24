import React from 'react';
import PropTypes from 'prop-types';
import MatchesTable from '../../components/MatchesTable/MatchesTable.component';
import debugLog from '../../includes/DebugFunctions/DebugFunctions';

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

    if (selectedItem.key === 'logout') this.props.setSignedInState(0);
  };

  handleTextInputt = (e) => {
    console.log(e);
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <div className='home-page'>
        <MatchesTable currentUser={this.state.currentUser} />
      </div>
    );
  }
}

HomePage.propTypes = {
  currentUser: PropTypes.string,
  setSignedInState: PropTypes.func.isRequired,
};

HomePage.defaultProps = {
  currentUser: '',
};

export default HomePage;
