import Content from "./Content";
import TextErro from "./Erro";
import Input from "./Input";
import Label from "./Label";

const Text = ({label, type, name, register, erro}) => (
 
    <Label>
        <Content> {label} </Content>
        <Input type={type} name={name} ref={register} autocomplete="off"/>
        <TextErro>{erro}</TextErro>
    </Label>

)

const Field = {
    Text,
}
export default Field;