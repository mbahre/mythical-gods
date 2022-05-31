const Gods = require(`${__dirname}/../models/mgModel`);

exports.getAllGods = async function (req, res, next) {
  try {
    const allGods = await Gods.find();

    res.status(200).json({
      status: "success",
      data: {
        gods: allGods,
      },
    });
  } catch (err) {
    res.status(404).json({ status: "fail", message: err });
  }
};

exports.getGodByName = async function (req, res, next) {
  try {
    const oneGod = await Gods.findOne({ name: req.query.name });
    console.log(oneGod);

    res.status(200).json({
      status: "success",
      data: {
        god: oneGod,
      },
    });
  } catch (err) {
    res.status(404).json({ status: "fail", message: err });
  }
};
