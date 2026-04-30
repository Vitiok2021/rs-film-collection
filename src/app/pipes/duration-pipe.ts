import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number | undefined | null): string {
    if (!value) return '';
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    if (hours && minutes) {
      return `${hours}h ${minutes}min`;
    } else if (hours && minutes === 0) {
      return `${hours}h`;
    } else {
      return `${minutes}min`;
    }
  }
}
