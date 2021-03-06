var React = require('react');
var L10nSpan = require('../shared/l10n-span');
var NewsTag = require('../news/news-tag');
var NewsFetcher = require('../../../modules/NewsFetcher');

var NewsComponent = React.createClass({
  getInitialState: function() {
    return {
      news: []
    };
  },

  componentDidMount: function() {
    NewsFetcher.get().then((news) => {
      this.setState({
        news: news
      });
    });
  },

  render: function() {
    var news = this.state.news;

    /* jshint ignore:start */
    return (
      <div className="news-slot">
        <div className="header clearfix">
          <h1>
            <i className="fa fa-fw fa-rss"></i>
            <L10nSpan l10nId="news_header"/>
          </h1>
        </div>
        <div className="news-component">
          {news.map(function(eachNews, index) {
            return <NewsTag key={index} data={eachNews}/>
          })}
        </div>
      </div>
    );
    /* jshint ignore:end */
  }
});

module.exports = NewsComponent;
