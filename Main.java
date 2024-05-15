//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner objekt = new Scanner(System.in);
        System.out.println("Sisesta korrutustabeli suurus: ");
        int korrutustabeli_suurus = objekt.nextInt();
        String rida_2[][] = new String[korrutustabeli_suurus][korrutustabeli_suurus];
        for (int i = 0; i < korrutustabeli_suurus; i++) {
            for (int j = 0; j < korrutustabeli_suurus; j++) {
                String product = Integer.toString((i + 1) * (j + 1));
                int squareLength = Integer.toString(korrutustabeli_suurus * korrutustabeli_suurus).length();
                while (product.length() < squareLength) {
                    product += " ";
                }
                rida_2[i][j] = product;
            }
        }
        for (String[] rida : rida_2) {
            System.out.println(Arrays.toString(rida));
        }
    }
}


