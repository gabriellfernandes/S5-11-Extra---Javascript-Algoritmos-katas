function calculateSalary(x, b){
    let comissao = 0
    let vendas = 0
    let saldoTotal = 0
    if(b <= 1200){
        comissao = (b / 100) * 3
    }else{
        comissao += (1200 / 100) * 3
        vendas = b - 1200
        vendas = (vendas / 100) * 5 
        comissao += vendas
    }
    saldoTotal = x += comissao
    
    let final = `Ele vai receber o seu salario + comissão é ${saldoTotal} R$ e a comissão é de ${comissao} R$`
    
    
    //teste para ver o resultado
    console.log(final)
    console.log("=============================")
    
   return saldoTotal
}

function cashMachine(valorDoSaque,salarioFixo, vendas){
    let notas = [0,0,0,0,0,0,0,0]

    let saque = valorDoSaque
    let texto = ""

    
    let restanteSalario = calculateSalary(salarioFixo, vendas)
    
    restanteSalario -= valorDoSaque
    

    while(saque > 0){
        if(saque >= 200){
            notas[0] += 1
            saque -= 200
        }else if(saque >= 100){
            notas[1] += 1
            saque -= 100
        }else if(saque >= 50){
            notas[2] += 1
            saque -= 50
        }else if(saque >= 20){
            notas[3] += 1
            saque -= 20
        }else if(saque >= 10){
            notas[4] += 1
            saque -= 10
        }else if(saque >= 5){
            notas[5] += 1
            saque -= 5
        }
        else if(saque >= 2){
            notas[6] += 1
            saque -= 2
        }else if(saque >= 1){
            notas[7] += 1
            saque -= 1
        }
    }


    for(let i = 0;i< notas.length; i++){
        if(notas[0] >= 1){
            texto += notas[0] 
            if(notas[0] == 1){
                texto += " nota de 200 R$, " 
            }else{
                texto += " notas de 200 R$, " 
            }   
            notas[0] -= notas [0]   
        }else if(notas[1] >= 1){
            texto += notas[1] 
            if(notas[1] == 1){
                texto += " nota de 100 R$, " 
            }else{
                texto += " notas de 100 R$, " 
            }
                
            notas[1] -= notas [1] 
        }else if(notas[2] >= 1){
            texto += notas[2] 
            if(notas[2] == 1){
                texto += " nota de 50 R$, " 
            }else{
                texto += " notas de 50 R$, " 
            }
                
            notas[2] -= notas [2] 
        }else if(notas[3] >= 1){
            texto += notas[3] 
            if(notas[3] == 1){
                texto += " nota de 20 R$, " 
            }else{
                texto += " notas de 20 R$, " 
            }
                
            notas[3] -= notas [3] 
        }else if(notas[4] >= 1){
            texto += notas[4] 
            if(notas[4] == 1){
                texto += " nota de 10 R$, " 
            }else{
                texto += " notas de 10 R$, " 
            }
                
            notas[4] -= notas [4] 
        }
        else if(notas[5] >= 1){
            texto += notas[5] 
            if(notas[5] == 1){
                texto += " nota de 5 R$, " 
            }else{
                texto += " notas de 5 R$, " 
            }
                
            notas[5] -= notas [5] 
        }else if(notas[6] >= 1){
            texto += notas[6] 
            if(notas[6] == 1){
                texto += " nota de 2 R$, " 
            }else{
                texto += " notas de 2 R$, " 
            }
                
            notas[6] -= notas [6] 
        }else if(notas[7] >= 1){
            texto += notas[7] 
            if(notas[7] == 1){
                texto += " meoda de 1 R$, " 
            }else{
                texto += " moeda de 1 R$, " 
            }
                
            notas[7] -= notas [7] 
        }
    }
    
    
    
    let resultadu = `Você sacou ${valorDoSaque} R$ e veio as seguintes notas: ${texto}e sobrou na sua conta ${restanteSalario} R$.`
    
    //teste para ver o resultado
    console.log(resultadu)
    console.log("=============================")
    
    return resultadu
}



let test = 1521
let teste2 = "Você sacou 789 R$ e veio as seguintes notas: 3 notas de 200 R$, 1 nota de 100 R$, 1 nota de 50 R$, 1 nota de 20 R$, 1 nota de 10 R$, 1 nota de 5 R$, 2 notas de 2 R$, e sobrou na sua conta 732 R$."

if(test == calculateSalary(1500,700)){
    console.log("Tá certo :3 test  do  calculateSalary")
    console.log("=============================")
}else{
    console.log("Tá errado :3 test do calculateSalary")
    console.log("=============================")
}
if(teste2 == cashMachine(789,1500,700)){
    console.log("Tá certo :3 test  do cashMachine")
    console.log("=============================")
}else{
    console.log("Tá errado :3 test do cashMachine")
    console.log("=============================")
}






function calculateStock(atual,maximo,minimo){
    let texto = ""
    let quantidadeMedia = (maximo + minimo) / 2
    if(atual >= quantidadeMedia){
       texto += "Não efetuar compra"
    }else{
        texto += "Efetuar compra"
    }

    //teste
    console.log(texto)
    console.log("============================")


    return texto
}


let testeCalculateStock = "Efetuar compra"

if(testeCalculateStock == calculateStock(900,1700,300)){
    console.log("Tá certo :3 Teste calculateStock")
    console.log("============================")
}else{
    console.log("Tá errado :3 Teste calculateStock")
    console.log("============================")
} 


function calculateAge(nacimento, anoAtual){
    let anos = anoAtual - nacimento
    let mes = anos * 12
    let semana = mes * 4
    let dias = semana * 7
    let texto =  `Voce tem ${anos} de idade,\nIdade em meses você tem ${mes} meses de vida,\nIdade em semanas voce tem ${semana} semanas de vida,\nIdade em dias voce tem ${dias} dias de vida` 

    console.log(texto)
    console.log("=============================")
    return texto
}

calculateAge(2002,2022)

//esse nao fiz o teste pois nao sabia como fazer :3 o test


function getDiagonal(array){
    let soDiagonal = []
    
    for (let i = 0; i < array.length; i++) {
        soDiagonal.push(array[i][i])
    }
    
    console.log(soDiagonal)
    console.log("==========================================")
    return soDiagonal
}

let matrizQuadrada3x3 = [ [1, 2, 3] , [4, 5, 6] , [7, 8, 9] ]





if(getDiagonal(matrizQuadrada3x3).join(", ") == "1, 5, 9"){
    console.log("Ta certo! Teste getDiagonal")
}else{
    console.log("Ta errado! teste getDiagonal")
}