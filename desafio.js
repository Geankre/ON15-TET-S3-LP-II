let clienteLilit = [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 30.0}]

let clienteSandra = [
    {produto: 'Camisa regata cinza', valor: 50.0}, 
    {produto: 'Short azul reto', valor: 90.0}, 
    {produto: 'Meia colorida', valor: 30.0}, 
    {produto: 'Saia branca', valor: 90.0}, 
    {produto: 'Moleton Roxo', valor: 150.0}]

let clienteMax = [
    {produto: 'Camiseta box logo', valor: 120.0}, 
    {produto: 'Boné aba reta', valor: 80.0}, 
    {produto: 'Sandalia slide branca', valor: 50.0}, 
    {produto: 'Macacao longo', valor: 200.0},
    {produto: 'Camiseta Oversized Hell', valor: 200.0},
    {produto: 'Moletom Tag', valor: 240.0}]
    
function efetuarCompra(arrayCompras) {
    let valorTotal = 0 
    let descontoAplicado = 0 
    let valorFinal = 0 
    let quantidadeDeProdutos = arrayCompras.length

    for(let item of arrayCompras) {
        valorTotal += item.valor
        if (item.valor >= 200.0) {
            descontoAplicado += (item.valor * 0.5)
            valorFinal += (item.valor * 0.5)
        } else if (item.valor >= 100.0) {
            descontoAplicado += (item.valor * 0.2)
            valorFinal += (item.valor * 0.8)
        } else if (item.valor >= 80.0) {
            descontoAplicado += (item.valor * 0.1)
            valorFinal += (item.valor * 0.9)
        } else if (item.valor >= 50.0) {
            descontoAplicado += (item.valor * 0.05)
            valorFinal += (item.valor * 0.95)
        } else {
            valorFinal += item.valor
        }
    }

    let dataDaCompra = new Date()
    //console.log(dataDaCompra)

    let notaFiscal = {
        "Valor Total": `R$${valorTotal.toFixed(2).replace('.', ',')}`,
        "Desconto Aplicado": `R$${descontoAplicado.toFixed(2).replace('.', ',')}`,
        "Valor Final": `R$${valorFinal.toFixed(2).replace('.', ',')}`,
        "Data de Compra": dataDaCompra.toLocaleDateString('pt-BR', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        })
    }

    if(quantidadeDeProdutos > 10 || valorFinal > 800.0) {
        return console.table({
            ...notaFiscal,
            "Cupom": 'Aeww, você ganhou um cupom de R$50,00 para a sua próxima compra'
        })
    } else {
        return console.table(notaFiscal)
    }
}

efetuarCompra(clienteLilit)
efetuarCompra(clienteSandra)
efetuarCompra(clienteMax)