import { useState } from 'react';
import { FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Container, Form, HeaderList, NumberOfPlayers } from './styles';
import { Header } from '../../components/Header';
import { HighLight } from '../../components/Highlight';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Filter } from '../../components/Filter';
import { PlayerCard } from '../../components/PlayerCard';
import { ListEmpty } from '../../components/ListEmpty';

type RouteParams = {
    group: string;
}

export function Players(){
    const [team, setTeam] = useState('TIME A');
    const [players, setPlayers] = useState(['Rodrigo', 'Roberta', 'Lucas', 'Julia']);

    const route = useRoute();
    const { group } = route.params as RouteParams;

    return(
        <Container>
            <Header showBackButton />
            <HighLight title={group} subtitle='adicione os participantes e separe os times'/>

            <Form>
                <Input placeholder='Nome da pessoa' autoCorrect={false} />
                <ButtonIcon icon="add" />
            </Form>

            <HeaderList>
                <FlatList data={['TIME A', 'TIME B']} keyExtractor={item => item}
                renderItem={({item}) => (
                    <Filter title={item} isActive={item === team}
                    onPress={() => setTeam(item)}/>
                )}
                horizontal
                />
                <NumberOfPlayers>
                    {players.length}
                </NumberOfPlayers>
            </HeaderList>

            <FlatList 
                data={players}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <PlayerCard name={item} />
                )}
                ListEmptyComponent = {() => (
                    <ListEmpty message="Time Vazio"/>
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
            />

            <Button 
                title="Remover Turma"
                type="SECONDARY"
            />


        </Container>
    );
}