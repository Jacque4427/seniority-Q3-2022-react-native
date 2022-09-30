import React, {useState} from 'react';
import {View} from 'react-native';
import {COLORS} from '../../helpers/constants';
import {CustomButton} from '../../components/molecules/button';
import {Input} from '../../components/atoms/input';
import {Typography} from '../../components/atoms/typography';
import { usePlayerCreate } from '../../hooks/usePlayerCreate';
import { usePlayerEdit } from '../../hooks/usePlayerEdit';

export function Form({navigation, route}) {
  const {params: {player = undefined} = {}} = route;

  const [firstName, setFirstName] = useState(player ? player.firstName : '');
  const [lastName, setLastName] = useState(player ? player.lastName : '');
  const [image, setImage] = useState(player ? player.image : '');

  const savePlayer = () => {
    const player = {
      firstName,
      lastName,
      image,
      attack: 30,
      defense: 45,
      skills: 76,
      idPosition: 1
    };
    usePlayerCreate(player, navigateGoToBack());
  }

  const updatePlayer = () => {
    const newData = {
      id: player.id,
      firstName,
      lastName,
      image,
      attack: 0,
      defense: 0,
      skills: 0,
      idPosition: 1
    };
    usePlayerEdit(newData, navigateGoToBack());
  }

  const navigateGoToBack = () => {
    const { goBack } = navigation;
    goBack();
  }

  return (
    <View style={{padding: 24}}>
      <Typography
        caption="Mi Equipo"
        color={COLORS.black}
        textAlign="center"
        fontSize={24}
      />
      <View style={{marginTop: 24}}>
        <Typography caption="Nombre" color={COLORS.grayDark} fontSize={12} />
        <View style={{marginTop: 12, marginBottom: 24}}>
          <Input
            value={firstName}
            placeholder="Nombre"
            onChangeText={value => setFirstName(value)}
            borderColor={COLORS.grayDark}
            borderWidth={1}
            borderRadius={5}
            height={40}
          />
        </View>
        <Typography caption="Apellido" color={COLORS.grayDark} fontSize={12} />
        <View style={{marginTop: 12, marginBottom: 24}}>
          <Input
            value={lastName}
            placeholder="Apellido"
            onChangeText={value => setLastName(value)}
            borderColor={COLORS.grayDark}
            borderWidth={1}
            borderRadius={5}
            height={40}
          />
        </View>
        <Typography caption="Imagen" color={COLORS.grayDark} fontSize={12} />
        <View style={{marginTop: 12, marginBottom: 24}}>
          <Input
            value={image}
            placeholder="Imagen"
            onChangeText={value => setImage(value)}
            borderColor={COLORS.grayDark}
            borderWidth={1}
            borderRadius={5}
            height={40}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 16,
          width: '100%',
        }}>
        <CustomButton
          testID="addId"
          title={player ? 'Actualizar' : 'Agregar'}
          onPress={() => (player ? updatePlayer() : savePlayer())}
          disabled={false}
          height={40}
          width={80}
          backgroundColor={COLORS.grayDark}
          colorText={COLORS.white}
        />
      </View>
    </View>
  );
}
