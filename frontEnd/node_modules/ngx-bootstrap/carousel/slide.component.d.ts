import { OnDestroy, OnInit } from '@angular/core';
import { CarouselComponent } from './carousel.component';
import * as ɵngcc0 from '@angular/core';
export declare class SlideComponent implements OnInit, OnDestroy {
    /** Is current slide active */
    active: boolean;
    itemWidth: string;
    order: number;
    isAnimated: boolean;
    /** Wraps element by appropriate CSS classes */
    addClass: boolean;
    /** Link to Parent(container-collection) component */
    protected carousel: CarouselComponent;
    constructor(carousel: CarouselComponent);
    /** Fires changes in container collection after adding a new slide instance */
    ngOnInit(): void;
    /** Fires changes in container collection after removing of this slide instance */
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SlideComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SlideComponent, "slide", never, {
    "active": "active";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInNsaWRlLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhcm91c2VsQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJvdXNlbC5jb21wb25lbnQnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2xpZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgLyoqIElzIGN1cnJlbnQgc2xpZGUgYWN0aXZlICovXG4gICAgYWN0aXZlOiBib29sZWFuO1xuICAgIGl0ZW1XaWR0aDogc3RyaW5nO1xuICAgIG9yZGVyOiBudW1iZXI7XG4gICAgaXNBbmltYXRlZDogYm9vbGVhbjtcbiAgICAvKiogV3JhcHMgZWxlbWVudCBieSBhcHByb3ByaWF0ZSBDU1MgY2xhc3NlcyAqL1xuICAgIGFkZENsYXNzOiBib29sZWFuO1xuICAgIC8qKiBMaW5rIHRvIFBhcmVudChjb250YWluZXItY29sbGVjdGlvbikgY29tcG9uZW50ICovXG4gICAgcHJvdGVjdGVkIGNhcm91c2VsOiBDYXJvdXNlbENvbXBvbmVudDtcbiAgICBjb25zdHJ1Y3RvcihjYXJvdXNlbDogQ2Fyb3VzZWxDb21wb25lbnQpO1xuICAgIC8qKiBGaXJlcyBjaGFuZ2VzIGluIGNvbnRhaW5lciBjb2xsZWN0aW9uIGFmdGVyIGFkZGluZyBhIG5ldyBzbGlkZSBpbnN0YW5jZSAqL1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgLyoqIEZpcmVzIGNoYW5nZXMgaW4gY29udGFpbmVyIGNvbGxlY3Rpb24gYWZ0ZXIgcmVtb3Zpbmcgb2YgdGhpcyBzbGlkZSBpbnN0YW5jZSAqL1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=