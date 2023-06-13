import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from '../user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormComponentComponent } from './user-form-component/user-form-component.component';


@NgModule({
  declarations: [ 
    UserFormComponent, UserFormComponentComponent,
   ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    UserFormComponent
  ]
})
export class ViewsModule {  }
