import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
name: 'isOpen'
})
export class IsOpenPipe implements PipeTransform{
	transform(status: boolean){
		return((status != true) ? 'Open Now' : 'Closed');
	}
}
