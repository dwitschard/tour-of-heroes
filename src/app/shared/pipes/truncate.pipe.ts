import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'truncate',
    standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(
    value: string,
    maxLength: number = 20,
    suffix: string = ''
  ): string {
    return value.length > maxLength
      ? value.substring(0, maxLength) + suffix
      : value
  }
}
