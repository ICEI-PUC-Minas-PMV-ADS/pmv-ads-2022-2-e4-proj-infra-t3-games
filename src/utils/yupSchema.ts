import * as yup from 'yup';

export const schemaCadastro = yup.object({
    email: yup
        .string()
        .required('Digite seu e-mail')
        .matches(
            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
            'Email inválido',
        ),
    password: yup
        .string()
        .required('Digite uma senha')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/,
            'A senha deve ter no mínimo 8 caracteres sendo uma letra maiúscula, uma minúscula, um número e um caractere especial',
        ),
    confirm: yup
        .string()
        .required('Digite a confirmaçao de senha')
        .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais'),
});

export const schemaLogin = yup.object({
    email: yup
        .string()
        .required('Digite seu e-mail')
        .matches(
            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
            'Email inválido',
        ),
    password: yup.string().required('Digite uma senha'),
});

export const schemaCode = yup.object({
    email: yup
        .string()
        .required('Digite seu e-mail')
        .matches(
            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
            'Email inválido',
        ),
    code: yup.string().required('Digite o código de validação'),
});
