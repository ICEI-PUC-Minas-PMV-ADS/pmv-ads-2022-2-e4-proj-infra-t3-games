import Button from '../../components/Button';
import FooterBanner from '../../components/FooterBanner';
import Input from '../../components/Input';
import Title from '../../components/Title';
import { CadastroWrapper, Form } from './style';
import { useForm } from 'react-hook-form';

const Cadastro = () => {
    const { register, getValues } = useForm();
    return (
        <CadastroWrapper>
            <Title>Cadastre-se</Title>
            <Form>
                <Input placeholder='E-mail' type='email' {...register('email')} />
                <Input placeholder='Senha' type='password' {...register('password')} />
                <Input
                    placeholder='Confirmação de senha'
                    type='password'
                    {...register('confirmation')}
                />
                <Button>Cadastrar</Button>
            </Form>
            <FooterBanner />
        </CadastroWrapper>
    );
};

export default Cadastro;
