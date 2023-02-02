import { Component, OnInit } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { getAnalytics, logEvent } from 'firebase/analytics';

@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrls: ['../home/home.component.scss'],
})
export class CvComponent implements OnInit {
    icons = { faDownload };
    cv = {
        render: 'assets/images/cv/cv.webp',
        pdf: 'assets/images/cv/MARTA PANCALDI - CV.pdf',
    };

    ngOnInit(): void {
        logEvent(getAnalytics(), 'CV visualised');
    }

    downloadPdfEvent() {
        logEvent(getAnalytics(), 'CV downloaded');
    }
}
