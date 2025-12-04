function fun1(id,fun2){
    console.log("This is fun1",id);
    fun2({marks:"90"})
}
function fun2(marks){
    console.log("found the marks",marks);
}
fun1(101,fun2);