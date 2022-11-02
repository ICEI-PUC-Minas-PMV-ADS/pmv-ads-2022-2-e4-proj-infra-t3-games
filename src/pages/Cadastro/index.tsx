import Button from '../../components/Button';
import FooterBanner from '../../components/FooterBanner';
import Input from '../../components/Input';
import Title from '../../components/Title';
import { useForm } from 'react-hook-form';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import Navbar from '../../components/Navbar';
import Grid from '../../components/Grid';
import Form from '../../components/Form';
import Footer from '../../components/Footer';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaCadastro } from '../../utils/yupSchema';

interface FormData {
    email: string;
    password: string;
    confirm: string;
}

const items = [{ name: 'Iniciar Sessão', link: '/login' }];

const Cadastro = () => {
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schemaCadastro),
    });

    const onSubmit = (data: FormData) => {
        const userPool = new CognitoUserPool({
            UserPoolId: `${process.env.REACT_APP_USER_POOL_ID}`,
            ClientId: `${process.env.REACT_APP_CLIENT_ID}`,
        });
        userPool.signUp(data.email, data.password, [], [], function (err) {
            if (err) {
                console.error(err);
            }

            //TODO
            //navegar para validarcode-page se cadastro for bem-sucedido
        });
    };

    return (
        <Grid>
            <header>
                <Navbar items={items} />
            </header>
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
            <Footer>
                <FooterBanner />
            </Footer>
        </Grid>
    );
};

export default Cadastro;
