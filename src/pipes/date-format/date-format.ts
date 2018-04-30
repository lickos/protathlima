import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "dateFormat"
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string, ...args) {
    let date = new Date(value);
    return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  }
}
