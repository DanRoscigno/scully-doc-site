import { Component, OnInit, ViewEncapsulation, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';
import { HighlightService } from '../services/highlight.service';

declare var ng: any;

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class DocsComponent implements OnInit, AfterViewChecked {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private highlightService: HighlightService
    ) {
  }

  ngOnInit() {}

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

}
