import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        CounterComponent
      ]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create CounterComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    component.ngOnInit();
    const element: HTMLElement = fixture.debugElement.query(By.css('#title')).nativeElement;
    expect(element.innerHTML).toContain('Counter Component');
  });

  it('should start the count control in 0', () => {
    component.ngOnInit();
    expect(component.count.value).toBe(0);
  });

  it('should increment count control when user clicks in increment button', () => {
    component.ngOnInit();
    component.increment();
    expect(component.count.value).toBe(1);
  });

  it('should decrement count control when user clicks in decrement button', () => {
    component.ngOnInit();
    component.count.setValue(10);
    component.decrement();
    expect(component.count.value).toBe(9);
  });

  it('should set count control in 0 when user clicks in decrement button', () => {
    component.ngOnInit();
    component.decrement();
    expect(component.count.value).toBe(0);
  });

  it('should set count control in 100 when user clicks in increment button', () => {
    component.ngOnInit();
    component.count.setValue(100);
    component.increment();
    expect(component.count.value).toBe(100);
  });

  it('should render value of control in input', () => {
    component.ngOnInit();
    const input = fixture.debugElement.query(By.css('#inputCounter')).nativeElement;
    fixture.whenStable().then(() => {
      expect(Number(input.value)).toBe(0);
    });
  });

  it('should render value of control in input when user clicks on increment button', () => {
    component.ngOnInit();
    const input = fixture.debugElement.query(By.css('#inputCounter')).nativeElement;
    component.increment();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(Number(input.value)).toBe(1);
    });
  });
});
