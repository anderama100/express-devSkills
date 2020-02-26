const developerSkills = [
    { skill: 'Patience', status: false },
    { skill: 'HTML', status: true },
    { skill: 'NodeJS', status: false },
    { skill: 'MongoDB', status: false },

];

function getAll() {
    return developerSkills;
}

function getOne(id) {
    return developerSkills[id];
}

function createSkill(skill) {
    developerSkills.push(skill)
}

function deleteOne(id) {
    developerSkills.splice(id, 1);
}

module.exports = {
    getAll,
    getOne,
    createSkill,
    deleteOne
};