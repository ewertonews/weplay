import { async, TestBed } from '@angular/core/testing';
import { NovoIntegranteComponent } from './novo-integrante.component';
describe('NovoIntegranteComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NovoIntegranteComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NovoIntegranteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=novo-integrante.component.spec.js.map