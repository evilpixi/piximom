console.log("pixi")

function create_quote()
{
    let q = document.getElementById("quote")
    console.log(q)
    let txt = document.getElementById("input_textarea")
    console.log(txt)
    q.innerHTML = txt.value
}