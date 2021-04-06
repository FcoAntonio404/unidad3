
function muestra(sValor, oTbl, oElemento){
    var nTabla=0, i=0;
    var oLinea;
    var oCeldaOpe, oCeldaRes;
    var oCtrl;
        if (isNaN(sValor))
            alert("Debes elegir una tabla de multiplicar");
        else{
            nTabla = parseInt(sValor, 10);
            if (oElemento != null){
                oElemento.style.visibility = "visible";

                if (oTbl != null){

                    if (oTbl.rows.length>1){
                        for (i=1; i<=10; i++)
                            oTbl.deleteRow(-1);
                    }


                    for (i=1; i<=10; i++){
                        oLinea = oTbl.insertRow(-1);
                        oCeldaOpe = oLinea.insertCell(0);
                        oCeldaRes = oLinea.insertCell(1);

                        oCeldaOpe.innerHTML = nTabla + " * " + i;

                        oCtrl = document.createElement("input");
                        oCtrl.type="text";
                        oCtrl.id = "txtResultado"+i;

                        oCeldaRes.appendChild(oCtrl);
                    }
                }
            }
        }
    }


    function califica(sValor, oTbl){
    var nTabla=0, i=0, nCapturado=0, nCalif=0;
    var sValorCapturado="", sErr="";
        if (isNaN(sValor))
            sErr = "Debes elegir una tabla de multiplicar";
        else{
            nTabla = parseInt(sValor, 10);


            if (oTbl.rows.length>1){
                for (i=1; i<=10; i++){
                    sValorCapturado = document.getElementById("txtResultado"+i).value;
                    if (isNaN(sValorCapturado))
                        sErr = sErr + "Error de captura en el resultado "+i + "\n";
                    else{
                        nCapturado = parseInt(sValorCapturado,10);
                        celda = document.getElementById("txtResultado"+i);
                        if (nCapturado == (nTabla*i)){
                            nCalif++;
                            celda.style.backgroundColor="green";
                        }
                        else
                            celda.style.backgroundColor="red";
                    }
                }
            }
        }
        if (sErr == "")
            alert("Calif = "+nCalif);
        else
            alert(sErr);
    }
