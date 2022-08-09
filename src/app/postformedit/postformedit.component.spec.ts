import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostformeditComponent } from './postformedit.component';

describe('PostformeditComponent', () => {
  let component: PostformeditComponent;
  let fixture: ComponentFixture<PostformeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostformeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostformeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
