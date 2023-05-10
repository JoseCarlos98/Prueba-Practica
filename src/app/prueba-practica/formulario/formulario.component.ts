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

  valorForm = this.fb.group({
    valor: new FormControl({value: '', disabled: false}, Validators.required),
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {}

  realizarSolicitud(){
    if (this.valorForm.get('valor')!.value) this.result.emit(this.valorForm.get('valor')!.value);
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.unsubscribe();
  }
}