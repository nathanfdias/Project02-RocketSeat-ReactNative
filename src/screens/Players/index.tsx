import { Container } from './styles';
import { Header } from '../../components/Header';
import { HighLight } from '../../components/Highlight';

export function Players(){
    return(
        <Container>
            <Header showBackButton />
            <HighLight title='Nome da turma' subtitle='adicione os participantes e separe os times'/>
        </Container>
    );
}