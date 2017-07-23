import { Component, ViewContainerRef, ComponentFactoryResolver, Input } from '@angular/core';

import { ChildOne } from './child-one.component.ts';
import { ChildTwo } from './child-two.component.ts';

@Component({
    selector: 'my-dynamic-component',
    template: '<div>This is the parent component, MyDynamicComponent</div>'
})
export class MyDynamicComponent {

    private static childrenDictionary = {
        'one': ChildOne,
        'two': ChildTwo
    };

    constructor(
        private container: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver
    ){}

    private _type: string;

    @Input()
    public get type() {
        return this._type;
    }
    public set type(value: string) {
        this._type = value;
        this.selectChild();
    }

    selectChild() {
        this.container.clear();

        let child = MyDynamicComponent.childrenDictionary[this.type];
        if (child) {
            let factory = this.componentFactoryResolver.resolveComponentFactory(child);

            this.container.createComponent(factory);
        }
    }
}
