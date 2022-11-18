import Button from '../../components/Button';
import FooterBanner from '../../components/FooterBanner';
import Input from '../../components/Input';
import Title from '../../components/Title';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Form from '../../components/Form';
import Grid from '../../components/Grid';
import { schemaCode } from '../../utils/yupSchema';
import { useLocation, useNavigate } from 'react-router-dom';
import NavbarLink from '../../components/Navbar/NavbarLink';
import { useEffect, useState } from 'react';
interface FormData {
    code: string;
}

const ValidarCode = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schemaCode),
    });

    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState(location.state);

    const userPool = new CognitoUserPool({
        UserPoolId: `${process.env.REACT_APP_USER_POOL_ID}`,
        ClientId: `${process.env.REACT_APP_CLIENT_ID}`,
    });

    const userData = { Username: email, Pool: userPool };

    const onSubmit = (data: FormData) => {
        new CognitoUser(userData).confirmRegistration(data.code, true, function (err) {
            if (err) {
                alert(err);
                return;
            }
            navigate('/login');
            setEmail(undefined);
        });
    };

    useEffect(() => {
        if (!email) {
            return navigate('/cadastro');
        }
    }, [email, navigate]);

    return (
        <Grid>
            <header>
                <Navbar>
                    <NavbarLink to={'/login'}>Iniciar Sessão</NavbarLink>
                    <NavbarLink to={'/cadastro'}>Cadastre-se</NavbarLink>
                </Navbar>
            </header>
            <Title>Confirmação de código</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    placeholder='Código'
                    type='string'
                    {...register('code')}
                    error={errors.code?.message}
                    autoComplete='off'
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
