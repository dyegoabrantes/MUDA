import { Desafio } from '../../app/_models/desafio';

export class DesafioService{

    url:string = "http://rest.learncode.academy/api/learncode/mudapp";
      
    constructor( ){}

    public desafios: Desafio[] = [
        new Desafio ( 
            1,
            "Torneira fechada",
            "Água é um bem muito precioso, feche a torneira quando for escovar os dentes",
            "Água",
            8,
            1,
            "pendente"),
        new Desafio ( 
            2,
            "Dedo no interruptor",
            "Energia elétrica demanda muitos recursos para ser produzida e distribuída até sua casa. Desligue as luzes quando elas não forem mais necessárias",
            "Energia",
            8,
            1,
            "notyet"),
        new Desafio ( 
            3,
            "Bye Bye Standby!",
            "Os equipamentos elétricos que ficam conectados à tomada, mesmo estando desligados, continuam consumindo energia elétrica. Para evitar um gasto desnecessário, retire os aparelhos elétricos que não estão sendo usados da tomada.",
            "Energia",
            8,
            1,
            "notyet"),
        new Desafio ( 
            4,
            "Só polui",
            "Baterias são objetos muito úteis no nosso dia a dia, mas com o passar do tempo elas acabam se desgastando e precisam ser substituidas. O descarte deste tipo de material, se não for feito adequadamente, pode ocasionar uma perigosa contaminação do local onde foi descartado. Este desafio é especial, descarte uma bateria que não sirva mais no local indicado",
            "Energia",
            20,
            5,
            "notyet",
            '-4.979414',
            '-39.0564111'),
        new Desafio ( 
            5,
            "Clara como o dia",
            "As lâmpadas comuns, incandescentes, gastam muito mais que uma fluorescente ou LED, o gasto pode ser até 75% a mais na conta de energia. A lâmpada LED é a campeã de economia, pensando nisso, você pode substituir uma lâmpada da sua casa por uma LED?",
            "Energia",
            15,
            5,
            "notyet"),
        new Desafio ( 
            6,
            "Cada tipo no seu saco",
            "A coleta seletiva é uma forma de auxiliar no processo de destinação correta dos resíduos produzidos. Separar o nosso lixo é uma maneira de ajudar nesse processo, mesmo que na sua cidade não haja coleta seletiva. Para promover o descarte adequado dos resíduos que você produz, separe durante uma semana o lixo seco do lixo orgânico.",
            "Residuos",
            12,
            7,
            "notyet"),
        new Desafio ( 
            7,
            "Pouca água",
            "A água não é um recurso infinito, além de corrermos o risco de que a água potável se esgote também pagamos por cada litro de água que sai da torneira. Para cumprir esse desafio, feche o chuveiro enquando estiver passando o shampu e o sabonete (ou sempre que não for necessário estar com ele aberto)",
            "Água",
            8,
            1,
            "notyet")
    ];
}