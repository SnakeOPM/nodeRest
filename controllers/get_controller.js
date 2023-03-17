const get_hru = (req, res) => {
  const { smachno } = req.body;
  res.status(200).send({
    hru: "хрю",
    smachno: smachno,
  });
};

module.exports = { get_hru };
