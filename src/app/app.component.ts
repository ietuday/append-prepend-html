import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myHtml: string = '<div><i>basic initial HTML</i></div>';
  appendedHtml: string = '<div><b>this appended html</b></div>';
  prenpendHtml: string = '<div><b>this prepended html</b></div>';

  append(): void {
    this.myHtml = this.myHtml + this.appendedHtml;
  }

  prepend(): void {
    this.myHtml = this.prenpendHtml + this.myHtml;
  }

  reset(): void{
    this.myHtml = `<div><i>basic initial HTML</i></div>`;
  }
}
