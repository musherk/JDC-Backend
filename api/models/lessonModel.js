const db = require('../config/db.js');

class Lesson {

    constructor(name, teacher_id) {
        this.name = name;
        this.teacher_id = teacher_id;
    }

    static getLessons(result) {
        db.query(
            'SELECT * FROM lessons', (err, data) => {
                if (err) {
                    result(err, null)
                } else {
                    result(null, data);
                }
            }
        );
    }

    static deleteLesson(id, result) {
        db.query("DELETE FROM lessons WHERE id = ?", [id], (err, data) => {
            if (err) {
                result(err, null)
            } else {
                result(null, data)
            }
        });
    }

    static getLessonByName(name, result) {
        db.query(
            'SELECT * FROM lessons WHERE name = ?', [name], (err, data) => {
                if (err) {
                    result(err, null);
                } else {
                    result(null, data[0]);
                }
            }
        );
    }


    static getLessonById(id, result) {
        db.query(
            'SELECT * FROM lessons WHERE id = ?', [id], (err, data) => {
                if (err) {
                    result(err, null);
                } else {
                    result(null, data[0]);
                }
            }
        );
    }


    saveLesson(result) {
        db.query('INSERT INTO lessons SET ?', [this], (err, data) => {
            if (err) {
                result(err, null)
            } else {
                result(null, data);
            }
        });
    }

    static updateLesson(id, lesson, result) {
        db.query("UPDATE lessons SET ? WHERE id = ?", [lesson, id], (err, data) => {
            if (err) {
                result(err, null)
            } else {
                result(null, data);
            }
        });
    }
}

module.exports = Lesson;