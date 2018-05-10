import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
    selector:"[modelSelect]"
})
export class ModelSelectDirective implements AfterViewInit {

    constructor(private _elementRef : ElementRef){

    }

    ngAfterViewInit(): void {
        this._elementRef.nativeElement.style.marginTop = '10px';
    }	

}