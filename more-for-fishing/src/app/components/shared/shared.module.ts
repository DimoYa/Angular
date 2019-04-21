import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        NavigationComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        NavigationComponent,
        FooterComponent,
    ]
})
export class SharedModule { }