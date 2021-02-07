import Field from "../Field";
import Form from "../Form";
import { useForm } from 'react-hook-form'
import Button from "../Button";
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './validation'
import ToastAnimated, { showToast } from '../Toast'

const FormNew = () => {

    //register - responsável por avisar os input que serão utilizados
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (user) => {
        showToast({type: 'success', message: 'Cadastrado com sucesso!'});
    }

    return (
        <>
            <ToastAnimated/>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Field.Text label="Nome" name="name" type="text" register={register} erro={errors.name?.message} />

                <Field.Text label="Telefone" name="telefone" type="text" register={register} erro={errors.telefone?.message} />

                <Field.Text label="Email" name="email" type="email" register={register} erro={errors.email?.message} />

                <Button type="submit">Enviar</Button>
            </Form>
        </>
    )
}

export default FormNew;