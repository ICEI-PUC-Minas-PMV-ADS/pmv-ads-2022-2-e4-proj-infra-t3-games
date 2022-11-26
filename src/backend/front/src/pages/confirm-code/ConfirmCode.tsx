import { useCallback, useState } from 'react';
import { Box, Container, CssBaseline, Avatar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import { ClientId, UserPoolId } from '../../ENV';
import { InputLabel } from '../../components/input-label/InputLabel';
import { CustomButton } from '../../components/custom-button/CustomButton';

export const ConfirmCode = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = useCallback(() => {
        setIsLoading(true);
        const userPool = new CognitoUserPool({ UserPoolId: UserPoolId, ClientId: ClientId });
        const userData = { Username: email, Pool: userPool };
        new CognitoUser(userData).confirmRegistration(code, true, function (err) {
            if (err) {
                alert('Email ou código incorreto');
                setIsLoading(false);
                return;
            }
            navigate('/signin');
        });
    }, [email, code, navigate]);

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
                    Código de Confirmação
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
                        label="Confirmar Code"
                        required={true}
                        fullWidth={true}
                        value={code}
                        onChange={(e) => setCode(e)} />

                    <CustomButton
                        variant='contained'
                        fullWidth={true}
                        disabled={isLoading}
                        onClick={handleSubmit}>
                        Confirmar
                    </CustomButton>
                </Box>
            </Box>
        </Container>
    );
};
