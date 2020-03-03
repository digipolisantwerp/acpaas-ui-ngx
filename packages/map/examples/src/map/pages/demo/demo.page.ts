import {Component, OnInit} from '@angular/core';
import { baseMapAntwerp, baseMapWorldGray, LeafletMap, MapService } from '@acpaas-ui/ngx-components/map';
import { LatLng } from 'leaflet';

@Component({
	templateUrl: './demo.page.html',
})
export class DemoPageComponent implements OnInit {
	public importModule = `import { LeafletModule } from '@acpaas-ui/ngx-components/map';

@NgModule({
	imports: [
		LeafletModule
	]
});

export class AppModule {};`;

	public codeExampleJS1 =
`"styles": [
	"node_modules/leaflet/dist/leaflet.css",
]`;
	public codeExampleJS2 =
`import { LeafletMap, baseMapWorldGray, baseMapAntwerp, MapService } from '@acpaas-ui/ngx-components/map';

constructor(public mapService: MapService) {
}

public leafletMap: LeafletMap = new LeafletMap({
	zoom: 13, // default zoom level
	center: new LatLng(51.215, 4.425), // default center point
	onAddFeature: (layer) => {},
	onEditFeature: (feature) => {},
}, this.mapService);

public ngOnInit(): void {
	this.leafletMap.onInit.subscribe(() => {
		this.leafletMap.addTileLayer(baseMapWorldGray);
		this.leafletMap.addTileLayer(baseMapAntwerp);
 });
}`;
  public codeExampleHTML1 =
`<aui-leaflet [leafletMap]="leafletMap" [hasSidebar]="true">
	<div controls top left>
		<aui-leaflet-drag-control></aui-leaflet-drag-control>
		<aui-leaflet-draw-control></aui-leaflet-draw-control>
	</div>
	<div controls top right>
		<aui-leaflet-fullscreen-control></aui-leaflet-fullscreen-control>
	</div>
	<div controls bottom left>
		<aui-leaflet-locate-control zoomLevel="16"></aui-leaflet-locate-control>
	</div>
	<div controls bottom right>
		<aui-leaflet-zoom-control></aui-leaflet-zoom-control>
	</div>
	<div>
		Content displayed in sidebar
	</div>
</aui-leaflet>`;

	public leafletMap: LeafletMap;

	constructor() {
		this.leafletMap = new LeafletMap({
			zoom: 13, // default zoom level
			center: new LatLng(51.215, 4.425), // default center point
			onAddFeature: this.onAddFeature,
			onEditFeature: (feature) => {},
		}, new MapService('browser'));
	}

	public ngOnInit(): void {
		this.leafletMap.onInit.subscribe(() => {
			this.leafletMap.addTileLayer(baseMapWorldGray);
			this.leafletMap.addTileLayer(baseMapAntwerp);
	 });
	}

	public onAddFeature = (feature) => {
		console.log(feature);
		feature.on('click', () => {
			this.leafletMap.startEditLayer(feature);
			this.leafletMap.map.on('click', () => {
				this.leafletMap.stopEditLayer();
				this.leafletMap.map.off('click');
			});
		});
	}
}
