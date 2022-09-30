import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {List} from '../list';
import {COLORS} from '../../helpers/constants';
import {Input} from '../../components/atoms/input';
import {Title, InputContainer} from './index.styles';
import { CustomButton } from '../../components/molecules/button';

const Home = ({navigation}) => {
  const [nameToSearch, setNameToSearch] = useState('');

  return (
    <View style={{}}>
      <CustomButton
          testID="newId"
          title={'Agregar'}
          onPress={() => navigation.navigate('Form')}
          disabled={false}
          height={40}
          width={80}
          backgroundColor={COLORS.grayDark}
          colorText={COLORS.white}
        />
      <ScrollView>
        <Title>Mi Equipo</Title>
        <InputContainer>
          <Input
            testID="searchId"
            value={nameToSearch}
            placeholder="Buscar por nombre"
            onChangeText={value => setNameToSearch(value)}
            borderColor={COLORS.grayLight}
            borderWidth={1}
            borderRadius={5}
            height={40}
            width={'100%'}
          />
        </InputContainer>
        <List nameToSearch={nameToSearch} navigation={navigation}/>
      </ScrollView>
    </View>
  );
};

export {Home};
