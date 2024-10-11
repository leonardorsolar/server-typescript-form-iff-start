Aqui está uma explicação básica de TDD (Test-Driven Development), usando o padrão Given-When-Then para construir a classe Usuario e realizar um teste que verifica a criação de um usuário com um nome.

O que é TDD?
Test-Driven Development (TDD) é uma abordagem de desenvolvimento de software onde você escreve os testes antes de implementar o código. O ciclo básico de TDD é composto de três etapas principais:

Escrever um teste que falha, pois a funcionalidade ainda não foi implementada.
Escrever o código mínimo para fazer o teste passar.
Refatorar o código para garantir qualidade e clareza, mantendo os testes funcionando.
Padrão Given-When-Then
O padrão Given-When-Then ajuda a estruturar os testes em três partes:

Given (Dado que): Configura o cenário ou estado inicial necessário para o teste.
When (Quando): Define a ação ou evento que ocorre durante o teste.
Then (Então): Verifica o resultado esperado após a ação.
Classe Usuario
Aqui está a classe Usuario que será testada usando TDD:

typescript
Copiar código
export class Usuario {
nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    public getNome(): string {
        return this.nome;
    }

}
Escrevendo o Teste
Agora, vamos escrever um teste para verificar se a classe Usuario está funcionando corretamente. O teste irá verificar se o nome passado no construtor é retornado corretamente pelo método getNome().

Usando o padrão Given-When-Then, o teste será escrito assim:

typescript
Copiar código
test("deve criar um usuário com nome", () => {
// Given: O contexto inicial ou configuração necessária para o teste
// Dado que estamos criando um novo usuário com o nome "Leonardo Rodrigues"
const nome = "Leonardo Rodrigues";

    // When: A ação ou evento que ocorre no teste
    // Quando instanciamos um novo objeto Usuario
    const usuario = new Usuario(nome);

    // Then: O resultado esperado ou efeito da ação
    // Então o método getNome deve retornar "Leonardo Rodrigues"
    expect(usuario.getNome()).toBe("Leonardo Rodrigues");

});
Explicação do Teste no Padrão Given-When-Then
Given (Dado que):

Configuração inicial: Criamos uma variável nome que contém o nome "Leonardo Rodrigues".
Essa parte representa a preparação necessária para o teste. Estamos preparando o valor que será passado para o construtor da classe Usuario.
When (Quando):

Ação: Instanciamos um novo objeto da classe Usuario passando o nome "Leonardo Rodrigues" para o construtor.
Aqui, estamos realizando a ação principal que o teste precisa verificar: a criação do usuário.
Then (Então):

Verificação: Verificamos se o método getNome() retorna o nome que passamos ao instanciar o objeto.
Estamos afirmando que, após a criação do objeto Usuario, o método getNome() deve retornar "Leonardo Rodrigues", que é o valor esperado.
Rodando o Teste
Agora que o teste foi escrito, você pode rodá-lo com um framework de testes como o Jest. Se o código estiver correto, o teste irá passar. Caso contrário, ele irá falhar, indicando que algo precisa ser ajustado na implementação.

Resumo
TDD incentiva a escrever testes antes do código.
No teste acima, usamos o padrão Given-When-Then para estruturar nosso teste:
Given: Configuramos o contexto inicial (criamos um nome).
When: Realizamos a ação (criamos o objeto Usuario).
Then: Verificamos o resultado (o método getNome() retorna o nome correto).
Com essa abordagem, você pode criar um código bem testado, garantindo que ele funcione como esperado.
