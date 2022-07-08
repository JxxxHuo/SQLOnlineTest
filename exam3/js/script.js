/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
var visitor = "0";

function initFingerprintJS() {
    var visitorId = "0";
    FingerprintJS.load().then(fp => {
        // The FingerprintJS agent is ready.
        // Get a visitor identifier when you'd like to.
        fp.get().then(result => {
            // This is the visitor identifier:
            visitorId = result.visitorId;
            visitor = visitorId;
            console.log(visitorId);
        });
    });

}

escape = function (str) {
    // TODO: escape %x75 4HEXDIG ?? chars
    return str
            .replace(/[\"]/g, '\\"')
            .replace(/[\\]/g, '\\\\')
            .replace(/[\/]/g, '\\/')
            .replace(/[\b]/g, '\\b')
            .replace(/[\f]/g, '\\f')
            .replace(/[\n]/g, '\\n')
            .replace(/[\r]/g, '\\r')
            .replace(/[\t]/g, '\\t')
            ;
};

function submitbutton() {

    var visitorID = visitor;

    var sname = document.getElementById("stuname").value;
    var sID = document.getElementById("stuID").value;
    var nodes = document.querySelectorAll('.qform');
    //var nodes=document.getElementsByClassName('uk-table');
    var s = "{";
    for (let i = 0; i < nodes.length; i++)
    {
        var node = nodes[i].querySelector('div table.uk-table');
        if (node !== null) {
            var tinn = node.innerText;
            var tinn2 = escape(tinn);

            s = s + '"q' + (i + 1).toString() + '":"' + tinn2 + '"';
        } else {

            s = s + '"q' + (i + 1).toString() + '":' + '""';
        }
        if (i < (nodes.length - 1))
        {
            s = s + ',';
        }
    }
    s = s + "}";
    var js = JSON.parse(s);
    
    $.post("/request",
            {
                name: sname,
                stuID: sID,
                finger: visitorID,
                questions: js
            },
            function (data) {
                if (data == 'yes')
                    window.location.replace("http://localhost:8080/success.html");
                console.log('submitted');
            });

    //window.print();
}

