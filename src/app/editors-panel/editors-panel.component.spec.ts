import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorsPanelComponent } from './editors-panel.component';

describe('EditorsPanelComponent', () => {
  let component: EditorsPanelComponent;
  let fixture: ComponentFixture<EditorsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorsPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
