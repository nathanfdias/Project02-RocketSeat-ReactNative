import { useState } from 'react';
import { FlatList } from 'react-native';

import { Header } from '../../components/Header';
import { HighLight } from '../../components/Highlight';
import { GroupCard } from '../../components/GroupCard';
import * as S from './styles';

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Roda de Samba aos domingos', 'Feira de adoção de cobra coral', 'Ninjas anônimos de Feira de Santana', 'Feijoada do Fabrício']);

  return (
    <S.Container>
        <Header />
        <HighLight title='Turmas' subtitle='Jogue com sua turma!'/>

        <FlatList 
          data={groups} 
          keyExtractor={item => item}
          renderItem={({item}) => (<GroupCard title={item} />)}
          />

    </S.Container>
  );
}

