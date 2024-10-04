package bugcup2024;

import java.util.Scanner;

public class desafio02 {
    public static void main(String[] args){
        /*
        O programa recebe por teclado o saldo de uma aplicação bancária e um índice de rendimento mensal, 
        após o mesmo deve calcular e informar quanto será o novo saldo após 1 ano de aplicação.
        */
        double saldoInicial, indiceReajuste, valorAPos1Ano;
        Scanner leitor = new Scanner(System.in);
        System.out.println("Digite o valor do saldo à ser aplicado: ");
        saldoInicial = leitor.nextInt();
        System.out.println("Digite o valor do índice de rajuste mensal a ser aplicado (ex: 0,025) : ");
        indiceReajuste = leitor.nextDouble();
        valorAPos1Ano = (saldoInicial /100) + (indiceReajuste * 12);
        valorAPos1Ano = valorAPos1Ano * 100;
        System.out.println("Valor apos 1 ano de aplicacao:  " +  valorAPos1Ano);
    }
}