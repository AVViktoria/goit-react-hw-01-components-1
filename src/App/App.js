// import { React } from 'react';
// import PropTypes from "prop-types";

//* components
import Section from '../components/Section/Section';
import Profile from '../components/Profile/Profile';
import user from '../DATA/user.json';
import Statistics from '../components/Statistics/Statistics';
import data from '../DATA/statistics.json';

import FriendList from '../components/FriendList/FriendList';
import friends from '../DATA/friends.json';
import TransactionHistory from '../components/TransactionHistory/Transaction';
import transactions from '../DATA/transactions.json';
// import css from './App.module.css';
// import { TbContainer } from 'react-icons/tb';

export default function App() {
  return (
    //* дерево
    <>
      <Section title={'Task-1 "Profile"'}>
        <div>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </div>
      </Section>

      <Section title={'Task-2 "FriendList"'}>
        <div>
          <Statistics title="Upload stats" stats={data} />
        </div>
        <div>
          <Statistics stats={data} />
        </div>
      </Section>

      <Section title={'Task-3 "Statistics"'}>
        <div>
          <FriendList friends={friends} />
        </div>
      </Section>

      <Section title={'Task-4 "TransactionHistory"'}>
        <div>
          <TransactionHistory items={transactions} />
        </div>
      </Section>
    </>
  );
}
