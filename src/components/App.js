// import { React } from 'react';
// import PropTypes from "prop-types";

//* components
import Profile from './Profile/Profile';
import user from '../DATA/user.json';
import Statistics from './Statistics/Statistics';
import data from '../DATA/statistics.json';

import FriendList from './FriendList/FriendList';
import friends from '../DATA/friends.json';
import TransactionHistory from './TransactionHistory/Transaction';
import transactions from '../DATA/transactions.json';

export default function App() {
  return (
    //* дерево
    <>
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>

      <div>
        <Statistics title="Upload stats" stats={data} />
      </div>
      <div>
        <Statistics stats={data} />
      </div>

      <div>
        <FriendList friends={friends} />
      </div>

      <div>
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
}
