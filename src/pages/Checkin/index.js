import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ActivityIndicator, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, List, SubmitCheckin, Loading } from './styles';
import CheckinList from '~/components/CheckinList';

import api from '~/services/api';

export default function CheckIns() {
  const [checkins, setCheckins] = useState([]);
  const [loading = false, setLoading] = useState();
  const [loadingAdd = false, setLoadingAdd] = useState();

  const student = useSelector(state => state.auth.student);
  const { id } = student;

  useEffect(() => {
    async function loadCheckins() {
      try {
        setLoading(true);
        const response = await api.get(`/students/${id}/checkins`);

        const data = response.data.checkins.map((checkin, index) => {
          checkin = {
            ...checkin,
            newId: response.data.checkins.length - index,
          };
          return checkin;
        });
        setCheckins(data);
        setLoading(false);
      } catch (err) {
        setCheckins([]);
        setLoading(false);
      }
    }
    loadCheckins();
  }, [id]);

  async function handleAddCheckIn() {
    try {
      setLoadingAdd(true);
      const responseAdd = await api.post(`/students/${id}/checkins`);

      if (responseAdd.status !== 200) {
        Alert.alert('Erro Check-In', responseAdd.data);
      } else {
        setLoading(true);
        const response = await api.get(`/students/${id}/checkins`);
        const data = response.data.checkins.map((checkin, index) => {
          checkin = {
            ...checkin,
            newId: response.data.checkins.length - index,
          };
          return checkin;
        });
        setCheckins(data);
        setLoading(false);
        setLoadingAdd(false);
      }
    } catch (err) {
      setLoading(false);
      setLoadingAdd(false);
      Alert.alert('Erro Check-In', 'Não foi possível realizar o Check-In');
    }
  }

  return (
    <Container>
      <SubmitCheckin onPress={handleAddCheckIn} loading={loadingAdd}>
        Novo check-in
      </SubmitCheckin>
      {loading ? (
        <Loading>
          <ActivityIndicator color="#EE4E62" size="large" />
        </Loading>
      ) : (
        <List
          data={checkins}
          keyExtractor={item => String(item.newId)}
          renderItem={({ item }) => <CheckinList data={item} />}
        />
      )}
    </Container>
  );
}

CheckIns.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="check-box" size={20} color={tintColor} />
  ),
  headerTitle: 'Check-ins',
};
