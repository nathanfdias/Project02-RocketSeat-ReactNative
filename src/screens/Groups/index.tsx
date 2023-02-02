import { useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { HighLight } from '../../components/Highlight';
import { GroupCard } from '../../components/GroupCard';
import { ListEmpty } from '../../components/ListEmpty';
import { Button } from '../../components/Button';
import * as S from './styles';

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Roda de Samba aos domingos', 'Feira de adoção de cobra coral', 'Ninjas anônimos de Feira de Santana', 'Feijoada do Fabrício']);

  const navigation = useNavigation();

  function handleNewGroup(){
    navigation.navigate('new');
  }

  return (
    <S.Container>
        <Header />
        <HighLight title='Turmas' subtitle='Jogue com sua turma!'/>

        <FlatList 
          data={groups} 
          keyExtractor={item => item}
          renderItem={({item}) => (<GroupCard title={item} />)}
          contentContainerStyle={groups.length === 0 && { flex: 1}}
          ListEmptyComponent={() => <ListEmpty message="Listagem de turmas vazia"/>}
          />

          <Button title="Criar nova turma" onPress={handleNewGroup}/>

    </S.Container>
  );
}

