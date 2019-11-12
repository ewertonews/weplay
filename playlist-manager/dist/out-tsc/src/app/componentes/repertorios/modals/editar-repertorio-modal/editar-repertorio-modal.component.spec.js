import { async, TestBed } from '@angular/core/testing';
import { EditarRepertorioModalComponent } from './editar-repertorio-modal.component';
describe('EditarRepertorioModalComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EditarRepertorioModalComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EditarRepertorioModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=editar-repertorio-modal.component.spec.js.map