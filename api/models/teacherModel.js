const db = require('../config/db.js');

class Teacher {

    constructor(name) {
        this.name = name;
    }

    static getTeachers(result) {
        db.query(
            'SELECT * FROM teachers', (err, data) => {
                if (err) {
                    result(err, null)
                } else {
                    result(null, data);
                }
            }
        );
    }

    static deleteTeacher(id, result) {
        db.query("DELETE FROM teachers WHERE id = ?", [id], (err, data) => {
            if (err) {
                result(err, null)
            } else {
                result(null, data)
            }
        });
    }


    static getTeacherById(id, result) {
        db.query(
            'SELECT * FROM teachers WHERE id = ?', [id], (err, data) => {
                if (err) {
                    result(err, null);
                } else {
                    result(null, data[0]);
                }
            }
        );
    }


    saveTeacher(result) {
        db.query('INSERT INTO teachers SET ?', [this], (err, data) => {
            if (err) {
                result(err, null)
            } else {
                result(null, data);
            }
        });
    }

    static updateTeacher(id, teacher, result) {
        db.query("UPDATE teachers SET ? WHERE id = ?", [teacher, id], (err, data) => {
            if (err) {
                result(err, null)
            } else {
                result(null, data);
            }
        });
    }
}

module.exports = Teacher;