module.exports = (app) => {

    /** Teacher */
    const teachers = require('./controllers/teacherController.js');

    app.get('/api/teachers', teachers.getTeachers);
    app.get('/api/teachers/:id', teachers.getTeacher);
    app.post('/api/teachers', teachers.saveTeacher);;
    app.delete('/api/teachers/:id', teachers.deleteTeacher);
    app.put('/api/teachers/:id', teachers.updateTeacher);

    /**Lesson */
    const lessons = require('./controllers/lessonController.js');

    app.get('/api/lessons', lessons.getLessons);
    app.get('/api/lessons/:id', lessons.getLesson);
    app.post('/api/lessons', lessons.saveLesson);;
    app.delete('/api/lessons/:id', lessons.deleteLesson);
    app.put('/api/lessons/:id', lessons.updateLesson);


    /**Sheet */
    const sheets = require('./controllers/sheetController.js');

    app.get('/api/sheets', sheets.getSheets);
    app.get('/api/sheets/:id', sheets.getSheet);
    app.get('/api/sheets/lesson/:lesson', sheets.getSheetsByLesson)
    app.post('/api/sheets', sheets.saveSheet);;
    app.delete('/api/sheets/:id', sheets.deleteSheet);
    app.put('/api/sheets/:id', sheets.updateSheet);

}