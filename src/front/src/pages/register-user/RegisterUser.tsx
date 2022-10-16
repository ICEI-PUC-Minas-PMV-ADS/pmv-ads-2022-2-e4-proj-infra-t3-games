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
import { CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js';
import { ClientId, UserPoolId } from '../../ENV';

export const RegisterUser = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = useCallback(() => {
        if (!email?.length || !email?.length || !password?.length) {
            alert('todos campos devem ser preenchidos!');
            return;
        }
        if (password != confirmPassword) {
            alert('senhas não correspodem!');
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
        const attributeList = [];
        const attributeName = new CognitoUserAttribute({
            Name: 'name',
            Value: name,
        });
        attributeList.push(attributeName);
        userPool.signUp(email, password, attributeList, [], function (err) {
            if (err) {
                alert(err.message || JSON.stringify(err));
                setIsLoading(false);
                return;
            }
            navigate('/confirm-code');
        });
    }, [name, email, password, confirmPassword, navigate]);

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
                            {' '}
                            Cadastre-se{' '}
                        </Typography>
                        <ul>
                            <li>
                                <Link to='/confirm-code'>cód. de verificação </Link>
                            </li>
                        </ul>
                        <TextField
                            fullWidth
                            type='text'
                            label='Nome'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
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
                        <TextField
                            fullWidth
                            label='Corfirmar Senha'
                            type='password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Box>
                </CardContent>

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
                            confirmar
                        </Button>
                    </Box>
                </CardActions>
            </Card>
        </Box>
    );
};
