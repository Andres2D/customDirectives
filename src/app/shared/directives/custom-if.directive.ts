import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  @Input() set customIf(condiction: boolean){
    condiction ? this.viewContainer.createEmbeddedView(this.templateRef) : this.viewContainer.clear();
  }

  constructor( private templateRef: TemplateRef<HTMLElement>,
     private viewContainer: ViewContainerRef ) {}



}
