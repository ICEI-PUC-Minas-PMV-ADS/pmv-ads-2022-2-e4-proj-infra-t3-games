import Button from '../../components/Button';
import FooterBanner from '../../components/FooterBanner';
import Input from '../../components/Input';
import Title from '../../components/Title';
import { CadastroWrapper, Form } from './style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
interface FormData {
    email: string;
    password: string;
    confirm: string;
}

const schema = yup.object({
    email: yup
        .string()
        .required('Digite seu e-mail')
        .matches(
            /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
            'Email inválido',
        ),
    password: yup
        .string()
        .required('Digite uma senha')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/,
            'A senha deve ter no mínimo 8 caracteres sendo uma letra maiúscula, uma minúscula, um número e um caractere especial',
        ),
    confirm: yup
        .string()
        .required('Digite a confirmaçao de senha')
        .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais'),
});

const Cadastro = () => {
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        const userPool = new CognitoUserPool({
            UserPoolId: '',
            ClientId: '',
        });
        userPool.signUp(data.email, data.password, [], [], function (err) {
            if (err) {
                alert(err.message || JSON.stringify(err));
                return;
            }
            //TODO
            //navegar para validarcode-page se cadastro for bem-sucedido
        });
    };

    return (
        <CadastroWrapper>
            <Title>Cadastre-se</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    placeholder='E-mail'
                    type='email'
                    {...register('email')}
                    error={errors.email?.message}
                />
                <Input
                    placeholder='Senha'
                    type='password'
                    {...register('password')}
                    error={errors.password?.message}
                />
                <Input
                    placeholder='Confirmação de senha'
                    type='password'
                    {...register('confirm')}
                    error={errors.confirm?.message}
                />
                <Button type='submit'>Cadastrar</Button>
            </Form>
            <FooterBanner />
        </CadastroWrapper>
    );
};

export default Cadastro;
