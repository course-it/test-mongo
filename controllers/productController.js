class ProductController {
    constructor(productService) {
        this.a = productService
    }

    getProducts(req, res) {
        console.log('Soy un controller')
        this.a.funcionPrueba()
    }
}
module.exports = ProductController
