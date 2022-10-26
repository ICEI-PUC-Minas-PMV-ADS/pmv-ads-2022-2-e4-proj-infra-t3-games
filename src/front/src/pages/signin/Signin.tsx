import { useCallback, useState } from 'react';
import { Box, Typography, Container, Grid, CssBaseline, Avatar} from '@mui/material';
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import { ClientId, TokenName, UserPoolId } from '../../ENV';
import { InputLabel } from '../../components/input-label/InputLabel';
import { Link, useNavigate } from 'react-router-dom';
import { CustomButton } from '../../components/custom-button/CustomButton';

export const Signin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = useCallback(() => {
        setIsLoading(true);
        const userPool = new CognitoUserPool({UserPoolId: UserPoolId, ClientId: ClientId});
        const authenticationDetails = new AuthenticationDetails({ Username: email, Password: password});
        const userData = { Username: email, Pool: userPool };

        new CognitoUser(userData).authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                localStorage.setItem(TokenName, JSON.stringify(result.getIdToken().getJwtToken()));
                navigate('/home');
                window.location.reload();
            },
            onFailure: function (result) {
                setIsLoading(false);
                alert(result);
            },
        });
    }, [email, password, navigate]);

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
                    Login
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>

                    <InputLabel
                        margin='normal'
                        label="Email Address"
                        required={true}
                        fullWidth={true}
                        value={email}
                        onChange={(e) => setEmail(e)} />

                    <InputLabel
                        margin='normal'
                        label="Password"
                        required={true}
                        fullWidth={true}
                        type={"password"}
                        value={password}
                        onChange={(e) => setPassword(e)} />

                    <CustomButton
                        variant='contained'
                        fullWidth={true}
                        disabled={isLoading}
                        onClick={handleSubmit}>
                        Login
                    </CustomButton>
                    
                    <Grid container>
                        <Grid item xs />
                        <Grid item>
                            <Link to='/register'> <p>não possui uma conta? cadastre-se</p></Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};
