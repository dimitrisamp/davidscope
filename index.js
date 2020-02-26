const scriptA = `
function test()
{
    alert("scopeatest");
}
function helloworld(name)
{
    alert("hello "+name);
}`;

const scriptB = `
function test()
{
    alert("scopebtest");
}
function helloworld(name)
{
    alert("holla "+name);
}`;

let scopea;
{
    eval(scriptA);
    scopea = {
        test,
        helloworld
    };
}

let scopeb;
{
    eval(scriptB);
    scopeb = {
        test,
        helloworld
    };
}

scopea.test();
scopeb.test();
scopea.helloworld("David");
scopeb.helloworld("Dimitris");

$.ajax({
    url: 'https://dimitrisamp.github.io/davidscope/scripta.js',
    type: 'json'
}).done(function (res) {
    console.log(res)
})
