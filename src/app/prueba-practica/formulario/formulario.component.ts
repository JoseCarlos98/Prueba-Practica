import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit, OnDestroy {
  onDestroy = new Subject<void>();
  @Output() result = new EventEmitter();

  valueForm = this.fb.group({
    value: new FormControl({value: '', disabled: false}, Validators.required),
  });

  nesimoPrimo = 0;
  nesimoMultiplo  = 0;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {}

  performRequestCompany(){
    this.result.emit(this.valueForm.get('value')!.value)
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.unsubscribe();
  }
}