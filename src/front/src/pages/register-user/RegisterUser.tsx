import { useCallback, useState } from 'react';
import { Box, Button, Typography, Container, Grid, CssBaseline, Avatar, CircularProgress } from '@mui/material';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { ClientId, UserPoolId } from '../../ENV';
import { InputLabel } from '../../components/input-label/InputLabel';
import { Link, useNavigate } from 'react-router-dom';
import { CustomButton } from '../../components/custom-button/CustomButton';


export const RegisterUser = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = useCallback(() => {
        if (password != confirmPassword) {
            alert('senhas não correspodem!');
            return;
        }
        setIsLoading(true);
        const userPool = new CognitoUserPool({
            UserPoolId: UserPoolId,
            ClientId: ClientId,
        });
        userPool.signUp(email, password, [], [], function (err) {
            if (err) {
                alert(err.message || JSON.stringify(err));
                setIsLoading(false);
                return;
            }
            navigate('/confirm-code');
        });
    }, [email, password, confirmPassword, navigate]);

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Cadastre-se
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>

                    <InputLabel
                        margin='normal'
                        label="Email"
                        required={true}
                        fullWidth={true}
                        value={email}
                        onChange={(e) => setEmail(e)} />

                    <InputLabel
                        margin='normal'
                        label="Senha"
                        required={true}
                        fullWidth={true}
                        type={"password"}
                        value={password}
                        onChange={(e) => setPassword(e)} />

                    <InputLabel
                        margin='normal'
                        label="Confirmar Senha"
                        required={true}
                        fullWidth={true}
                        type={"password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e)} />

                    <CustomButton
                        variant='contained'
                        fullWidth={true}
                        disabled={isLoading}
                        onClick={handleSubmit}>
                        Cadastrar
                    </CustomButton>

                    <Link to='/signin'> <p>já tenho cadastro</p>  </Link>
                    <Link to='/confirm-code'> <p>confirmação código</p>  </Link>
                </Box>
            </Box>
        </Container>
    );
};
