import Button from '../../components/Button';
import FooterBanner from '../../components/FooterBanner';
import Input from '../../components/Input';
import Title from '../../components/Title';
import { CadastroWrapper, Form } from './style';

const Cadastro = () => {
    return (
        <CadastroWrapper>
            <Title>Cadastre-se</Title>
            <Form>
                <Input placeholder='E-mail' type='email' />
                <Input placeholder='Senha' type='password' />
                <Input placeholder='Confirmação de senha' type='password' />
                <Button>Cadastrar</Button>
            </Form>
            <FooterBanner />
        </CadastroWrapper>
    );
};

export default Cadastro;
