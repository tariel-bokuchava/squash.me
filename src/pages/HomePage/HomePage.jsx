import React from 'react';
import HomePageHeaderMenu from '../../components/HomePageHeaderMenu/HomePageHeaderMenu.component';
import { MatchesBox } from '../../components/MatchesBox/MatchesBox.component';
import debugLog from '../../includes/DebugFunctions/DebugFunctions';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            headerMenuCurrentItem: "matches"
        }
    }

    handleHeaderMenuClick = (selectedItem) => {
        debugLog("handleHeaderMenuClick called: selectedItem = " + selectedItem.key);
        this.setState({headerMenuCurrentItem: selectedItem.key});

        if (selectedItem.key === "logout") this.props.setSignedInState(0);
    }

    render() {
        return (
            <div>
                <HomePageHeaderMenu current={this.state.headerMenuCurrentItem} handleClick={this.handleHeaderMenuClick}/>
                {
                    {
                        'matches': <MatchesBox/>,
                        'players': <h1>Players</h1>
                    }
                    [this.state.headerMenuCurrentItem]
                }                
            </div>
        );
    }
    
    }

export default HomePage;