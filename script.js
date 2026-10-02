let senha = 0;
senha = window.prompt("Digite a senha do sistema: ");

while (senha !== "1234") {
    senha = window.prompt("Senha Incorreta! Tente novamente: ");
}

let carrinho = {};
let total = 0;
let subtotal = 0;
let desconto = 0;

let btnPedir = document.querySelector("#btnPedir");
let situacaoPedido = document.querySelector("#situacaoPedido");

btnPedir.addEventListener("click", e => {
    e.preventDefault();

    let inputPedido = document.querySelector("#pedido");
    let opcao = inputPedido.value;

    switch (opcao) {
        case "0":
            btnPedir.disabled = true;

            situacaoPedido.innerHTML = "Pedido finalizado! <br>";
            inputPedido.value = "";

            for (const [chave, valor] of Object.entries(carrinho)) {
                situacaoPedido.innerHTML += `Produto: ${chave}, Quantidade: ${valor.quantidade}, Valor: R$ ${valor.total} <br>`;
            }

            desconto = subtotal > 50 ? subtotal * 0.10 : 0;
            total = subtotal - desconto;

            situacaoPedido.innerHTML += `======================= <br>`;
            situacaoPedido.innerHTML += `Total = R$ ${total} <br>`;
            situacaoPedido.innerHTML += `Subtotal = R$ ${subtotal} <br>`;
            situacaoPedido.innerHTML += `Desconto = R$ ${desconto} <br>`;

            break;

        case "1":
            subtotal += 15;

            if (carrinho["hamburguer"]) {
                carrinho["hamburguer"].quantidade++;
                carrinho["hamburguer"].total += 15;
            } else {
                carrinho["hamburguer"] = {
                    quantidade: 1,
                    total: 15
                };
            }

            situacaoPedido.innerHTML += `Hambúrguer adicionado ao carrinho! <br>`;
            inputPedido.value = "";

            break;

        case "2":
            subtotal += 20;

            if (carrinho["pizza"]) {
                carrinho["pizza"].quantidade++;
                carrinho["pizza"].total += 20;
            } else {
                carrinho["pizza"] = {
                    quantidade: 1,
                    total: 20
                };
            }

            situacaoPedido.innerHTML += `Pizza adicionada ao carrinho! <br>`;
            inputPedido.value = "";

            break;

        case "3":
            subtotal += 6;

            if (carrinho["refrigerante"]) {
                carrinho["refrigerante"].quantidade++;
                carrinho["refrigerante"].total += 6;
            } else {
                carrinho["refrigerante"] = {
                    quantidade: 1,
                    total: 6
                };
            }

            situacaoPedido.innerHTML += `Refrigerante adicionado ao carrinho! <br>`;
            inputPedido.value = "";

            break;

        case "4":
            subtotal += 10;

            if (carrinho["batata frita"]) {
                carrinho["batata frita"].quantidade++;
                carrinho["batata frita"].total += 10;
            } else {
                carrinho["batata frita"] = {
                    quantidade: 1,
                    total: 10
                };
            }

            situacaoPedido.innerHTML += `Batata frita adicionada ao carrinho! <br>`;
            inputPedido.value = "";

            break;

        default:
            situacaoPedido.innerHTML += `Opção inválida! Tente de novo. <br>`;
            inputPedido.value = "";
    }
});
