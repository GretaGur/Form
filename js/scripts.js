/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.addEventListener("load", function () {

    if (document.getElementById('text')) {
        document.getElementById('text').onfocus = function () {
            this.style.background = "rgba(255, 179, 179, 0.4)";
        };
        document.getElementById('text').onblur = function () {
            this.style.background = "transparent";
        };
    }
    if (document.getElementById('textarea')) {
        document.getElementById('textarea').onfocus = function () {
            this.style.background = "rgba(255, 179, 179, 0.4)";
        };
        document.getElementById('textarea').onblur = function () {
            this.style.background = "transparent";
        };
        document.getElementById('textarea').oninput = function () {
            this.rows = "4";
            var rows = calculateRows(this);
            setTextareaRows(this, rows);
        };
    }
    if (document.getElementById('formMessage')) {
    document.getElementById("formMessage").addEventListener("submit", function (e) {
        for (var i = 0; i < e.srcElement.length; i++) {
            if (e.srcElement[i].value === "" && e.srcElement[i].type !== "submit") {
                return e.preventDefault();
            }
        }
    });
    }
});

function calculateRows(textA) {
    var padding = 8;
    var lineHeight = 18;
    var intElemScrollHeight = textA.scrollHeight;
    var rows = (intElemScrollHeight - padding) / lineHeight;
    return rows;
}
function setTextareaRows(textA, rows) {
    var minRows = 4;
    var maxRows = 12;

    if (rows <= minRows) {
        textA.rows = minRows;
        textA.style.overflow = "hidden";
    } else if (rows > minRows && rows <= maxRows) {
        textA.rows = rows;
    } else {
        textA.rows = maxRows;
        textA.style.overflow = "auto";
    }
}