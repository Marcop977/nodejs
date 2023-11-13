const express = require("express");
const router = express.Router();
const { persone } = require("../persone");

router.get("/", (req, res) => {
  console.log(req.body);
  res.status(200).json({ success: true, data: persone });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const nuovaPersona = persone.find((persona) => persona.id === Number(id));
  res.status(200).json(nuovaPersona);
});

router.post("/", (req, res) => {
  console.log(req.body);
  const persona = req.body;
  persone.push(persona);
  res.status(200).json({ success: true, data: persone });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const persona = req.body;
  const index = persone.findIndex((persona) => persona.id === Number(id));
  persone[index] = persona;
  res.status(200).json(persone);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = persone.findIndex((persona) => persona.id === Number(id));
  persone.splice(index, 1);
  res.status(200).json({ data: persone });
});

module.exports = router;
