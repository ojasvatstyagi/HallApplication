import Hall from "../models/Hall.js";

export async function getHalls(req, res) {
  try {
    const halls = await find();
    res.status(200).json(halls);
  } catch (error) {
    res.status(500).json({ message: "Error fetching halls", error });
  }
}

export async function addHall(req, res) {
  const {
    hall_name,
    capacity,
    location,
    description,
    availability_status,
    support_document,
  } = req.body;
  try {
    const hall = new Hall({
      hall_name,
      capacity,
      location,
      description,
      availability_status,
      support_document,
    });
    await hall.save();
    res.status(201).json({ message: "Hall added successfully", hall });
  } catch (error) {
    res.status(500).json({ message: "Error adding hall", error });
  }
}
