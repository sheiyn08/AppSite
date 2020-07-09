import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({

    name: 'convertoToSpaces'
})

export class ConvertToSpacePipes implements PipeTransform {

    transform (value: string, character:string): string {
        return value.replace(character, ' ');
    }
 }
