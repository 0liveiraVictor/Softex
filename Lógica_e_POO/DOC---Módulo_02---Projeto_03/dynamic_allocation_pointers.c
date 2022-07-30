#include <stdio.h>
#include <stdlib.h>  

int main()
{

    int i, *ptr;

    /*sendo int = 4 bytes, vamos alocar inicialmente um tamanho de memória de 5 x 4 bytes, sem limpar os dados anteriores (função malloc)*/
    ptr = (int *) malloc(5 * sizeof(int));
    
    printf("--------------------DADOS DE ALOCAÇÃO DE MEMÓRIA--------------------\n\n");
    
    for (i = 0; i < 5; i++)
    {

        printf("Valor da %d ª posição alocada: ", i+1);
        scanf("%d", (ptr+i));           /*(ptr+i) ou &ptr[i] (estrutura vetorial)*/
        printf("\n");
    
    }
    
    /*realocando mais espaço na memória a fim de gerir um vetor com 22 elementos*/
    ptr = (int *) realloc(ptr, 22 * sizeof(int));          
    
    for (i = 5; i < 22 ; i++)
    {

        printf("Valor da %d ª posição alocada: ", i+1);
        scanf("%d", (ptr+i));
        printf("\n");
    
    }
    
    printf("\n\n--------------------IMPRESSÃO DOS DADOS DE ALOCAÇÃO--------------------\n\n");
    
    for (i = 0; i < 22; i++)
    {
        
        printf("Vetor[%d] = %d\n", i+1, *(ptr+i));
        
    }
    
    /*liberando a memória antes do fim da execução*/
    free(ptr);

    return 0;
    
}