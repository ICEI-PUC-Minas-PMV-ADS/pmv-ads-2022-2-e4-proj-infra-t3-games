import Button from '../../components/Button';
import FooterBanner from '../../components/FooterBanner';
import Input from '../../components/Input';
import Title from '../../components/Title';
import Grid from '../../components/Grid';
import Form from '../../components/Form';
import Footer from '../../components/Footer';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Navbar from '../../components/Navbar';
import NavbarLink from '../../components/Navbar/NavbarLink';
import { Api } from '../../services/AxiosConfig/ApiConfig';

interface FormData {
    nome: string;
    descricao: string;
    url_imagem: string;
    url_fullImagem: string;
    genero: string;
    quantidade: number;
}

const schema = yup.object({
    nome: yup.string().required('Digite o nome do Game'),
    descricao: yup.string().required('Digite a descriçao'),
    url_imagem: yup.string().required('Digite a url da imagem'),
    url_fullImagem: yup.string().required('Digite a url da imagem HD'),
    genero: yup.string().required('Digite o genero do Game'),
    quantidade: yup.number().integer().min(1, 'mínimo 1').max(1000, 'máximo 1000'),
});

const CadastroGame = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        Api().post('/games', data).then((res) => {
            console.log(res)
            alert('Game criado com sucesso!')
        })
    };

    return (
        <Grid>
            <header>
                <Navbar>
                    <NavbarLink to='/'>Home</NavbarLink>
                </Navbar>
            </header>
            <Title>Cadastre seu Game</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    placeholder='Nome'
                    type='text'
                    {...register('nome')}
                    error={errors.nome?.message}
                />
                <Input
                    placeholder='descricao'
                    type='text'
                    {...register('descricao')}
                    error={errors.descricao?.message}
                />
                <Input
                    placeholder='image Url'
                    type='text'
                    {...register('url_imagem')}
                    error={errors.url_imagem?.message}
                />
                <Input
                    placeholder='image HD Url'
                    type='text'
                    {...register('url_fullImagem')}
                    error={errors.url_fullImagem?.message}
                />
                <Input
                    placeholder='genero'
                    type='text'
                    {...register('genero')}
                    error={errors.genero?.message}
                />
                <Input
                    placeholder='quantidade'
                    type='number'
                    {...register('quantidade')}
                    error={errors.quantidade?.message}
                />
                <Button type='submit'>Cadastrar</Button>
            </Form>
            <Footer>
                <FooterBanner />
            </Footer>
        </Grid>
    );
};

export default CadastroGame;
