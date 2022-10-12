import React, { useCallback, useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CircularProgress,
    TextField,
    Typography,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import { ClientId, TokenName, UserPoolId } from '../../ENV';

export const Signin = () => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = useCallback(() => {
        console.log(email, password);
        if (!email?.length || !password?.length) {
            alert('todos campos devem ser preenchidos!');
            return;
        }
        if (password.length < 6) {
            alert('senhas deve possuir pelo menos 6 caracteres!');
            return;
        }
        setIsLoading(true);
        const userPool = new CognitoUserPool({
            UserPoolId: UserPoolId,
            ClientId: ClientId,
        });
        const authenticationDetails = new AuthenticationDetails({
            Username: email,
            Password: password,
        });
        const userData = { Username: email, Pool: userPool };
        new CognitoUser(userData).authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                localStorage.setItem(TokenName, JSON.stringify(result.getIdToken().getJwtToken()));
                navigate('/home');
                window.location.reload();
            },
            onFailure: function () {
                setIsLoading(false);
                alert('email ou senha inválidos!');
            },
        });
    }, [email, password, navigate]);

    return (
        <Box
            width='100vw'
            height='100vh'
            display='flex'
            alignItems='center'
            justifyContent='center'
        >
            <Card>
                <CardContent>
                    <Box display='flex' flexDirection='column' gap={2} width={350}>
                        <Typography variant='h6' align='center'>
                            Login{' '}
                        </Typography>

                        <TextField
                            fullWidth
                            type='email'
                            label='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <TextField
                            fullWidth
                            label='Senha'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Box>
                </CardContent>
                <Box>
                    <ul>
                        <li>
                            <Link to='/register'> não possui uma conta? cadastre-se </Link>
                        </li>
                    </ul>
                </Box>
                <CardActions>
                    <Box width='100%' display='flex' justifyContent='center'>
                        <Button
                            variant='contained'
                            disabled={isLoading}
                            onClick={handleSubmit}
                            endIcon={
                                isLoading ? (
                                    <CircularProgress
                                        variant='indeterminate'
                                        color='inherit'
                                        size={20}
                                    />
                                ) : undefined
                            }
                        >
                            Entrar
                        </Button>
                    </Box>
                </CardActions>
            </Card>
        </Box>
    );
};
