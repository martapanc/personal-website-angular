import { Component } from '@angular/core';
import { ProjectData } from './project-card/project-data';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss', '../home/home.component.scss'],
})
export class ProjectsComponent {
    projectData = ProjectData;

    filterTags = [...new Set(this.projectData.map(entry => entry.tags).reduce((acc, value) => acc.concat(value), []))];
    activeFilters: string[];

    constructor() {
        this.activeFilters = this.filterTags;
        console.log(this.activeFilters);
    }

    resetFilters() {
        this.activeFilters = this.filterTags;
    }

    applyFilter(event: Event) {
        const button = event.target as HTMLInputElement;
        const filterId = button.id.replace('-filter-btn', '');
        this.activeFilters = [filterId];
    }

    activeFiltersIncludeTags(tags: string[]): boolean {
        return tags.some(tag => this.activeFilters.includes(tag));
    }
}
