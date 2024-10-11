import { Usuario } from "../src/Usuario"

test("deve criar um usuário com nome", () => {
    // Given: O contexto inicial ou configuração necessária para o teste
    // Dado que estamos criando um novo usuário com o nome "Leonardo Rodrigues"
    const nome = "Leonardo Solar"

    // When: A ação ou evento que ocorre no teste
    // Quando instanciamos um novo objeto Usuario
    const usuario = new Usuario(nome)

    // Then: O resultado esperado ou efeito da ação
    // Então o método getNome deve retornar "Leonardo Rodrigues"
    expect(usuario.getNome()).toBe("Leonardo Solar")
})
