import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().min(2, 'Mínimo dois caracteres').required('Nome é Obrigatório'),
    telefone: yup.string().min(13, 'Telefone incompleto').max(14, 'Telefone inválido. Máximo 15 caracteres').required('Telefone é Obrigatório'),
    email: yup.string().email('Digite um email válido').required('Email é Obrigatório'),
})

export default schema;
