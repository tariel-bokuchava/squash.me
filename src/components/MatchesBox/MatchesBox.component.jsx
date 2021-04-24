import React from 'react';
import { Menu, Collapse } from 'antd';
// import debugLog from '../../includes/DebugFunctions/DebugFunctions';

const { Panel } = Collapse;

export default class MatchesBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      matches: [
        {
          date: '12.04.2021',
          owner: 'Mike',
          rating: 1795,
          players: ['John', 'vacant', 'vacant'],
        },
        {
          date: '15.04.2021',
          owner: 'Liza',
          rating: 1450,
          players: ['Emily', 'vacant'],
        },
        {
          date: '20.04.2021',
          owner: 'Emily',
          rating: 2356,
          players: ['vacnat'],
        },
      ],

      show: 'others',
    };
  }

  handleMenuClick = (selection) => {
    this.setState({ show: selection.key });
  };

  render() {
    const { matches, show } = this.state;
    return (
      <div>
        {
          {
            others: (
              <Collapse>
                {matches.map((match) => (
                  <Panel header={match.date} key={match.rating}>
                    <p>{match.players}</p>
                  </Panel>
                ))}
              </Collapse>
            ),
            mine: <h1>My Matches</h1>,
          }[show]
        }
        <Menu
          onClick={this.handleMenuClick}
          selectedKeys={[show]}
          mode='horizontal'
        >
          <Menu.Item key='mine'>My Matches</Menu.Item>
          <Menu.Item key='others'>All Matches</Menu.Item>
        </Menu>
      </div>
    );
  }
}
