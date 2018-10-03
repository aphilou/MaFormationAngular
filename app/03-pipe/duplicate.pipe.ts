import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({ name: 'duplicate' })
export class DuplicatePipe implements PipeTransform {
    transform<T>(value: T[], size: number): string {
        return new Array(size).fill(value).join(" ");
    }
}