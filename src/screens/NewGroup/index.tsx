import { Container, Content, Icon } from "./styles";

import {Header} from "../../components/Header";
import {Button} from "../../components/Button";
import { HighLight } from "../../components/Highlight";
import { Input } from "../../components/Input";

export function NewGroup() {
    return(
        <Container>
            <Header showBackButton/>
            <Content>
                <Icon />
                <HighLight title="Nova turma" subtitle="crie a turma para adicionar as pessoas"/>
                <Input placeholder="Nome da turma"/>
                <Button title="Criar" style={{margin: 20}}/>
            </Content>
        </Container>
    )
}