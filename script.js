//let senha = 0;
//senha = window.prompt("Digite a senha do sistema: ");
//while(senha !== "1234") {
//senha = window.prompt("Senha Incorreta! Tente novamente: ");
//}

carrinho = {};

total = 0;
subtotal = 0;
desconto = 0;
btnPedir = document.querySelector("#btnPedir");
situacaoPedido = document.querySelector("#situacaoPedido");;

btnPedir.addEventListener("click", e => {
    e.preventDefault();

    let inputPedido = document.querySelector("#pedido");
    let opcao = inputPedido.value;
    switch (opcao) {
        case "0":
            btnPedir.disabled = true;
            situacaoPedido.innerHTML += `Pedido finalizado! <br>`;
            inputPedido.value = "";
            situacaoPedido.innerHTML = ""
            for (const [chave, valor] of Object.entries(carrinho)) {
               situacaoPedido.innerHTML += (`Produto: ${chave}, Valor: ${valor} <br>`);
            }

            desconto = subtotal > 50 ? subtotal * 0.10 : 0;
            total = subtotal - desconto;

            situacaoPedido.innerHTML += `======================= <br>`
            situacaoPedido.innerHTML += `Total = R$ ${total} <br>` 
            situacaoPedido.innerHTML += `Subtotal = R$ ${subtotal} <br>` 
            situacaoPedido.innerHTML += `Desconto = R$ ${desconto} <br>`
            break;
        case "1":
            subtotal += 15;
            situacaoPedido.innerHTML += `Hambúrguer adicionado ao carrinho! <br>`;
            carrinho["hamburguer"] = 15;
            inputPedido.value = "";
            break;
        case "2":
            subtotal += 20;
            situacaoPedido.innerHTML += `Pizza adicionada ao carrinho! <br>`;
            carrinho["pizza"] = 20;
            inputPedido.value = "";
            break;
        case "3":
            subtotal += 6;
            situacaoPedido.innerHTML += `Refrigerante adicionado ao carrinho! <br>`;
            carrinho["refrigerante"] = 6;
            inputPedido.value = "";
            break;
        case "4":
            subtotal += 10;
            situacaoPedido.innerHTML += `Batata frita adicionada ao carrinho! <br>`;
            carrinho["batata frita"] = 10;
            inputPedido.value = "";
            break;
        default:
            situacaoPedido.innerHTML += `Opção inválida! Tente de novo. <br>`;
            inputPedido.value = "";
    }
});