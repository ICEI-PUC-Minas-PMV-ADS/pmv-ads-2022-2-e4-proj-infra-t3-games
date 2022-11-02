import Button from '../../components/Button';
import FooterBanner from '../../components/FooterBanner';
import Input from '../../components/Input';
import Title from '../../components/Title';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import Navbar from '../../components/Navbar';
import Grid from '../../components/Grid';
import Form from '../../components/Form';
import Footer from '../../components/Footer';
import { schemaLogin } from '../../utils/yupSchema';
interface FormData {
    email: string;
    password: string;
}

const items = [{ name: 'Cadastre-se', link: '/cadastro' }];

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schemaLogin),
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
        <Grid>
            <header>
                <Navbar items={items} />
            </header>
            <Title>Login</Title>
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
            <Footer>
                <FooterBanner />
            </Footer>
        </Grid>
    );
};

export default Login;
