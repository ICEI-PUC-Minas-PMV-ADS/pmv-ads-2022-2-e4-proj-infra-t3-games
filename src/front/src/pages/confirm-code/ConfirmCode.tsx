import { useCallback, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import { ClientId, UserPoolId } from '../../ENV';

export const ConfirmCode = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');

    const handleSubmit = useCallback(() => {
        console.log(email, code);
        const userPool = new CognitoUserPool({ UserPoolId: UserPoolId, ClientId: ClientId });
        const userData = { Username: email, Pool: userPool };
        new CognitoUser(userData).confirmRegistration(code, true, function (err) {
            if (err) {
                alert(err.message || JSON.stringify(err));
                return;
            }
            navigate('/signin');
        });
    }, [email, code, navigate]);

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
                            Código de Verificação{' '}
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
                            type='text'
                            label='Confirm Code Recebido'
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                        />
                    </Box>
                </CardContent>

                <CardActions>
                    <Box width='100%' display='flex' justifyContent='center'>
                        <Button variant='contained' onClick={handleSubmit}>
                            confirmar
                        </Button>
                    </Box>
                </CardActions>
            </Card>
        </Box>
    );
};
