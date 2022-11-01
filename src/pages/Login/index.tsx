import Button from '../../components/Button';
import FooterBanner from '../../components/FooterBanner';
import Input from '../../components/Input';
import Title from '../../components/Title';
import { CadastroWrapper, Form } from './style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
interface FormData {
    email: string;
    password: string;
}

const schema = yup.object({
    email: yup
        .string()
        .required('Digite seu e-mail')
        .matches(
            /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
            'Email inválido',
        ),
    password: yup.string().required('Digite uma senha'),
});

const Login = () => {
    const {
        register,
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
        const authenticationDetails = new AuthenticationDetails({
            Username: data.email,
            Password: data.password,
        });
        const userData = { Username: data.email, Pool: userPool };

        new CognitoUser(userData).authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                localStorage.setItem(
                    'access-token',
                    JSON.stringify(result.getIdToken().getJwtToken()),
                );
                //TODO
                //navegar home-page
            },
            onFailure: function (result) {
                alert(result);
            },
        });
    };

    return (
        <CadastroWrapper>
            <Title>Autentique-se</Title>
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
                <Button type='submit'>Login</Button>
            </Form>
            <FooterBanner />
        </CadastroWrapper>
    );
};

export default Login;
