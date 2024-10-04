import java.util.Scanner;

public class validaSequencia {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite os números da sequência separados por espaços:");
        String entrada = scanner.nextLine();
        String[] numerosString = entrada.split(" ");

        int[] numeros = new int[numerosString.length];
        for (int i = 0; i < numerosString.length; i++) {
            numeros[i] = Integer.parseInt(numerosString[i]);
        }

        boolean sequenciaValida = true;

        for (int i = 0; i < numeros.length - 1; i++) {
            if (numeros[i] > numeros[i + 1]) {
                sequenciaValida = false;
                break;
            }
            if (numeros[i] < 1 || numeros[i] > 100) {
                sequenciaValida = false;
                break;
            }
        }

        if (sequenciaValida) {
            System.out.println("Sequência válida");
        } else {
            System.out.println("Sequência inválida");
        }
    }
}