import Order from "../models/oder.js";

export function createOrder(req,res){

    if(req.user == null) {
        res.status(403).json({
            message: "Unauthorized"
        })
        return;
    }


    const body = req.body;
    const orderData = {
        orderId : "",
        email : req.user.email,
        name : body.name,
        address : body.address,
        phoneNumber : body.phoneNumber,
        billItem : [],
        total : 0

    }

    Order.find()
        .sort({
        date : -1

    })
     .limit(1).then((lastBills) => {
        if (lastBills.length == 0) {
            orderData.orderId = "ORD001";
        } else {
            const lastBill = lastBills[0];
    
            const lastOrderId = lastBill.orderId; //'ORD0050'
            const lastOrderIdNumber = lastOrderId.replace("ORD","");//'0050'
            const lastOrderIdNumberInt = parseInt(lastOrderIdNumber);//50
            const newOrderIdNumberInt = lastOrderIdNumberInt + 1;//51
            const newOrderIdNumberStr = newOrderIdNumberInt.toString().padStart(4, '0'); // '0051'
            orderData.orderId = "ORD" + newOrderIdNumberStr;
        }

        for(let i=0; i < body.billItems.length; i++) {
            const billItem = body.billItems[i];

            //check if product exists
        }

    
        const order = new Order(orderData);

        order.save().then(
            () => {
                res.json({
                    message: "order saved successfully"
                });
            }
        ).catch(
            (err) => {
                console.log(err);
                res.status(500).json({
                    message: "order not saved"
                });
            }
        )
    
    });


}

export function getOrders(req,res){
    if (req.user == null) {
        res.status(401).json({
            message: "Unauthorized"
        })
        return;
    }

    if(req.user.role == "admin") {
        Order.find().then(
            (orders) => {
                res.json(orders);
            }
        ).catch(
            (err) => {
                res.status(500).json({
                    message: "Orders not found"
                });
            }
        )
    }else {
        Order.find({
            email : req.user.email
        }).then(
            (orders) => {
                res.json(orders)
            }
        ).catch(
            (err) => {
                res.status(500).json({
                    message: "Orders not found"
                });
            }
        )
    }
     
}