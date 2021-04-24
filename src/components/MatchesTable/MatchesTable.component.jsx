import React from 'react';
import './MatchesTable.styles.scss';

import UserPhoto from '../UserPhoto/UserPhoto.component';

export default class MatchesTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // currentUser: props.currentUser,
      challengesList: [
        {
          owner: {
            userName: 'Tariel Bokuchava',
            email: 'tariel.bokuchava@gmail.com',
            photoURL:
              'https://lh3.googleusercontent.com/a-/AOh14GhA7sASd6AnCSBnfGSPJ8HCFzuyYvx6C4hEOg3nDkY=s96-c',
          },
          date: '23/04/2021',
          timeSlot: 'Evening (19:00 - 22:00)',
          type: 'Open',
          club: 'Multisport Luzhniki',
          participants: [
            {
              userName: 'Andrey Budenny',
              email: 'andrey.budenny@gmail.com',
              photoURL: '',
              confirmed: 'Yes',
            },
            {
              userName: 'Vladimir Terenin',
              email: 'vterenin@mail.ru',
              photoURL: '',
              confirmed: 'No',
            },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <table className='matches-table'>
        <tr className='matches-table-header'>
          <th className='matches-table-header'>Date</th>
          <th className='matches-table-header'>Time</th>
          <th className='matches-table-header'>Club</th>
          <th className='matches-table-header'>Owner</th>
          <th className='matches-table-header'>Players</th>
        </tr>
        {this.state.challengesList.map((challenge) => (
          <tr className='matches-table-row'>
            <td>{challenge.date}</td>
            <td>{challenge.timeSlot}</td>
            <td>{challenge.club}</td>
            <td>
              <UserPhoto
                userName={challenge.owner.userName}
                photoURL={challenge.owner.photoURL}
              />
              <span>{challenge.owner.userName}</span>
            </td>
            <td className='participants'>
              {challenge.participants.map((participant) => (
                <UserPhoto
                  userName={participant.userName}
                  photoURL={participant.photoURL}
                />
              ))}
            </td>
          </tr>
        ))}
      </table>
    );
  }
}
