// 12MHzʱʵ�ֺ��뼶�ӳٵ�д��
void delay(unsigned int ms)
{
    unsigned int i, j;
    for (i = ms; i > 0; i--)
        for (j = 123; j > 0; j--) ;
}