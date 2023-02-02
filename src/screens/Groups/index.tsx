import { Header } from '../../components/Header';
import { HighLight } from '../../components/Highlight';
import * as S from './styles';

export function Groups() {
  return (
    <S.Container>
        <Header />
        <HighLight title='Turmas' subtitle='Jogue com sua turma!'/>
    </S.Container>
  );
}

