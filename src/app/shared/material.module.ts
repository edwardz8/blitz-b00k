import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatChipsModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule,
} from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatChipsModule,
        MatTabsModule,
        MatExpansionModule,
        MatListModule,
        MatFormFieldModule,
        MatDialogModule,
        MatSelectModule,
        MatInputModule
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatExpansionModule,
        MatTabsModule,
        MatListModule,
        MatFormFieldModule,
        MatChipsModule,
        MatDialogModule,
        MatSelectModule,
        MatInputModule
    ]
})
export class MaterialModule { }
