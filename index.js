$(document).ready(async () => {
    let scopea;
    let scopeb;

    try {
        const scripta = await $.get('https://dimitrisamp.github.io/davidscope/scripta.js')
        const scriptb = await $.get('https://dimitrisamp.github.io/davidscope/scriptb.js')
        {
            eval(scripta);
            scopea = {
                test,
                helloworld
            };
        }
        {
            eval(scriptb);
            scopeb = {
                test,
                helloworld
            };
        }
        scopea.test();
        scopeb.test();
        scopea.helloworld("David");
        scopeb.helloworld("Dimitris");
    } catch {
        alert('something goes wrong with the scripts');
    }
});
