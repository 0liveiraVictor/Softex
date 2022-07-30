#include <stdio.h>

/*___DEFINIÇÃO DO MÉTODO BUBBLE SORT___*/

void bubbleSort(int total, int Array[])
{
    int i, j, ArrayAUX;
    
    for(i = 0; i < total; i++)
    {
        for(j = 0; j < total-1-i; j++)
        {
            if(Array[j] > Array[j+1])			/*___ORDENAÇÃO CRESCENTE___*/
            {
                ArrayAUX = Array[j];
                Array[j] = Array[j+1];
                Array[j+1] = ArrayAUX;
            }
        }
    }
}

/*___DEFINIÇÃO DA FUNÇÃO MAIN___*/

int main()
{
    int k, n = 10;
    int vect[] = {2, 1, 10, 5, 8, 3, 7, 9, 4, 6};			/*___TAMANHO DO VETOR IGUAL A DEZ___*/
    
    printf("___VETOR PRINCIPAL___\n\n");
    
    for(k = 0; k < n; k++)
    {
        printf("vetor[%d] = %d\n", k, vect[k]);
    }
    
    printf("\n\n\n");
    
    /*___CHAMADA DO MÉTODO BUBBLE SORT NA FUNÇÃO MAIN___*/
    
    bubbleSort(n, vect);
    
    printf("___VETOR ORDENADO VIA MÉTODO BUBBLE SORT___\n\n");
    
    for(k = 0; k < n; k++)
    {
        printf("vetor[%d] = %d\n", k, vect[k]);
    }
    
    return 0;
}