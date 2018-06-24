import { Emblema } from './../../app/_models/emblema';
import { Injectable } from '@angular/core';

@Injectable()
export class EmblemaService{
   constructor( ){}

    public emblemas: Emblema[] = [ 
        new Emblema (
            1,
            'EmblemasMuda',
            1,
            0,
            'Água',
        ),
        new Emblema (
            2,
            'EmblemasMuda',
            1,
            0,
            'Energia',
        ),
        new Emblema (
            3,
            'EmblemasMuda',
            1,
            0,
            'Residuos',
        ),
        new Emblema (
            4,
            'EmblemasMuda',
            1,
            0,
            'Ar',
        )
    ];
}