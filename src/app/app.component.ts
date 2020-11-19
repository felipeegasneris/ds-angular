import { Component } from '@angular/core';
// import '@vs-design-system/ds-checkbox';
import '@vs-design-system/ds-button';
import '@vs-design-system/ds-title';
import '@vs-design-system/ds-textarea';
import '@vs-design-system/ds-list';
import '@vs-design-system/ds-paragraph';
import '@vs-design-system/ds-icon';
import '@vs-design-system/ds-tooltip';
import '@vs-design-system/ds-spinner';
import {ColorComplementaryG5, ColorComplementaryB} from '@vs-design-system/ds-tokens/build/js/tokens';
import {css} from 'emotion';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  name = '';
  lastName = '';
  names = [];
  loading = false;
  containerClass = css`
    background-color: ${ColorComplementaryB};
    display: flex;
    margin: 82px auto 32px;
    padding: 0 16px;
    max-width: 960px;
    flex-direction: column;
    align-items: center;
  `;
  save(): void {
    this.loading = true;
    setTimeout(() => {
        this.names.push({name: this.name, last: this.lastName});
        this.loading = false;
      }, 1000);
  }
  changeName(evt): void {
    this.name = evt.target.value;
  }
  changeLastName(evt): void {
    this.lastName = evt.target.value;
  }
}
