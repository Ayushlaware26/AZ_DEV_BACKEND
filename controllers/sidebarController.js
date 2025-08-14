import ArrayModel from '../models/AllCourse.js';

export const getArray = async (req, res) => {
  try {
    const data = await ArrayModel.findOne();
    if (!data) return res.status(404).json({ message: "Siddharth Randi" });
    res.status(200).json(data.items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addItem = async (req, res) => {
  try {
    const { item } = req.body;
    let data = await ArrayModel.findOne();

    if (!data) {
      data = new ArrayModel({ items: [item] });
    } else {
      data.items.push(item);
    }

    await data.save();
    res.status(200).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
