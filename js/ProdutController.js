var ProdutController = {
    
    init: function(params) {
        ProdutController.setForm();
        ProdutController.displayProdutos();
    },
    
    setForm: function () {
        var form = document.getElementById('form-prod');
        form.addEventListener('submit', ProdutController.eventSubmitHandler);
    },
    
    eventSubmitHandler: function (event) {
        event.preventDefault(); 
        var inputName = document.getElementById('name');
        ProdutController.addName(inputName.value);
        var inputPrice = document.getElementById('price');
        ProdutController.addPrice(inputName.value);
        inputName.value = "";
    },
    
    addName: function(name) {
        ProdutService.addName(name);
        HTMLService.displayAddedName(name);
    },
    
    addPrice: function(price) {
        ProdutService.addPrice(price);
        HTMLService.displayAddedPrice(price);
    },
    
    displayProdutos: function() {
        var names = ProdutService.getList();
        names.forEach(HTMLService.displayAddedName);
        names.forEach(HTMLService.displayAddedPrice);
    }
    
};

ProdutController.init();