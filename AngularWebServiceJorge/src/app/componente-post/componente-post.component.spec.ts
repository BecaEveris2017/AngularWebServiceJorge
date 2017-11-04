import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePostComponent } from './componente-post.component';

describe('ComponentePostComponent', () => {
  let component: ComponentePostComponent;
  let fixture: ComponentFixture<ComponentePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
