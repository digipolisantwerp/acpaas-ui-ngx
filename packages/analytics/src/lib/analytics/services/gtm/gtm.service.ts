import { Injectable, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { WINDOW } from '@acpaas-ui/ngx-components/utils';
import { GTM_CONFIG, GTMConfig } from './config.conf';

@Injectable()
export class GTMService {

	constructor(
		@Inject(WINDOW) private windowService,
		@Inject(GTM_CONFIG) private config: GTMConfig
	) {}

	public addToDataLayer(data) {
		this.windowService.dataLayer.push(data);
	}

	public trigger(event: string, data = {}) {
		const eventData = {
			...data,
			'event': event,
		};
		this.addToDataLayer(eventData);
	}

	public triggerPageView(data = {}) {
		this.trigger(this.config.PAGE_VIEW.TRIGGER, data);
	}

	public triggerEvent(category: string, action: string, label?: string, value?: number) {
		this.trigger(this.config.EVENT.TRIGGER, {
			[this.config.EVENT.CATEGORY]: category,
			[this.config.EVENT.ACTION]: action,
			[this.config.EVENT.LABEL]: label,
			[this.config.EVENT.VALUE]: value,
		});
	}
}
