const Skill = require('../models/skills');

module.exports = {
    index,
    show,
    new: newSkill,
    createSkill,
    delete: deleteSkill

};

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function createSkill(req, res) {
    req.body.learned = false;
    Skill.createSkill(req.body);
    res.redirect('/skills');
}

function newSkill(req, res) {
    res.render('skills/new');
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: "Developer Skills"
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
    });
}