var ProdutService = {

    produtos: [],

    getList: function () {
        ProdutService.loadNames();
        return ProdutService.produtos;
    },

    addName: function (name) {
        ProdutService.produtos.push(name);
        ProdutService.saveNames();
    },
    
     addPrice: function (price) {
        ProdutService.produtos.push(price);
        ProdutService.savePrice();
    },

    loadNames: function () {
        var namesJsonText = window.localStorage.getItem('tabela-prod');
        if(namesJsonText) {
            ProdutService.produtos = JSON.parse(namesJsonText);
        }   
    },
    
    loadPrice: function () {
        var namesJsonText = window.localStorage.getItem('tabela-prod');
        if(namesJsonText) {
            ProdutService.produtos = JSON.parse(namesJsonText);
        }   
    },
    
    saveNames: function () {
        var namesJsonText = JSON.stringify(ProdutService.produtos);
        window.localStorage.setItem('tabela-prod', namesJsonText);
    },
    savePrice: function () {
        var namesJsonText = JSON.stringify(ProdutService.produtos);
        window.localStorage.setItem('tabela-prod', namesJsonText);
    }
};