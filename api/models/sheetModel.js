const db = require('../config/db.js');

class Sheet {

    constructor(local_number, description, lesson_id, teacher_id) {
        this.local_number = local_number;
        this.description = description;
        this.lesson_id = lesson_id;
        this.teacher_id = teacher_id;
    }

    /**
     * Récupérer toutes les fiches
     * @param {*} result 
     */
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

    /**
     * Récupérer les fiches à l'aide de l'identifiant du cours
     * @param {*} lesson_id 
     * @param {*} result 
     */
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

    /**
     * Supprimer une fiche
     * @param {*} id 
     * @param {*} result 
     */
    static deleteSheet(id, result) {
        db.query("DELETE FROM sheets WHERE id = ?", [id], (err, data) => {
            if (err) {
                result(err, null)
            } else {
                result(null, data)
            }
        });
    }


    /**
     * Récupérer une fiche à l'aide de son identifiant
     * @param {*} id 
     * @param {*} result 
     */
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


    /**
     * Sauvegarder une fiche
     * @param {*} result 
     */
    saveSheet(result) {
        db.query('INSERT INTO sheets SET ?', [this], (err, data) => {
            if (err) {
                result(err, null)
            } else {
                result(null, data);
            }
        });
    }

    /**
     * Modifier une fiche
     * @param {*} id 
     * @param {*} lesson 
     * @param {*} result 
     */
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