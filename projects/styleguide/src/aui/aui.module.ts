import {NgModule} from '@angular/core';
import {FooterModule} from '../../../aui-layout/src/lib/footer';
import {LogoModule} from '../../../aui-logo/src/lib';
import {HeaderModule} from '../../../aui-layout/src/lib/header';
import {NavigationMenuModule} from '../../../aui-navigation-menu/src/lib/navigation-menu';
import {CodeSnippetModule} from '../../../aui-code-snippet/src/lib/code-snippet';
import {AnalyticsModule} from '../../../aui-analytics/src/lib/analytics';
import {AgendaModule} from '../../../aui-agenda/src/lib/agenda';
import {AvatarModule} from '../../../aui-avatar/src/lib/avatar';
import {CalendarModule} from '../../../aui-calendar/src/lib/calendar';
import {ContextModule} from '../../../aui-context/src/lib/context';
import {FlyoutModule} from '../../../aui-flyout/src/lib/flyout';
import {FlyoutButtonModule} from '../../../aui-flyout/src/lib/flyout-button';

@NgModule({
  imports: [
    FooterModule,
    LogoModule,
    HeaderModule,
    CodeSnippetModule,
    NavigationMenuModule.configure(),
    AnalyticsModule,
    AgendaModule,
    AvatarModule,
    CalendarModule,
    ContextModule,
    FlyoutModule,
    FlyoutButtonModule
  ],
  exports: [
    FooterModule,
    CodeSnippetModule,
    LogoModule,
    NavigationMenuModule,
    HeaderModule,
    AnalyticsModule,
    AgendaModule,
    AvatarModule,
    CalendarModule,
    ContextModule,
    FlyoutModule,
    FlyoutButtonModule
  ]
})
export class AuiModule {

}