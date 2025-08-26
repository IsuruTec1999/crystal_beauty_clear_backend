import Product from "../models/product.js";
export async function createProduct(req, res) {
    if(req.user == null) {
        res.status(403).json({
            message: "You  need to login first"
        })
        return;
    }

    if(req.user.role != "admin") {
        res.status(403).json({
            message: "You are not authorized to cteate a product"
        })
        return;
    }

    const product = new Product(req.body);
    try{
        await product.save()
        res.json({
            message: "product saved successfully"
        })
    }catch(err){
        res.status(500).json({
            message: "product not saved"
        })
    }
    
}

export function getProducts(req, res) {
    Product.find().then(
        (products) => {
            res.json(products);
        }
    ).catch(
        () => {
            res.json({
                message: "products not found"
            });
        }
    )
}

export function deleteProduct(req, res) {
    if(req.user == null) {
        res.status(403).json({
            message: "You  need to login first"
        })
        return;
    }

    Product.findOneAndDelete({
        productId: req.params.productId
    }).then(
        () => {
            res.json({
                message: "product deleted successfully"
            });
        }
    ).catch(
        () => {
            res.status(500).json({
                message: "product not deleted"
            });
        }
    )
}

export function updateProduct(req, res) {
    if(req.user == null) {
        res.status(403).json({
            message: "You  need to login first"
        })
        return;
    }

    if(req.user.role != "admin") {
        res.status(403).json({
            message: "You are not authorized to cteate a product"
        })
        return;
    }

    Product.findOneAndUpdate({
        productId: req.params.productId
    }, req.body).then(
        () => {
            res.json({
                message: "product updated successfully"
            });
        }
    ).catch(
        () => {
            res.status(500).json({
                message: "product not updated"
            });
        }
    )
}