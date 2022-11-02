import Button from '../../components/Button';
import FooterBanner from '../../components/FooterBanner';
import Input from '../../components/Input';
import Title from '../../components/Title';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Form from '../../components/Form';
import Grid from '../../components/Grid';
import { schemaCode } from '../../utils/yupSchema';
interface FormData {
    email: string;
    code: string;
}

const items = [
    { name: 'Iniciar Sessão', link: '/login' },
    { name: 'Cadastre-se', link: '/' },
];

const ValidarCode = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schemaCode),
    });

    const onSubmit = (data: FormData) => {
        const userPool = new CognitoUserPool({
            UserPoolId: '',
            ClientId: '',
        });

        const userData = { Username: data.email, Pool: userPool };
        new CognitoUser(userData).confirmRegistration(data.code, true, function (err) {
            if (err) {
                alert(err);
                return;
            }
            //TODO
            //Navegar pagina de login
        });
    };

    return (
        <Grid>
            <header>
                <Navbar items={items} />
            </header>
            <Title>Confirmação de código</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    placeholder='E-mail'
                    type='email'
                    {...register('email')}
                    error={errors.email?.message}
                />
                <Input
                    placeholder='Código'
                    type='string'
                    {...register('code')}
                    error={errors.code?.message}
                />
                <Button type='submit'>Confirmar</Button>
            </Form>
            <Footer>
                <FooterBanner />
            </Footer>
        </Grid>
    );
};

export default ValidarCode;
