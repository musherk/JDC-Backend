const db = require('../config/db.js');

class Teacher {

    constructor(name) {
        this.name = name;
    }

    /**
     * Get all teachers
     * @param {*} result 
     */
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

    /**
     * Delete a teacher
     * @param {*} id 
     * @param {*} result 
     */
    static deleteTeacher(id, result) {
        db.query("DELETE FROM teachers WHERE id = ?", [id], (err, data) => {
            if (err) {
                result(err, null)
            } else {
                result(null, data)
            }
        });
    }


    /**
     * Get a teacher by id
     * @param {*} id 
     * @param {*} result 
     */
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


    /**
     * Save a teacher
     * @param {*} result 
     */
    saveTeacher(result) {
        db.query('INSERT INTO teachers SET ?', [this], (err, data) => {
            if (err) {
                result(err, null)
            } else {
                result(null, data);
            }
        });
    }

    /**
     * Update a teacher
     * @param {*} id 
     * @param {*} teacher 
     * @param {*} result 
     */
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