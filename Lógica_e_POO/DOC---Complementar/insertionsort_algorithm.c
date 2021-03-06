/*________________________________________________________________________________________________________________________________________
  INSERTION SORT CODE IN C (ascending sort vector with 30 odd integer elements)
  ________________________________________________________________________________________________________________________________________
*/

#include <stdio.h>

/*___DEFINIÇÃO DO MÉTODO INSERTION SORT___*/

void insertionSort(int total, int array[])
{
    int i, j, ArrayAUX;
    
    for(i = 1; i < total; i++)
    {
        j = i;
        
        while(j > 0 && array[j] < array[j-1])
        {
            ArrayAUX = array[j];
            array[j] = array[j-1];
            array[j-1] = ArrayAUX;
            
            j = j-1;
        }
    }
}

/*___DEFINIÇÃO DA FUNÇÃO MAIN___*/

int main()
{
    int k, n = 30;
    int vect[] = {31, 5, 29, 11, 5, 45, 23, 9, 37, 33, 15, 47, 57, 37, 29, 15, 25, 43, 45, 33, 9, 41, 17, 21, 13, 7, 29, 27, 1, 3};			
    																				   	/*___VETOR COM 30 ELEMENTOS (ÍMPARES)___*/
    printf("___VETOR PRINCIPAL___\n\n");
    
    for(k = 0; k < n; k++)
    {
        printf("vetor[%d] = %d\n", k, vect[k]);
    }
    
    printf("\n\n\n");
    
    /*___CHAMADA DO MÉTODO INSERTION SORT NA FUNÇÃO MAIN___*/
    
    insertionSort(n, vect);
    
    printf("___VETOR ORDENADO VIA MÉTODO INSERTION SORT___\n\n");
    
    for(k = 0; k < n; k++)
    {
        printf("vetor[%d] = %d\n", k, vect[k]);
    }

    return 0;
}
/*________________________________________________________________________________________________________________________________________
*/