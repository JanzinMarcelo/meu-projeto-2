import Pagina from "../templates/Pagina";
import { Container } from "react-bootstrap";
import FormularioCadFornecedor from "./Formularios/FormCadFornecedor";
export default function TelaCadastroFornecedor(props) {
    return (
        <Pagina>
            <Container>
            <h2 className="text-center">Tela de Cadastro de Fornecedores</h2>
            <FormularioCadFornecedor />
            </Container>
        </Pagina>
    );
}