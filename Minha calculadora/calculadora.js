<!DOCTYPE html>
<html>
<head>
    <title> Calculadora</title>
</head>
<body>

    <form>
        <table border"0">
            <tr>
             <th colspan="5">   <th> Calculadora </th>
            </tr>
            <tr>
            </tr>
                <td> val1 <input type="text" name="val1"id='val1'></td>
                <td>
                
                    <select name"sinal" id="sinal">
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </select>
                
                </td>
                 <td> val2 <input type="text" name="val2"id='val2'></td>
                 <td> <input type="button" value="=" onclick="Calcular();" name=""></td>
                 <td><input type="text" name="result"id='result'></td>
            </tr>
        </table>
    </form>
<script type="text/javascript"></script>

funcion calcular(){
    let val1   = parseInt(document.getElementById("val1").value);
    let val2   = parseInt(document.getElementById("val2").value);
    let sinal  = document.getElementById("sinal").value);
    let result = document.getElementById("result");

    if(sinal == "+") result.value = val1 + val2;
    if(sinal == "-") result.value = val1 - val2;
    if(sinal == "*") result.value = val1 * val2;
    if(sinal == "/") result.value = val1 / val2;

    //console.log(val1);
}

</script>

</body>
</html>