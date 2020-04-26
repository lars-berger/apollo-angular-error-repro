import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { ApolloModule } from 'apollo-angular';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, HttpClientModule, BrowserAnimationsModule, ApolloModule, HttpLinkModule],
})
export class CoreModule {}
