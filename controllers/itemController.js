import Item from "../models/item.js";

export function getAllItems(req,res) {
    Item.find().then(
        (items) => {
            res.json(items);
        }
    ).catch(
        () => {
            res.json({
                message: "items not found"
            });
        }
    )
}

export function saveItem(req, res) {
    console.log(req.user);

    if(req.user.role != "admin") {
        res.status(403).json({
            message: "You cannot add items"
        })
        return;
    }

    const item = new Item(req.body)
    item.save().then(
        () => {
            res.json({
                message: "item saved"
            });
        }
    ).catch(
        () => {
            res.json({
                message: "item not saved"
            });
        }
    )
}
export function getGoodItems(req, res) {
    res.json({
        message: "good items"
    });
}

export function searchItems(req, res) {
   // const itemName = req.body.name;

    //get name by url params
    const itemName = req.params.name;

    Item.find({
        name: itemName
    }
).then(
    (items) => 
    {
        res.json(items);
    }
).catch(
    () => {
        res.json({
            message: "items not found"
        });
    }
)
}