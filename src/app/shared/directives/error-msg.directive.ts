import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red';
  private _message: string = 'This field is required';

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(value: string) {
    this.SetColor();
    this._color = value;
  }

  @Input() set message(value: string){
    this.SetMessage();
    this._message = value;
  }
  
  @Input() set valid(value: boolean){
    value ? this.htmlElement.nativeElement.classList.add('hidden') : this.htmlElement.nativeElement.classList.remove('hidden');
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void{

    /*if(changes.message){
      const message = changes.message.currentValue;
      this.htmlElement.nativeElement.innerText = message;
    }
    
    if( changes.color){
      const color = changes.color.currentValue;
      this.htmlElement.nativeElement.style.color = color;
    }
  
    console.log(changes);*/
  }

  ngOnInit(){
    this.SetStyle();
    this.SetColor();
    this.SetMessage();
  }

  SetStyle(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  SetColor():void{
    this.htmlElement.nativeElement.style.color = this._color;
  }

  SetMessage():void {
    this.htmlElement.nativeElement.innerText = this._message;
  }

}
