import React, {useEffect} from 'react';
import {View} from 'react-native';
import {usePlayersList} from '../../hooks/usePlayersList';
import {Item} from './item';

const List = ({nameToSearch, navigation}) => {
  const {players, getPlayers} = usePlayersList();

  useEffect(() => {
    getPlayers();
  }, []);

  const playersFiltered = nameToSearch
    ? players.filter(
        player =>
          player.firstName.toLowerCase().includes(nameToSearch.toLowerCase()) ||
          player.lastName.toLowerCase().includes(nameToSearch.toLowerCase()),
      )
    : players;

  return (
    <View>
      {playersFiltered.map(player => (
        <Item key={player.id} player={player} navigation={navigation} />
      ))}
    </View>
  );
};

export {List};
