const db = require('../config/db.js');

class Sheet {

    constructor(local_number, description, lesson_id) {
        this.local_number = local_number;
        this.description = description;
        this.lesson_id = lesson_id;
    }

    static getSheets(result) {
        db.query(
            'SELECT * FROM sheets', (err, data) => {
                if (err) {
                    result(err, null)
                } else {
                    result(null, data);
                }
            }
        );
    }

    static getSheetByLesson(lesson_id, result) {
        db.query(
            'SELECT * FROM sheets WHERE lesson_id = ?', [lesson_id], (err, data) => {
                if (err) {
                    result(err, null)
                } else {
                    result(null, data);
                }
            }
        );
    }

    static deleteSheet(id, result) {
        db.query("DELETE FROM sheets WHERE id = ?", [id], (err, data) => {
            if (err) {
                result(err, null)
            } else {
                result(null, data)
            }
        });
    }


    static getSheetById(id, result) {
        db.query(
            'SELECT * FROM sheets WHERE id = ?', [id], (err, data) => {
                if (err) {
                    result(err, null);
                } else {
                    result(null, data[0]);
                }
            }
        );
    }


    saveSheet(result) {
        db.query('INSERT INTO sheets SET ?', [this], (err, data) => {
            if (err) {
                result(err, null)
            } else {
                result(null, data);
            }
        });
    }

    static updateSheet(id, lesson, result) {
        db.query("UPDATE sheets SET ? WHERE id = ?", [lesson, id], (err, data) => {
            if (err) {
                result(err, null)
            } else {
                result(null, data);
            }
        });
    }
}

module.exports = Sheet;