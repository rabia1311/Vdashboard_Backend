const Datamodel=require("../Models/Datamodel")
const createData=async (req, res) => {
    try {
      const newData = req.body;
      const result = await Datamodel.create(newData);
      res.status(201).json(result);
  
      if (res.statusCode === 200) {
        console.log('Data added successfully');
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };


  const getData = async (req, res) => {
    try {
      const allData = await Datamodel.find();
      res.status(200).json(allData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  module.exports={createData,getData}