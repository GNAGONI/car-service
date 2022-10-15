import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class List extends PureComponent {
  static defaultProps = {
    headers: [],
    items: [],
    renderer: () => {},
    keyProp: '',
  };

  static propTypes = {
    items: PropTypes.array,
    renderer: PropTypes.func,
    keyProp: PropTypes.string,
    headers: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        key: PropTypes.string,
      }),
    ),
  };

  renderHeader() {
    return this.props.headers.map(({ label, key }) => (
      <div className="row__item row__item-header" key={key}>
        <strong className="data-title">{label}</strong>
      </div>
    ));
  }

  renderItems() {
    const { items, renderer, keyProp } = this.props;

    return items.map(item => (
      <div key={item[keyProp]} className="list__row">
        {renderer(item)}
      </div>
    ));
  }

  render() {
    return (
      <section className="list">
        <div className="list__row list__row-header">{this.renderHeader()}</div>

        {this.renderItems()}
      </section>
    );
  }
}
