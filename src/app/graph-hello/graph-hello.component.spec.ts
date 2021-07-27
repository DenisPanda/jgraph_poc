import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphHelloComponent } from './graph-hello.component';

describe('GraphHelloComponent', () => {
  let component: GraphHelloComponent;
  let fixture: ComponentFixture<GraphHelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphHelloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
