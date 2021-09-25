// Add your functions here
function map(ary,fctn)
{
    const new1 = [];
    for (let i = 0; i < ary.length; i++)
    {
        const emt = ary[i];
        new1.push(fctn(emt));
    }
    return new1;
}

function reduce(ary, fctn, init)
{
    let compiled;
    if (init)
    {
        compiled = init;
        for (let i = 0; i < ary.length; i++)
        {
            compiled = fctn(ary[i],compiled);
        }
        return compiled;
    }
    else
    {
        compiled = ary[0];
        for (let i = 1; i < ary.length; i++)
        {
            compiled = fctn(ary[i],compiled);
        }
        return compiled;
    }
}