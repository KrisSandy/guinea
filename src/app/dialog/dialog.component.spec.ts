import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../models/dialogdata.model';
import { MatButtonModule } from '@angular/material/button';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  const dialogData: DialogData = {
    content: 'Test content',
    button1Text: 'OK',
    button2Text: 'CANCEL'
  }
  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatButtonModule, MatDialogModule ],
      declarations: [ DialogComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: dialogData },
        { provide: MatDialogRef, useValue: mockDialogRef }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should diaplsy title', () => {
    expect(document.getElementById('dialog-content').innerHTML).toContain('Test content')
  });

  it('should emit button1 event', () => {
    const elm = spyOn(component.onButton1Click, 'emit');
    document.getElementById('dialog-button1').dispatchEvent(new Event('click'))
    expect(component.onButton1Click.emit).toHaveBeenCalled();
    expect(mockDialogRef.close).toHaveBeenCalled()
  })
});
