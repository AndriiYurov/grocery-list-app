const ListModel = require('./ListModel');

//GET
module.exports.getList = async (req, res) => {
    const myList = await ListModel.find();
    res.send(myList);
}

//POST
module.exports.saveList = async (req, res) => {
    const { title } = req.body;
    ListModel.create({ title })
    .then((data) => { console.log('Item added')
    res.send(data);
    })
    
}

//DELETE
module.exports.deleteList = async (req, res) => {
    const { _id } = req.body;
    ListModel.findByIdAndDelete(_id)
    .then(() => res.send('Item has been deleted'));
}

//UPDATE
module.exports.updateList = async (req, res) => {
    const { _id, title } = req.body;
    ListModel.findByIdAndUpdate(_id, { title })
    .then(() => res.send('Item has been changed'))
}

//DELETE MANY
module.exports.deleteMany = async (req, res) => {
    ListModel.deleteMany({})
    .then(() => res.send('Items has been deleted'))
}