import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityComponent } from './community.component';
import { CommunityRoutingModule } from './community-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CommunityRoutingModule
  ],
  declarations: [CommunityComponent]
})
export class CommunityModule { }
