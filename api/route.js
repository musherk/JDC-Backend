module.exports = function(app) {

    const teachers = require('./controllers/teacherController.js');

    app.get('/api/teachers', teachers.getTeachers);
    app.get('/api/teachers/:id', teachers.getTeacher);
    app.post('/api/teachers', teachers.saveTeacher);;
    app.delete('/api/teachers/:id', teachers.deleteTeacher);
    app.put('/api/teachers/:id', teachers.updateTeacher);

}