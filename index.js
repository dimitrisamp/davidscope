$(document).ready(() => {
    let scopea;
    let scopeb;

    $.get('https://dimitrisamp.github.io/davidscope/scripta.js', function( scripta ) {
        {
            eval(scripta);
            scopea = {
                test,
                helloworld
            };

            scopea.test();
            scopea.helloworld("David");
        }
    });
    $.get('https://dimitrisamp.github.io/davidscope/scriptb.js', function( scriptb ) {
        {
            eval(scriptb);
            scopeb = {
                test,
                helloworld
            };

            scopeb.test();
            scopeb.helloworld("Dimitris");
        }
    });
});
