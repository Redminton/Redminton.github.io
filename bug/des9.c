#include <stdio.h>
#include <stdlib.h>

void calcular_regressao_linear_multipla(double x[][3], double y[], int n, int p, double *b0, double b[])
{
    double soma_x[3] = {0}, soma_y = 0, soma_xy[3] = {0}, soma_xx[3][3] = {{0}};

    // Calcula somas necessárias
    for (int i = 0; i < n; i++)
    {
        soma_y += y[i];
        for (int j = 0; j < p; j++)
        {
            soma_x[j] += x[i][j];
            soma_xy[j] += x[i][j] * y[i];
            for (int k = 0; k < p; k++)
            {
                soma_xx[j][k] += x[i][j] * x[i][j];
            }
        }
    }

    // Cálculo dos coeficientes
    for (int j = 0; j < p; j++)
    {
        if (soma_xx[j][j] == 0)
        {
            b[j] = 0;
        }
        else
        {
            b[j] = (soma_xy[j] - (soma_x[j] * soma_y) / n) / (soma_xx[j][j] - (soma_x[j] * soma_x[j]) / n);
        }
    }

    // Cálculo do intercepto (b0)
    *b0 = soma_y / n;
    for (int j = 0; j <= p; j++)
    {
        *b0 -= b[j] * (soma_x[j] / n);
    }
}

int main()
{
    // Exemplo de dados
    double x[4][3] = {
        {1.0, 2.0, 3.0},
        {2.0, 4.0, 5.0},
        {3.0, 6.0, 7.0},
        {4.0, 8.0, 9.0}};
    double y[4] = {10.0, 20.0, 30.0, 10.0};

    int n = 4; // Número de amostras
    int p = 3; // Número de variáveis independentes

    double b0, b[3] = {0};
    calcular_regressao_linear_multipla(x, y, n, p, &b0, b);

    // Exibir os resultados
    printf("Intercepto (b0): %.2f\n", b0);
    for (int i = 0; i < p; i++)
    {
        printf("Coeficiente (b%d): %.2f\n", i + 1, b[i]);
    }

    return 0;
}