const Skill = require("../models/skill");

module.exports = {
  index,
  show,
  new: newSkill
};

function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getAll(),
  });
}
function newSkill(req, res) {
  res.render('skills/new');
}
function show(req, res) {
  res.render("skills/show", {
    skill: Skill.getOne(req.params.id),
    skillNum: req.params.id,
  });
}
