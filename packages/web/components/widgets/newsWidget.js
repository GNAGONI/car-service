import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'server/pages';
import { Button } from 'react-bootstrap';

const news = [
  {
    id: '1',
    title: 'Waste hours on the Rolls-Royce Cullinan configurator',
    date: '12.02.03',
    link: '#',
    imgUrl: 'https://i.ytimg.com/vi/JplDNiSMHaM/maxresdefault.jpg',
  },
  {
    id: '2',
    title: 'Waste hours on the Rolls-Royce Cullinan configurator',
    date: '15.02.03',
    link: '#',
    imgUrl: 'https://i.ytimg.com/vi/JplDNiSMHaM/maxresdefault.jpg',
  },
  {
    id: '3',
    title: 'Waste hours on the Rolls-Royce Cullinan configurator',
    date: '16.02.03',
    link: '#',
    imgUrl: 'https://i.ytimg.com/vi/JplDNiSMHaM/maxresdefault.jpg',
  },
];

export default class NewsWidget extends PureComponent {
  static defaultProps = {
    news,
  };

  static propTypes = {
    news: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        date: PropTypes.string,
        link: PropTypes.string,
        imgUrl: PropTypes.string,
      }),
    ),
  };

  renderNews() {
    return this.props.news.map(newsItem => {
      const { title, date, link, imgUrl, id } = newsItem;

      return (
        <article className="post" key={id}>
          <div className="img-thumbnail">
            <a href="#">
              <img src={imgUrl} alt="Waste hours on the Rolls-Royce Cullinan configurator" width="100" height="70" />
            </a>
          </div>
          <div className="text-area">
            <h3>
              <a href={link}>{title}</a>
            </h3>
            <time className="date">{date}</time>
          </div>
        </article>
      );
    });
  }

  render() {
    return (
      <div className="news-widget">
        <section className="widget widget-media">
          <h2>
            <strong>Latest</strong> News
          </h2>
          <div className="post-holder">{this.renderNews()}</div>
          <Link route="#">
            <Button variant="success" className="widget-btn d-block">
              View more
            </Button>
          </Link>
        </section>
      </div>
    );
  }
}
