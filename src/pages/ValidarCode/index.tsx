import Button from '../../components/Button';
import FooterBanner from '../../components/FooterBanner';
import Input from '../../components/Input';
import Title from '../../components/Title';
import { CadastroWrapper, Form } from './style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
interface FormData {
    email: string;
    code: string;
}

const schema = yup.object({
    email: yup
        .string()
        .required('Digite seu e-mail')
        .matches(
            /^[a-z0-9._-]+(?:\.[a-z0-9._-]+)*@(?:[a-z0-9](?:[a-z-]*[a-z])?.)+[a-z](?:[a-z]*[a-z]){1,}?$/,
            'Email inválido',
        ),
    code: yup.string().required('Digite o código de validação')
});

const ValidarCode = () => {
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
            ClientId: '' });

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
        <CadastroWrapper>
            <Title>Confirmação de código</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    placeholder='E-mail'
                    type='email'
                    {...register('email')}
                    error={errors.email?.message}
                />
                <Input
                    placeholder='code'
                    type='string'
                    {...register('code')}
                    error={errors.code?.message}
                />
                <Button type='submit'>confirmar</Button>
            </Form>
            <FooterBanner />
        </CadastroWrapper>
    );
};

export default ValidarCode;
