import { Routes } from '@angular/router';
import { ResumeUploadPageComponent } from './resume-upload-page/resume-upload-page.component';
import {AnalyzeListingPageComponent} from "./analyze-listing-page/analyze-listing-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
export const routes: Routes = [
    {path: 'uploadresume', component: ResumeUploadPageComponent},
    {path: 'analyzelisting', component: AnalyzeListingPageComponent},
    {path: 'home', component: HomePageComponent},
    {path: '', component: HomePageComponent},
];
 