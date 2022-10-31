import Button from '../../components/Button';
import FooterBanner from '../../components/FooterBanner';
import Input from '../../components/Input';
import Title from '../../components/Title';
import { CadastroWrapper, Form } from './style';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

interface FormData {
    email: string;
    password: string;
    confirm: string;
}

const schema = yup.object({
    email: yup
        .string()
        .required('Digite seu e-mail.')
        .matches(
            /^[a-z0-9._-]+(?:\.[a-z0-9._-]+)*@(?:[a-z0-9](?:[a-z-]*[a-z])?.)+[a-z](?:[a-z]*[a-z]){1,}?$/,
            'Email inválido',
        ),
});

const Cadastro = () => {
    const { register, getValues } = useForm<FormData>();
    return (
        <CadastroWrapper>
            <Title>Cadastre-se</Title>
            <Form>
                <Input placeholder='E-mail' type='email' {...register('email')} />
                <Input placeholder='Senha' type='password' {...register('password')} />
                <Input
                    placeholder='Confirmação de senha'
                    type='password'
                    {...register('confirm')}
                />
                <Button>Cadastrar</Button>
            </Form>
            <FooterBanner />
        </CadastroWrapper>
    );
};

export default Cadastro;
