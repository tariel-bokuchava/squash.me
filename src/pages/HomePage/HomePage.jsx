import React from 'react';
//import { MatchesBox } from '../../components/MatchesBox/MatchesBox.component';
import debugLog from '../../includes/DebugFunctions/DebugFunctions';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            headerMenuCurrentItem: "matches",
            currentUser: props.currentUser
        }
    }

    handleHeaderMenuClick = (selectedItem) => {
        debugLog("handleHeaderMenuClick called: selectedItem = " + selectedItem.key);
        this.setState({headerMenuCurrentItem: selectedItem.key});

        if (selectedItem.key === "logout") this.props.setSignedInState(0);
    }

    handleTextInputt = (e) => {
        console.log(e);
        this.setState({[e.target.id]: e.target.value})
    }

    render() {
        return (
            <div>
                HomePage
            </div>
        );
    }
    
    }

export default HomePage;