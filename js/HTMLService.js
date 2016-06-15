var HTMLService = {
    
    displayAddedName: function(name) {
        var produto = HTMLService.createProduto(name);
        HTMLService.addProduto(produto);
    },
    
    displayAddedPrice: function(price) {
        var produto = HTMLService.createProduto(price);
        HTMLService.addProduto(price);
    },
    
    createProduto: function(text) {
        var produto = document.createElement('tr');
        produto.innerHTML = text;
        return produto;
    },
    
    addProduto: function (produto) {
        var unOrderedList = document.getElementById('tabela-prod');
        unOrderedList.appendChild(produto);
    }
};