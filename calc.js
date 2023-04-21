function equal(){
    document.getElementById('display').value = eval(display.value);
}
function del(){
    let dele = display.value;
    let res = dele.slice(0,-1);
    document.getElementById('display').value = res;

}
function percent(){
    let per = display.value;
    let rel = per/100;
    document.getElementById('display').value = rel;
}