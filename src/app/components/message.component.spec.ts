import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MessageComponent } from './message.component';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MessageComponent
      ]
    });
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create MessageComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render message in h3 tag', () => {
    component.message = 'Test Message...';
    fixture.detectChanges();
    const element: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(element.innerHTML).toContain('Test Message...');
  });
});
